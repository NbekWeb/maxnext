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

  function openOrder(e) {
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
  }

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
    <article className="services" id="services">
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
              <svg
                width="1556"
                height="1203"
                viewBox="0 0 1556 1203"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L361.821 1203H744.235L380.87 0H0Z"
                  fill="url(#paint0_linear_416_481)"
                  fillOpacity="0.04"
                ></path>
                <path
                  d="M811.47 0L1173.19 1203H1555.6L1192.34 0H811.47Z"
                  fill="url(#paint1_linear_416_481)"
                  fillOpacity="0.04"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_416_481"
                    x1="372.118"
                    y1="2"
                    x2="372.118"
                    y2="1702.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#939393"></stop>
                    <stop offset="1" stopColor="#EAEAEA"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_416_481"
                    x1="1183.54"
                    y1="2"
                    x2="1183.54"
                    y2="1702.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#939393"></stop>
                    <stop offset="1" stopColor="#EAEAEA"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {data?.map((service, i) => (
              <li
                key={service.id}
                className={`services__point services-point ${
                  i === 0 ? "open" : ""
                }`}
                id={`services-point-${service.id}`}
              >
                <header className="services-point__header">
                  <span className="services-point__title-accent">
                    <svg
                      width="16"
                      height="26"
                      viewBox="0 0 16 26"
                      fill="#003A70"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.00242 0L0 13.0025L8.00242 26L16 13.0025L8.00242 0Z" />
                    </svg>
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
