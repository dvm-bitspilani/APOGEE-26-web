import { Component, type ReactNode } from "react";

// Fiber owns a separate React root. Catch model/render failures within that
// root and let the page render its original artwork outside the canvas.
export default class SceneBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}
