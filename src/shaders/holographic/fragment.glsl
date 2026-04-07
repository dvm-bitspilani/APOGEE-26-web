uniform vec3 uColor;
uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
uniform float uStripes;
void main()
{
    // Normal
   // vec3 normal = normalize(vNormal);
  //  if(!gl_FrontFacing)
   //     normal *= - 1.0;

    // Stripes
    float stripes = fract((vPosition.y * uStripes) / 1.8) * 1.8;
   // stripes = pow(stripes, 3.0);
   stripes = stripes * stripes * stripes;

    // Fresnel
   // vec3 viewDirection = normalize(vPosition - cameraPosition);
   // float fresnel = 0.81;
   // fresnel = pow(fresnel, 1.0);

    // Falloff
   // float falloff = smoothstep(0.9, 0.8, fresnel);
  // float falloff = 0.8;

    // Holographic
    float holographic = stripes * 0.81;
    // holographic += 0.81 * 0.55;
    holographic += 0.4455;
    holographic *= 0.8 ;

    // Final color
    gl_FragColor = vec4(uColor, holographic);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}