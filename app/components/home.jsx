import Head from "next/head";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { api } from "../utils/api";
import isTouch from "../utils/isTouch";

import Header from "./header";
import Foot from "./foot";
import Order from "./order";
import Hero from "./hero";
import Business from "./business";
import Gallery from "./gallery";
import Services from "./services";
import Contacts from "./contacts";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [img, setImg] = useState([]);

  const getData = async () => {
    try {
      const response = await api({
        url: "conf-site/contact/",
        method: "GET",
      });

      setData(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  const getServices = async () => {
    try {
      const response = await api({
        url: "conf-site/services/",
        method: "GET",
      });

      setServices(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };
  const getImg = async () => {
    try {
      const response = await api({
        url: "conf-site/service-carousel/",
        method: "GET",
      });

      setImg(response.data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    getData();
    getImg();
    getServices();
  }, []);

  function goto() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    // Cursor tracking animation
    const cursorPoint = document.querySelector(".cursor-point");

    const setCoordMouse = (e) => {
      gsap.to(cursorPoint, {
        left: e.clientX,
        top: e.clientY,
        stagger: 0.05,
        duration: 0.25,
      });
    };

    document.addEventListener("mousemove", setCoordMouse);

    // Hide cursor on mouse out
    const handleMouseOut = (event) => {
      if (!event.relatedTarget && !event.toElement) {
        cursorPoint.style.opacity = "0";
      }
    };

    // Show cursor on mouse over
    const handleMouseOver = () => {
      cursorPoint.style.opacity = "1";
    };

    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", setCoordMouse);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (!isTouch()) {
      // Horizontal scroll animation for non-touch devices
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
      // Cleanup ScrollTrigger instances
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
            <div id="hero">
              <Hero />
            </div>
            <div id="business">
              <Business />
            </div>
          </div>
          <Gallery />
          <Services img={img} />
          <Contacts data={data} services={services} />
        </main>
        <Foot />
      </div>
      <div className="scroll-up">
        <div className="scroll-up__container container">
          <span className="scroll-up__link" onClick={goto}>
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
          </span>
        </div>
      </div>
    </>
  );
}
