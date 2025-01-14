import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { api } from "../utils/api";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServicesSlider = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);

  const getData = async () => {
    try {
      const response = await api({
        url: "conf-site/services/",
        method: "GET",
      });

      setData(response.data);
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

  function openOrder  (e)  {
    const order = document.querySelector(".order");
    e.preventDefault();
    const nowScroll = window.scrollY;

    // Store current scroll position in CSS variable
    document.documentElement.style.setProperty(
      "--scroll-before-popup",
      nowScroll
    );

    if (!document.documentElement.classList.contains("touch")) {
    }

    order.classList.add("open");
  };

  useEffect(() => {
    getData();
    getImg();
  }, []);
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".services-slider", {
      modules: [Navigation],
      navigation: {
        nextEl: ".services-slider__button-next",
        prevEl: ".services-slider__button-prev",
        disabledClass: "disabled",
      },
      loop: true,
      allowTouchMove: document.documentElement.classList.contains("touch")
        ? true
        : false,
    });

    // Initialize accordion functionality
    let pointsContainer = document.querySelector(".services__accordion");
    if (document.documentElement.classList.contains("touch")) {
      const openPoint = pointsContainer.querySelector(".services-point.open");
      if (openPoint) {
        openPoint.classList.remove("open");
      }
    }

    pointsContainer.addEventListener("click", (e) => {
      let pointHeader = e.target.closest(".services-point__header");
      if (!pointHeader) {
        return;
      }
      let point = pointHeader.closest(".services-point");
      let openPoint = pointsContainer.querySelector(".services-point.open");
      if (openPoint) {
        openPoint.classList.remove("open");
      }
      if (point === openPoint) {
        if (!document.documentElement.classList.contains("touch")) {
          point.classList.add("open");
        }
      } else {
        point.classList.add("open");
      }
    });

    // Cleanup event listener when component unmounts
    return () => {
      pointsContainer.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <article className="services">
      <div className="services__container container">
        <h2 className="services__title base-title">services</h2>
        <div className="services__slider services-slider swiper">
          <div className="services-slider__controls">
            <button className="services-slider__button-prev">
              <svg
                width="20"
                height="36"
                viewBox="0 0 20 36"
                stroke="#003A70"
                style={{ fill: "none" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 34L18 18L2 2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="services-slider__button-next">
              <svg
                width="20"
                height="36"
                viewBox="0 0 20 36"
                stroke="#003A70"
                style={{ fill: "none" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 34L18 18L2 2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="services-slider__wrapper swiper-wrapper">
            {img.map((item, i) => (
              <div key={i} className="services-slider__slide swiper-slide">
                <img
                  className="services-slider__slide-image"
                  src={item?.image}
                  alt="Service Image One"
                />
              </div>
            ))}
          </div>

          <ul className="services__accordion">
            <div className="services__bg">
              <img src="/icon/back-business.svg" alt="Background Icon" />
            </div>
            {data?.map((service,i) => (
              <li
                key={service.id}
                className={`services__point services-point ${
                 i === 0 ? "open" : ""
                }`}
                id={`services-point-${service.id}`}
              >
                <header className="services-point__header">
                  <span className="services-point__title-accent">
                    <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                  </span>
                  <h3 className="services-point__title">{service.name}</h3>
                </header>
                <section className="services-point__content">
                  <p className="services-point__paragraph base-text">
                    {service.description}
                  </p>
                  {service.requirement_list.length > 0 && (
                    <ul className="services-point__list">
                      {service.requirement_list.map((req) => (
                        <li
                          key={req.id}
                          className="services-point__list-point base-text"
                        >
                          {req.name}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={openOrder}
                    className="services-point__button base-button order-open"
                    type="button"
                  >
                    <span>Place order</span>
                  </button>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ServicesSlider;
