import React from 'react';

const HeroSection = () => {
  return (
    <article id="hero" className="hero">
      <img src="/hero-image-one.webp" alt="" className="hero__bg-image" />
      <div className="hero__container container">
        <h1 className="hero__title">
          We are committed to providing <span className="hero__title-accent">top quality</span> services to airlines operating at <span className="hero__title-accent">Dubai DWC and DXB international airports</span>
        </h1>
        <button className="hero__button base-button order-open">
          <span>Place order</span>
        </button>
      </div>
    </article>
  );
};

export default HeroSection;
