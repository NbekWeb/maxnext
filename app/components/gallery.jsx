import React from 'react';

const GallerySection = () => {
  return (
    <article className="gallery">
      <div className="gallery__bg"></div>
      <div className="gallery__container container">
        <img src="/gallery-image-one.jpg" alt="Gallery Image One" className="gallery__image" />
        <img src="/gallery-image-two.jpg" alt="Gallery Image Two" className="gallery__image" />
      </div>
    </article>
  );
};

export default GallerySection;
