import { useEffect, useState } from "react";

export const usePortal = (): [boolean, HTMLElement | null] => {
  const [mounted, setMounted] = useState(false);
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setMounted(true);
    setPortal(document.body);
    return () => {
      setPortal(null);
    };
  }, []);
  return [mounted, portal];
};
