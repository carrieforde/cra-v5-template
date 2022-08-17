import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const darkModeMQ = window?.matchMedia("(prefers-color-scheme: dark");
  const [isDark, setIsDark] = useState<boolean>(darkModeMQ.matches || false);

  useEffect(() => {
    function handleColorSchemeChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }

    darkModeMQ.addEventListener("change", handleColorSchemeChange);

    return () => {
      darkModeMQ.removeEventListener("change", handleColorSchemeChange);
    };
  }, [darkModeMQ]);

  return isDark;
};
