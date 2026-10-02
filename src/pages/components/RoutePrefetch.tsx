import { useEffect } from "react";
import { prefetchRoute } from "../../routeLoaders";

export default function RoutePrefetch() {
  useEffect(() => {
    const prefetch = (event: Event) => {
      const anchor = (event.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      if (anchor && anchor.origin === location.origin) prefetchRoute(anchor.pathname);
    };
    document.addEventListener("pointerover", prefetch, { passive: true });
    document.addEventListener("focusin", prefetch);
    document.addEventListener("pointerdown", prefetch, { passive: true });
    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("focusin", prefetch);
      document.removeEventListener("pointerdown", prefetch);
    };
  }, []);
  return null;
}
