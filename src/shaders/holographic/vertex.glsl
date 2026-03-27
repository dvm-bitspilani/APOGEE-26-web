uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

// Simple random
float random2D(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    // Base position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Glitch effect
    float glitchTime = uTime - modelPosition.y;

    float glitchStrength =
        sin(glitchTime) +
        sin(glitchTime * 3.45) +
        sin(glitchTime * 8.76);

    glitchStrength /= 3.0;
    glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
    glitchStrength *= 0.5;

    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;

    // Final position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Pass data
    vPosition = modelPosition.xyz;
    vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;
}