export type HoverCameraProps = {
  minY: number;
  maxY: number;
  minX: number;
  maxX: number;
  lerp?: number;
  enabled?: boolean; // 👈 add this
};