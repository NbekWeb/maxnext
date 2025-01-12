import React, { useEffect } from "react";
import lenis from "../utils/scroll"; // Importing lenis for smooth scroll control.

const OrderSection = () => {
  useEffect(() => {
    const order = document.querySelector(".order");
    const orderOpenButtons = document.querySelectorAll(".order-open");
    const orderCloseButton = document.querySelector(".order__close");

    const openOrder = (e) => {
      e.preventDefault();
      const nowScroll = window.scrollY;

      // Store current scroll position in CSS variable
      document.documentElement.style.setProperty(
        "--scroll-before-popup",
        nowScroll
      );

      if (!document.documentElement.classList.contains("touch")) {
        lenis.stop(); // Stop smooth scrolling
      }

      order.classList.add("open");
    };

    const closeOrder = (e) => {
      e.preventDefault();

      if (!document.documentElement.classList.contains("touch")) {
        lenis.start(); // Resume smooth scrolling
      }

      order.classList.remove("open");

      // Scroll back to the previous position
      window.scrollTo({
        top: parseInt(
          document.documentElement.style.getPropertyValue(
            "--scroll-before-popup"
          ),
          10
        ),
      });
    };

    // Attach event listeners
    orderOpenButtons.forEach((button) =>
      button.addEventListener("click", openOrder)
    );
    orderCloseButton.addEventListener("click", closeOrder);

    // Cleanup on component unmount
    return () => {
      orderOpenButtons.forEach((button) =>
        button.removeEventListener("click", openOrder)
      );
      orderCloseButton.removeEventListener("click", closeOrder);
    };
  }, []);

  return (
    <section className="order">
      <div className="order__container container">
        <a href="" className="order__logo">
          <img src="/icon/logo.svg" alt="Logo" />
        </a>
        <button className="order__close">
          <img src="/icon/cross.svg" alt="Close" />
        </button>
        <h3 className="order__title">
          Leave your message and we'll be{" "}
          <span className="order__title-accent">sure to respond.</span>
        </h3>
        <form className="order__form order-form">
          <div className="order-form__field">
            <input
              type="text"
              className="order-form__input"
              placeholder="Name"
            />
          </div>
          <div className="order-form__group-field">
            <div className="order-form__field">
              <input
                type="email"
                className="order-form__input"
                placeholder="E-mail"
              />
            </div>
            <div className="order-form__field">
              <input
                type="text"
                className="order-form__input"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="order-form__field">
            <input
              type="text"
              className="order-form__input"
              placeholder="Your message"
            />
          </div>
          <button className="order-form__button base-button">
            <span>Send message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
