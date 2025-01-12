// app/page.jsx

"use client";

import { useEffect } from "react";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import Home from "./components/home";

export default function Page() {
  useEffect(() => {
    function setViewportWidth() {
      document.documentElement.style.setProperty(
        "--viewport-width",
        window.innerWidth
      );
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth
      );
    }

    setViewportWidth();
    window.addEventListener("resize", setViewportWidth);

    return () => {
      window.removeEventListener("resize", setViewportWidth);
    };
  }, []);

  return <Home/>;
}
