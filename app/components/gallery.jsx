import React from 'react';
import Image from "next/image";

const GallerySection = () => {
  return (
    <article className="gallery">
      <div className="gallery__bg"></div>
      <div className="gallery__container container">
        <Image width={578} height={561} src="/gallery-image-one.webp" alt="Gallery Image One" className="gallery__image" />
        <Image width={578} height={561} src="/gallery-image-two.webp" alt="Gallery Image Two" className="gallery__image" />
      </div>
    </article>
  );
};

export default GallerySection;
