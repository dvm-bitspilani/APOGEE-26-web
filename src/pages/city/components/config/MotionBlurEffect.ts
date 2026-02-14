import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

/**
 * Radial (zoom) motion blur — blurs outward from the screen center.
 *
 * Objects at the center (the car) stay sharp; blur increases toward
 * the edges. Only 6 taps for performance.
 */
const fragmentShader = /* glsl */ `
  uniform float intensity;
  uniform vec2 center;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 dir = uv - center;
    float dist = length(dir);
    vec2 blurVec = dir * intensity * dist;

    vec4 color = inputColor;
    color += texture2D(inputBuffer, uv + blurVec * -0.4);
    color += texture2D(inputBuffer, uv + blurVec * -0.2);
    color += texture2D(inputBuffer, uv + blurVec *  0.0);
    color += texture2D(inputBuffer, uv + blurVec *  0.2);
    color += texture2D(inputBuffer, uv + blurVec *  0.4);

    outputColor = color / 6.0;
  }
`;

export class MotionBlurEffect extends Effect {
  constructor({ centerX = 0.5, centerY = 0.5 } = {}) {
    super("MotionBlurEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map<string, Uniform>([
        ["intensity", new Uniform(0)],
        ["center", new Uniform({ x: centerX, y: centerY })],
      ]),
    });
  }

  /**
   * Whether this effect is active.
   * Exists at runtime on the `Effect` base class but is missing
   * from the `postprocessing` type definitions.
   */
  declare enabled: boolean;

  get intensity(): number {
    return this.uniforms.get("intensity")!.value as number;
  }
  set intensity(v: number) {
    this.uniforms.get("intensity")!.value = v;
  }
}

