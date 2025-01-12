import React from 'react';

const BusinessSection = () => {
  return (
    <article id="business" className="business">
      <div className="business__bg">
        {/* Include the back-business icon */}
        <img src="/icon/back-business.svg" alt="Business background icon" />
      </div>
      <div className="business__container container">
        <h2 className="business__title base-title">The business</h2>
        <div className="business__text base-text">
          <p>Maintenance and Repair Organization (MRO)</p>
          <p>MAX Technique is a newly established Maintenance and Repair Organization founded by aviation enthusiasts and professionals.</p>
          <p>Our skilled and experienced team is dedicated to ensuring the highest safety standards for your flights while keeping your operations on schedule.</p>
        </div>
        <figure className="business__image">
          <img src="/business-image-one.jpg" alt="Business image" className="business__image-wraper" />
          <figcaption className="business__image-caption base-text">
            <p>Currently, we are finalizing the preparations to launch our line station and would be delighted to receive any inquiries or cooperation proposals.</p>
            <p>We look forward to serving you soon at Dubai airports!</p>
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default BusinessSection;
