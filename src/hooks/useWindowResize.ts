import { useEffect, useState } from "react";
import { IOnResizeSize } from "../types/hooks";

export const useWindowSize = (): IOnResizeSize => {
  const [windowSize, setWindowSize] = useState<IOnResizeSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
