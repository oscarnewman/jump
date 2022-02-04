import type { AppProps } from "next/app";
import "jump/dist/index.css";
import "../style/tailwind.css";
import { useCallback, useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const updateState = useCallback((query) => {
    if (query.matches) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, []);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateState);

    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }

    return () => mediaQuery.removeEventListener("change", updateState);
  }, [updateState]);

  return <Component {...pageProps} />;
}

export default App;
