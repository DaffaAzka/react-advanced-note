import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadPreline() {
  return import("preline/dist/index.js");
}

export function usePreline() {
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);
}

