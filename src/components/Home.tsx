import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { ThemeContext } from "../App";
import { UrlProvider } from "../context/Url.tsx";
import { useEffect, useState } from "react";
import Button from "./Button";
import { CartProvider } from "../context/Cart.tsx";
import CartButton from "./CartButton.tsx";

export default function Home() {
  const stored = localStorage.getItem("theme");
  const [theme, setTheme] = useState(stored);
  useEffect(() => {
    // console.log(stored);
    if (stored === null) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setTheme(parseInt(prefersDark) ? "dark" : "light");
      localStorage.setItem("theme", !parseInt(prefersDark) ? "dark" : "light");
    } else {
      setTheme(stored);
    }
  }, []);
  return (
    <ThemeContext value={theme}>
      <UrlProvider>
        <CartProvider>
          <Navbar />
          <CartButton/>
          <Button setTheme={setTheme} theme={theme} />
          <Outlet />
        </CartProvider>
      </UrlProvider>
    </ThemeContext>
  );
}
