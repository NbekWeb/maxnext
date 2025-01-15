import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <article id="hero" className="hero">
      <Image
        src="/hero-image-one.webp"
        alt="Hero Background Image"
        priority
        layout="fill"
        quality={100}
        className="hero__bg-image"
      />
      <div className="hero__container container">
        <h1 className="hero__title">
          We are committed to providing{" "}
          <span className="hero__title-accent">top quality</span> services to
          airlines operating at{" "}
          <span className="hero__title-accent">
            Dubai DWC and DXB international airports
          </span>
        </h1>
        <button className="hero__button base-button order-open">
          <span>Place order</span>
        </button>
      </div>
    </article>
  );
};

export default HeroSection;
