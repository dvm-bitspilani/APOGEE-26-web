// hooks/useNavController.ts
import { useHamburgerStore, useNavStateStore } from "../utils/store";

export default function useNavVisibility() {
  const setNavState = useNavStateStore((s) => s.setNavState);

  const openNav = () => {
    setNavState("opening");
    useHamburgerStore.getState().setManualHidden(true);
  };

  const closeNav = () => {
    setNavState("closing");
    useHamburgerStore.getState().setManualHidden(false);
  };

  const toggleNav = () => {
    const current = useNavStateStore.getState().navState;

    if (current === "open" || current === "opening") {
      closeNav();
    } else {
      openNav();
    }
  };

  return {
    openNav,
    closeNav,
    toggleNav,
  };
}