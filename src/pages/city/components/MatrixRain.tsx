import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 9900;
const AREA_X = 220;
const AREA_Y = 220;
const AREA_Z = 300;

/* ===================== CREATE CHAR ATLAS ===================== */
function createCharAtlas() {
  const size = 1024;
  const grid = 16;
  const cell = size / grid;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size, size);

  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソ";

  ctx.fillStyle = "#00ff9f";
  ctx.font = "bold 54px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let i = 0; i < grid * grid; i++) {
    const x = i % grid;
    const y = Math.floor(i / grid);
    const char = chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(char, x * cell + cell / 2, y * cell + cell / 2);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;

  return tex;
}

/* ===================== COMPONENT ===================== */
export default function MatrixRain() {
  const pointsRef = useRef<THREE.Points>(null!);

  /* ---------- GEOMETRY ---------- */
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();

    const pos = new Float32Array(COUNT * 3);
    const speed = new Float32Array(COUNT);
    const charIndex = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const colX = (Math.random() - 0.5) * AREA_X;

      pos[i * 3 + 0] = colX;
      pos[i * 3 + 1] = Math.random() * AREA_Y;
      pos[i * 3 + 2] = Math.random() * AREA_Z;

      speed[i] = 5 + Math.random() * 40;

      // choose ONE character cell (0 → 255)
      charIndex[i] = Math.floor(Math.random() * 256);
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("charIndex", new THREE.BufferAttribute(charIndex, 1));

    (geo as any).speed = speed;
    return geo;
  }, []);

  /* ---------- ANIMATION ---------- */
  useFrame((_, dt) => {
    const pos = geometry.attributes.position.array as Float32Array;
    const speed = (geometry as any).speed as Float32Array;

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 1] -= speed[i] * dt;

      if (pos[i * 3 + 1] < -20) {
        pos[i * 3 + 1] = AREA_Y;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  });

  const atlas = useMemo(() => createCharAtlas(), []);

  /* ---------- SHADER MATERIAL ---------- */
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uAtlas: { value: atlas },
        uColor: { value: new THREE.Color("#00ff9f") },
      },

      vertexShader: `
        attribute float charIndex;
        varying float vChar;

        void main(){
          vChar = charIndex;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = 6.0 * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,

      fragmentShader: `
        uniform sampler2D uAtlas;
        uniform vec3 uColor;
        varying float vChar;

        void main(){

          float grid = 16.0;
          vec2 uv = gl_PointCoord;

          float x = mod(vChar, grid);
          float y = floor(vChar / grid);

          vec2 atlasUV = (vec2(x, y) + uv) / grid;

          vec4 tex = texture2D(uAtlas, atlasUV);

          if(tex.a < 0.1) discard;

          vec3 col = uColor * tex.rgb * 2.0;

          gl_FragColor = vec4(col, tex.a);
        }
      `,
    });
  }, [atlas]);

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
