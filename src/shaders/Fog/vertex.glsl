varying vec2 vUv;
varying float vDepth;
varying float vWorldY;

void main() {
  vUv = uv;

  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldY = worldPos.y;

  vec4 mvPosition = viewMatrix * worldPos;
  gl_Position = projectionMatrix * mvPosition;

  vDepth = -mvPosition.z;

  
}