uniform float u_time;
uniform float u_density;
uniform float u_glowStrength;
uniform float u_noiseStrength;

uniform vec3 u_purple;
uniform vec3 u_cyan;
varying float vWorldY;
varying vec2 vUv;
varying float vDepth;
uniform float u_heightFalloff;

//
// --- Noise ---
//
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;

  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {

  vec2 uv = vUv;

  // -------------------------
  // 💨 Smoke motion
  // -------------------------
  uv.y += u_time *0.05;
  uv.x += sin(uv.y * 2.0 + u_time) * 0.1;

  float n = fbm(uv * 3.0);

  // smooth smoke blobs
  float smoke = smoothstep(0.3, 0.7, n);

  // -------------------------
  // 🌫️ Depth fog (Z)
  // -------------------------
 // -------------------------
// 🌫️ Depth fog (Z - main)
// -------------------------
float fogZ = 1.0 - exp(-vDepth * u_density);
fogZ = clamp(fogZ, 0.0, 1.0);


float fogY = exp(-abs(vWorldY) * 2.8);

// clamp just in case
fogY = clamp(fogY, 0.0, 100.0);

// -------------------------
// 🔥 Combine (Z dominates)
// -------------------------
// simulate thickness using view depth
float thickness = smoothstep(0.0, 20.0, vDepth);

// combine with fog
float fogFactor = fogZ * 0.6 + fogY * 0.2 + thickness * 0.2;
fogFactor = clamp(fogFactor, 0.0, 1.0);

  // -------------------------
  // 🌈 Cyan → Purple
  // -------------------------
  vec3 fogColor = mix(u_purple, u_cyan, uv.y);

  // 🔥 ORIGINAL GREEN TINT (restored)
  fogColor += n * u_noiseStrength;

  // -------------------------
  // 🎯 Alpha
  // -------------------------
  float alpha = smoke * fogFactor*0.5;

  // optional top fade (you had this originally)
  alpha *= smoothstep(1.0, 0.2, vUv.y);

  // -------------------------
  // ✨ Glow
  // -------------------------
  float glow = pow(alpha, 1.5);
  vec3 finalColor = fogColor * (1.0 + glow *0.005* u_glowStrength);
finalColor = clamp(finalColor, 0.0, 0.5);
  gl_FragColor = vec4(finalColor, alpha);
}