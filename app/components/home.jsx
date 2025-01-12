import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import isTouch from "../utils/isTouch";

import Header from "./Header";
import Foot from "./foot";
import Order from "./order";
import Hero from "./hero";
import Business from "./business";
import Gallery from "./gallery";
import Services from "./services";
import Contacts from "./contacts";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const cursorPoint = document.querySelector(".cursor-point");

    function setCoordMouse(e) {
      gsap.to(cursorPoint, {
        left: e.clientX,
        top: e.clientY,
        stagger: 0.05,
        duration: 0.25,
      });
    }

    document.addEventListener("mousemove", setCoordMouse);

    document.addEventListener("mouseout", (event) => {
      if (!event.relatedTarget && !event.toElement) {
        cursorPoint.style.opacity = "0";
      }
    });

    document.addEventListener("mouseover", () => {
      cursorPoint.style.opacity = "1";
    });

    return () => {
      document.removeEventListener("mousemove", setCoordMouse);
      document.removeEventListener("mouseout");
      document.removeEventListener("mouseover");
    };
  }, []);

  useEffect(() => {
    if (!isTouch()) {
      gsap.to(".horizontal-scroll-container", {
        x: "-100vw",
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-scroll-container",
          end: () => "+=" + 1 * window.outerWidth,
          pin: true,
          scrub: 0,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="cursor-point"></div>
      <div className="wrapper">
        <Header />
        <Order />
        <main className="main">
          <div className="horizontal-scroll-container">
            <Hero />
            <Business />
          </div>
          <Gallery />
          <Services />
          <Contacts />
        </main>
        <Foot />
      </div>
      <div className="scroll-up">
        <div className="scroll-up__container container">
          <a
            className="scroll-up__link"
            href="#hero"
            data-anchor-position="0vw"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              stroke="#656565"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29 21L21 13L13 21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 29V13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
