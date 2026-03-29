varying vec2 vUv;
        uniform vec3 uColor;
     //   uniform float uTime;
     //   uniform float uActive;
        uniform float uBaseIntensity;
        void main() {
          float glow = 0.45+ uBaseIntensity;
          vec3 neon = uColor;
          // vec3 base = vec3(0.02, 0.02, 0.03);

          // vec3 color = mix(base, neon * glow * 1.5, 1.0);
          vec3 color =neon * glow * 1.5;
          float alpha = 0.85 + glow * 0.15;

          gl_FragColor = vec4(color, alpha);
        }