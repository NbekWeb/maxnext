"use client";

import { useEffect } from "react";
import "./styles/index.scss";
// import "swiper/css";
// import "swiper/css/navigation";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("./components/home"), { ssr: false });

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures the code is only executed on the client-side
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
    }
  }, []);

  return <Home />;
}
