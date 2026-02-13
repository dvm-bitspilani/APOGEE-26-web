import { useEffect, useState } from "react";

export function useKonami() {
  const [active, setActive] = useState(false);

   useEffect(() => {
    const seq = ["d", "v", "m"]; 
    let i = 0;

    function onKey(e: KeyboardEvent) {
  if (e.repeat) return; // ignore long-press

  const key = e.key.toLowerCase();

  if (key === seq[i]) {
    i++;
    if (i === seq.length) {
      setActive(prev => !prev); // toggle
      i = 0;
    }
  } else {
    i = 0;
  }
}


    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return active;
}
