import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServicesSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".services-slider", {
      modules: [Navigation],
      navigation: {
        nextEl: ".services-slider__button-next",
        prevEl: ".services-slider__button-prev",
        disabledClass: "disabled",
      },
      loop: true,
      allowTouchMove: document.documentElement.classList.contains("touch"),
    });

    // Accordion functionality

    const pointsContainer = document.querySelector(".services__accordion");

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".services__bg img", {
      y: "20%", // Moves the background image at a slower rate
      ease: "none",
      scrollTrigger: {
        trigger: ".services__slider",
        start: "top bottom", // Trigger when the top of the container reaches the bottom of the viewport
        end: "bottom top", // End when the bottom of the container reaches the top of the viewport
        scrub: true, // Smooth scrolling
      },
    });

    if (document.documentElement.classList.contains("touch")) {
      pointsContainer
        .querySelector(".services-point.open")
        .classList.remove("open");
    }

    const handleAccordionClick = (e) => {
      const pointHeader = e.target.closest(".services-point__header");
      if (!pointHeader) return;

      const point = pointHeader.closest(".services-point");
      const openPoint = pointsContainer.querySelector(".services-point.open");
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
    };

    pointsContainer.addEventListener("click", handleAccordionClick);

    // Cleanup
    return () => {
      pointsContainer.removeEventListener("click", handleAccordionClick);
    };
  }, []);

  return (
    <article className="services">
      <div className="services__container container">
        <h2 className="services__title base-title">services</h2>
        <div className="services__slider services-slider swiper">
          <div className="services-slider__controls">
            <button className="services-slider__button-prev">
              <img src="/icon/arrow-slider.svg" alt="Previous Arrow" />
            </button>
            <button className="services-slider__button-next">
              <img src="/icon/arrow-slider.svg" alt="Next Arrow" />
            </button>
          </div>
          <div className="services-slider__wrapper swiper-wrapper">
            <div className="services-slider__slide swiper-slide">
              <img
                className="services-slider__slide-image"
                src="/services-image-one.jpg"
                alt="Service Image One"
              />
            </div>
            <div className="services-slider__slide swiper-slide">
              <img
                className="services-slider__slide-image"
                src="/services-image-two.jpg"
                alt="Service Image Two"
              />
            </div>
            <div className="services-slider__slide swiper-slide">
              <img
                className="services-slider__slide-image"
                src="/services-image-three.jpg"
                alt="Service Image Three"
              />
            </div>
          </div>

          <ul className="services__accordion">
            <div className="services__bg">
              <img src="/icon/back-business.svg" alt="Background Icon" />
            </div>
            <li
              className="services__point services-point open"
              id="services-point-one"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">
                  Aircraft line maintenance services
                </h3>
              </header>
              <section className="services-point__content">
                <ul className="services-point__list">
                  <li className="services-point__list-point base-text">
                    Aircraft transit, daily, and weekly checks
                  </li>
                  <li className="services-point__list-point base-text">
                    AOG support
                  </li>
                  <li className="services-point__list-point base-text">
                    Aircraft technical certification
                  </li>
                  <li className="services-point__list-point base-text">
                    Aircraft servicing
                  </li>
                  <li className="services-point__list-point base-text">
                    Cabin maintenance
                  </li>
                  <li className="services-point__list-point base-text">
                    Unblocking lavatory bowl/faucett
                  </li>
                  <li className="services-point__list-point base-text">
                    Troubleshooting
                  </li>
                  <li className="services-point__list-point base-text">
                    Engineering & manpower support
                  </li>
                  <li className="services-point__list-point base-text">
                    Qualified aircraft towing technicians’ assistant
                  </li>
                </ul>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li
              className="services__point services-point"
              id="services-point-two"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">Ramp support unit</h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph services-point__paragraph--margin-small base-text">
                  We have developed a ramp support unit that can clean leakage
                  in the ramp and support AOG maintenance activities.
                </p>
                <p className="services-point__paragraph base-text">
                  This unit will allow MAX TECHNIQUE to act independently
                  without the need to borrow equipment from other vendors.
                  Furthermore, it will let carriers to reduce cost per landing.
                </p>
                <p className="services-point__paragraph base-text services-point__paragraph--margin-small">
                  The kit consists of:
                </p>
                <ul className="services-point__list">
                  <li className="services-point__list-point base-text">
                    air compressor
                  </li>
                  <li className="services-point__list-point base-text">
                    electric generator (capable to operate 800 watts lighting,
                    as well for ramp maintenance)
                  </li>
                  <li className="services-point__list-point base-text">
                    high pressure wash machine
                  </li>
                  <li className="services-point__list-point base-text">
                    air, dry, and liquid vacuum
                  </li>
                  <li className="services-point__list-point base-text">
                    150 liters water tank
                  </li>
                  <li className="services-point__list-point base-text">
                    800 watts LED light (environmentally friendly)
                  </li>
                </ul>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li
              className="services__point services-point"
              id="services-point-three"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">
                  Tools, equipment leasingand consumable supply
                </h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph services-point__paragraph--margin-small base-text">
                  MAX TECHNIQUE is equipped with the latest and technically
                  advanced tools and equipment for most types of aircrafts.
                </p>
                <p className="services-point__paragraph base-text">
                  Tools and equipment are stored in a controlled atmosphere
                  storage facility, regularly calibrated and maintained to the
                  highest standards.
                </p>
                <p className="services-point__paragraph base-text">
                  MAX TECHNIQUE is ready to support partner companies with
                  leasing tools and equipment.
                </p>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li
              className="services__point services-point"
              id="services-point-four"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">
                  Technical store collection/delivery(logistic) services
                </h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph base-text services-point__paragraph--margin-small">
                  If your aircraft is unable to be dispatched due to
                  unavailability of a specific spare part, MAX TECHNIQUE will
                  arrange the logistics for the needed spares to reach Dubai
                  Airport as early as possible.
                </p>
                <p className="services-point__paragraph base-text">
                  This will minimize your ground time and parking fees, as well
                  as reducing the cost of landing.
                </p>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li
              className="services__point services-point"
              id="services-point-five"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">
                  Technical store space leasing, tools management
                </h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph base-text">
                  You can lease a space to store your aircraft spares and
                  equipment at MAX TECHNIQUE.
                </p>
                <p className="services-point__paragraph base-text">
                  The MAX TECHNIQUE store management can offer aircraft spare
                  parts storage and administration in compliance with strict
                  aviation standards.
                </p>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li
              className="services__point services-point"
              id="services-point-six"
            >
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">
                  Aircraft headset services
                </h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph base-text">
                  MAX TECHNIQUE provides arrival, departure and towing headset
                  communication services for airliners.
                </p>
                <p className="services-point__paragraph base-text">
                  We are well equipped with headsets and experienced and trained
                  staffs.
                </p>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
          </ul>

    
        </div>
      </div>
    </article>
  );
};

export default ServicesSlider;
