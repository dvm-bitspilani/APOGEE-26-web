import { BlendFunction, Effect, EffectAttribute } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
uniform float strength;
uniform vec2 center;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  if (strength < 0.001) {
    outputColor = inputColor;
    return;
  }

  // Direction from center to this pixel
  vec2 dir = uv - center;
  float dist = length(dir);

  // Blur increases with distance from center (car stays sharp)
  float blurAmount = strength * dist;

  const int SAMPLES = 20;
  vec4 result = vec4(0.0);

  for (int i = 0; i < SAMPLES; i++) {
    float t = float(i) / float(SAMPLES - 1) - 0.5;
    vec2 offset = dir * t * blurAmount;
    result += texture2D(inputBuffer, uv + offset);
  }

  outputColor = result / float(SAMPLES);
}
`;

export class MotionBlurEffect extends Effect {
  constructor() {
    super("MotionBlurEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      attributes: EffectAttribute.CONVOLUTION,
      uniforms: new Map<string, Uniform>([
        ["strength", new Uniform(0.0)],
        ["center", new Uniform([0.5, 0.5])],
      ]),
    });
  }

  set strength(value: number) {
    (this.uniforms.get("strength") as Uniform).value = value;
  }

  get strength(): number {
    return (this.uniforms.get("strength") as Uniform).value;
  }
}
