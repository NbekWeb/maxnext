import React, { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    const selectField = document.querySelector(
      ".contacts-form__field:has(.contacts-form__input--select)"
    );
    const input = selectField.querySelector(".contacts-form__input");
    const options = selectField.querySelector(".contacts-form__select");

    const toggleSelect = (e) => {
      selectField.classList.toggle("open");
    };

    const toggleOption = (e) => {
      let option = e.target.closest(".contacts-form__option");
      if (!option) {
        return;
      }
      option.classList.toggle("choosed");
    };

    input.addEventListener("click", toggleSelect);
    selectField.addEventListener("click", toggleOption);

    // Cleanup event listeners on component unmount
    return () => {
      input.removeEventListener("click", toggleSelect);
      selectField.removeEventListener("click", toggleOption);
    };
  }, []);

  return (
    <article id="contacts" className="contacts">
      <div className="contacts__bg">
        {/* Include your SVG image here */}
        <img src="/icon/back-contacts.svg" alt="Background" />
      </div>
      <div className="contacts__bg">
        {/* Include your SVG image here */}
        <img src="/icon/back-contacts.svg" alt="Background" />
      </div>
      <div className="contacts__cotnainer container">
        <h2 className="contacts__title base-title">contacts</h2>
        <div className="contacts__units">
          <address className="contacts__unit">
            <h4 className="contacts__unit-title">Maintenance unit</h4>
            <a
              className="contacts__unit-mail"
              href="mailto:salem.mutahar@max-tech.aero"
            >
              salem.mutahar@max-tech.aero
            </a>
            <a href="tel:+971551515695" className="contacts__unit-phone">
              +971 55 151 5695
            </a>
          </address>
          <address className="contacts__unit">
            <h4 className="contacts__unit-title">Commercial unit</h4>
            <a
              className="contacts__unit-mail"
              href="mailto:commerce@max-tech.aero"
            >
              commerce@max-tech.aero
            </a>
            <a href="tel:+971547096492" className="contacts__unit-phone">
              +971 54 709 6492
            </a>
          </address>
          <address className="contacts__unit">
            <h4 className="contacts__unit-title">Logistics unit</h4>
            <a
              className="contacts__unit-mail"
              href="mailto:logistics@max-tech.aero"
            >
              logistics@max-tech.aero
            </a>
            <a href="tel:+971547096491" className="contacts__unit-phone">
              +971 54 709 6491
            </a>
          </address>
        </div>
        <div className="contacts__addresses">
          <address className="contacts__address">
            Al Maktoum International Airport, Emirates Rd — Dubai South — Dubai
            — United Arab Emirates
          </address>
          <address className="contacts__address">
            Dubai International Airport, Dubai — United Arab Emirates
          </address>
        </div>
        <div className="contacts__map">
          <div className="contacts__map-overlay">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81645.17426693511!2d55.284407483543205!3d25.26247881937677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sru!4v1734538966217!5m2!1sru!2sru"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <section className="contacts__share">
          <h3 className="contacts__subtitle">
            We will be glad if{" "}
            <span className="contacts__subtitle-accent">
              you share your impressions
            </span>{" "}
            about the service provided.
          </h3>
          <form action="" className="contacts__form contacts-form">
            <h4 className="contacts-form__title">
              Leave your message and we'll be sure to respond.
            </h4>
            <div className="contacts-form__field">
              <input
                type="text"
                className="contacts-form__input"
                placeholder="Name"
              />
            </div>
            <div className="contacts-form__group-field">
              <div className="contacts-form__field">
                <input
                  type="email"
                  className="contacts-form__input"
                  placeholder="E-mail"
                />
              </div>
              <div className="contacts-form__field">
                <input
                  type="text"
                  className="contacts-form__input"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="contacts-form__field">
              <span className="contacts-form__input contacts-form__input--select">
                Choose the type of a service
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 11"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1V11H1"
                    stroke="#F0F0F0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="contacts-form__select">
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Aircraft line maintenance services
                </div>
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Ramp support unit
                </div>
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Tools, equipment leasing and consumable supply
                </div>
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Technical store collection/delivery (logistic) services
                </div>
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Technical store space leasing, tools management
                </div>
                <div className="contacts-form__option">
                  <span className="contacts-form__option-active">
                    {/* Include your SVG icon here */}
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
                  Aircraft headset services
                </div>
              </div>
            </div>
            <div className="contacts-form__field">
              <input
                type="text"
                className="contacts-form__input"
                placeholder="Your message"
              />
            </div>
            <button className="contacts-form__button base-button">
              <span>Send message</span>
            </button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Contacts;
