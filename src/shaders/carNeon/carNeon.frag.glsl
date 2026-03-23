varying vec2 vUv;
        uniform float uTime;
        uniform float uActive;

        void main() {
          float glow = sin(uTime * 2.0) * 0.5 + 1.0;

          vec3 neon = vec3(0.0, 1.0, 0.8);
          vec3 base = vec3(0.02, 0.02, 0.03);

          vec3 color = mix(base, neon * glow * 1.5, uActive);
          float alpha = 0.85 + glow * 0.15;

          gl_FragColor = vec4(color, alpha);
        }