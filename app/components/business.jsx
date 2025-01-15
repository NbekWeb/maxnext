import React from "react";
import Image from "next/image";

const BusinessSection = () => {
  return (
    <article className="business">
      <div className="business__bg">
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
          />
          <path
            d="M811.47 0L1173.19 1203H1555.6L1192.34 0H811.47Z"
            fill="url(#paint1_linear_416_481)"
            fillOpacity="0.04"
          />
          <defs>
            <linearGradient
              id="paint0_linear_416_481"
              x1="372.118"
              y1="2"
              x2="372.118"
              y2="1702.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#939393" />
              <stop offset="1" stopColor="#EAEAEA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_416_481"
              x1="1183.54"
              y1="2"
              x2="1183.54"
              y2="1702.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#939393" />
              <stop offset="1" stopColor="#EAEAEA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="business__container container">
        <h2 className="business__title base-title">The business</h2>
        <div className="business__text base-text">
          <p>Maintenance and Repair Organization (MRO)</p>
          <p>
            MAX Technique is a newly established Maintenance and Repair
            Organization founded by aviation enthusiasts and professionals.
          </p>
          <p>
            Our skilled and experienced team is dedicated to ensuring the
            highest safety standards for your flights while keeping your
            operations on schedule.
          </p>
        </div>
        <figure className="business__image">
          <Image
            src="/business-image-one.webp"
            alt="Business image"
            width={560}
            height={355}
            className="business__image-wraper"
          />
          <figcaption className="business__image-caption base-text">
            <p>
              Currently, we are finalizing the preparations to launch our line
              station and would be delighted to receive any inquiries or
              cooperation proposals.
            </p>
            <p>We look forward to serving you soon at Dubai airports!</p>
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default BusinessSection;
