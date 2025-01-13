"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
import isTouchDevice from "./utils/isTouch";
import { api } from "./utils/api";

export default function RootLayout({ children }) {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await api({
        url: "conf-site/seo-details/",
        method: "GET",
      });

      setData(response.data?.[0]);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isTouchDevice()) {
      htmlElement.classList.add("touch");
    } else {
      htmlElement.classList.remove("touch");
    }

    const setIsScroll = () => {
      let documentElement = document.documentElement;
      if (window.scrollY > 0) {
        documentElement.classList.add("scroll");
      } else {
        documentElement.classList.remove("scroll");
      }
    };

    const setIsVerticalScroll = () => {
      let documentElement = document.documentElement;
      if (
        window.scrollY > 0 &&
        document.documentElement.classList.contains("touch")
      ) {
        documentElement.classList.add("horizontal-scroll");
      } else if (
        window.scrollY > window.outerWidth &&
        !document.documentElement.classList.contains("touch")
      ) {
        documentElement.classList.add("horizontal-scroll");
      } else {
        documentElement.classList.remove("horizontal-scroll");
      }
    };

    document.addEventListener("DOMContentLoaded", setIsScroll);
    window.addEventListener("scroll", setIsScroll);
    document.addEventListener("DOMContentLoaded", setIsVerticalScroll);
    window.addEventListener("scroll", setIsVerticalScroll);

    return () => {
      window.removeEventListener("scroll", setIsScroll);
      window.removeEventListener("scroll", setIsVerticalScroll);
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta name="keywords" content={data?.keywords} />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReactLenis
          root
          options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
        >
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
