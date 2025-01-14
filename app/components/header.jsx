import { useEffect } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import isTouch from "../utils/isTouch";

const BurgerMenu = () => {
  function goTo(val = "") {
    const burger = document.querySelector(".burger");

    burger.classList.remove("open");

    if (val != "") {
      const targetElement = document.getElementById(val);
      console.log(targetElement);
      if (targetElement) {
        if (val == "business" && !isTouch())
          document.documentElement.scrollTo({
            top: window.innerWidth, // Position calculated based on the target element
            behavior: "smooth",
          });
        else {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  useEffect(() => {
    const burger = document.querySelector(".burger");
    const burgerLinks = document.querySelectorAll(".burger__link");
    const headerBurger = document.querySelector(".header__burger");
    const burgerClose = document.querySelector(".burger__close");

    burgerLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.classList.add("hoverin");
      });

      link.addEventListener("mouseout", () => {
        link.classList.remove("hoverin");
        link.classList.add("hoverout");
        setTimeout(() => {
          link.classList.remove("hoverout");
        }, 400);
      });
    });

    headerBurger.addEventListener("click", (e) => {
      e.preventDefault();
      let nowScroll = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-before-popup",
        nowScroll
      );

      burger.classList.add("open");
    });

    burgerClose.addEventListener("click", (e) => {
      e.preventDefault();
      if (!document.documentElement.classList.contains("touch")) {
      }
      burger.classList.remove("open");
      window.scrollTo({
        top: Number(
          document.documentElement.style.getPropertyValue(
            "--scroll-before-popup"
          )
        ),
      });
    });

    return () => {
      burgerLinks.forEach((link) => {
        link.removeEventListener("mouseover", () => {});
        link.removeEventListener("mouseout", () => {});
      });
      headerBurger.removeEventListener("click", () => {});
      burgerClose.removeEventListener("click", () => {});
    };
  }, []);

  useEffect(() => {
    const setColorHeader = () => {
      if (typeof document == "undefined") return;

      let header = document.querySelector(".header");
      let scrollY = window.scrollY;

      if (
        Math.ceil(scrollY) >=
        document.querySelector("#contacts").getBoundingClientRect().top +
          scrollY -
          40
      ) {
        header.style.setProperty("--header-color", "var(--accent-color)");
      } else if (
        Math.ceil(scrollY) >=
          document.querySelector(".hero").clientHeight - 40 &&
        document.documentElement.classList.contains("touch")
      ) {
        header.style.setProperty("--header-color", "var(--accent-color)");
      } else if (
        Math.ceil(scrollY) >= window.innerWidth / 2 &&
        !document.documentElement.classList.contains("touch")
      ) {
        header.style.setProperty("--header-color", "var(--accent-color)");
      } else {
        header.style.setProperty("--header-color", "var(--secondary-color)");
      }

      if (
        Math.ceil(scrollY) >=
        document.querySelector("#contacts").getBoundingClientRect().top +
          scrollY -
          40
      ) {
        header.style.setProperty("--header-color", "var(--accent-color)");
        header.style.setProperty("--header-background", "transparent");
      } else {
        header.style.setProperty("--header-background", "var(--primary-color)");
      }
    };

    setColorHeader();
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        document.querySelector(".header").clientHeight
      );
    };

    window.addEventListener("scroll", setColorHeader);
    window.addEventListener("resize", setColorHeader);
    window.addEventListener("scroll", setHeaderHeight);
    window.addEventListener("resize", setHeaderHeight);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", setColorHeader);
      window.removeEventListener("resize", setColorHeader);
      window.removeEventListener("scroll", setHeaderHeight);
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          {/* Logo */}
          <a href="/" className="header__logo" aria-label="Homepage">
            <svg
              width="260"
              height="110"
              viewBox="0 0 260 110"
              fill="#E5E5E5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.9238 12.7529L38.3844 70.8424H56.8387L39.3036 12.7529H20.9238Z" />
              <path d="M60.0833 12.7529L77.5388 70.8424H95.9931L78.463 12.7529H60.0833Z" />
              <path d="M0 70.8423H17.6643L8.24332 40.2344L0 70.8423Z" />
              <path d="M140.33 12.7529L162.099 70.8424H181.075L159.237 12.7529H140.33Z" />
              <path d="M116.087 70.8423H140.832L128.802 38.4365L116.087 70.8423Z" />
              <path d="M222.53 12.7529H201.417L238.962 70.8424H260L222.53 12.7529Z" />
              <path d="M201.422 70.8423H217.929L209.676 58.0894L201.422 70.8423Z" />
              <path d="M251.742 0L243.484 12.7529L251.742 25.5009L259.995 12.7529L251.742 0Z" />
              <path d="M0.775146 91.0039H11.7861V93.4488H7.48806V108.903H5.05829V93.4488H0.775146V91.0039Z" />
              <path d="M29.674 91.0039H39.6514V93.4488H32.1037V97.9187H39.6514V100.334H32.1037V106.488H39.6514V108.903H29.674V91.0039Z" />
              <path d="M72.421 91.6213V94.3873C70.4782 93.4389 68.6944 92.9697 67.0646 92.9697C64.9727 92.9697 63.2088 93.6414 61.7778 94.9849C60.3467 96.3283 59.6312 97.978 59.6312 99.9339C59.6312 101.89 60.3616 103.589 61.8274 104.922C63.2932 106.256 65.1268 106.923 67.3329 106.923C68.9329 106.923 70.6322 106.424 72.421 105.421V108.217C70.7912 109.076 69.0223 109.511 67.1193 109.511C64.3317 109.511 61.9467 108.573 59.9691 106.696C57.9915 104.819 57.0027 102.557 57.0027 99.9092C57.0027 97.2618 57.9766 95.0787 59.9194 93.2265C61.8672 91.3744 64.2075 90.4458 66.9503 90.4458C68.7143 90.4458 70.5378 90.8409 72.421 91.6263V91.6213Z" />
              <path d="M90.7461 91.0039H93.2057V97.8891H101.812V91.0039H104.241V108.903H101.812V100.304H93.2057V108.903H90.7461V91.0039Z" />
              <path d="M123.317 90.2878L136.633 103.895V91.009H139.093V109.738L125.776 96.1951V108.908H123.317V90.2928V90.2878Z" />
              <path d="M158.039 91.0039H160.469V108.903H158.039V91.0039Z" />
              <path d="M195.728 106.953L198.55 110H195.34L193.76 108.321C192.051 109.111 190.431 109.506 188.891 109.506C186.128 109.506 183.778 108.568 181.85 106.686C179.922 104.804 178.958 102.522 178.958 99.8451C178.958 97.168 179.932 95.0492 181.885 93.2068C183.837 91.3645 186.188 90.4409 188.935 90.4409C191.683 90.4409 193.969 91.3596 195.917 93.192C197.869 95.0245 198.843 97.2174 198.843 99.7611C198.843 102.646 197.805 105.041 195.723 106.948L195.728 106.953ZM191.917 106.355L187.967 102.147H191.176L193.949 105.1C195.474 103.648 196.235 101.929 196.235 99.9439C196.235 97.9583 195.524 96.3086 194.098 94.9652C192.677 93.6217 190.908 92.95 188.796 92.95C186.685 92.95 185.08 93.6316 183.673 94.9998C182.262 96.3679 181.562 98.0225 181.562 99.9686C181.562 101.915 182.282 103.564 183.723 104.923C185.164 106.281 186.918 106.957 188.99 106.957C189.855 106.957 190.829 106.76 191.912 106.36L191.917 106.355Z" />
              <path d="M217.288 91.0337H219.747V102.038C219.747 103.668 220.14 104.928 220.93 105.817C221.715 106.706 222.833 107.15 224.274 107.15C225.715 107.15 226.818 106.74 227.618 105.92C228.413 105.1 228.81 103.945 228.81 102.458V91.0337H231.27V102.29C231.27 104.483 230.639 106.236 229.382 107.545C228.125 108.854 226.45 109.511 224.358 109.511C222.267 109.511 220.508 108.844 219.221 107.516C217.934 106.187 217.293 104.226 217.293 101.628V91.0337H217.288Z" />
              <path d="M249.973 91.0039H259.95V93.4488H252.403V97.9187H259.95V100.334H252.403V106.488H259.95V108.903H249.973V91.0039Z" />
            </svg>
          </a>

          {/* Place Order Button */}
          <button
            className="header__order base-button order-open"
            type="button"
            aria-label="Place an order"
          >
            <span>Place order </span>
          </button>

          {/* Burger Menu Button */}
          <button
            className="header__burger"
            type="button"
            aria-label="Open menu"
          >
            <svg
              width="115"
              height="58"
              viewBox="0 0 115 58"
              fill="#E5E5E5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 0L57.4444 58H75.8817L58.3628 0H40Z"></path>
              <path d="M79.1232 0L96.5627 58H115L97.486 0H79.1232Z"></path>
              <path d="M0 0L17.4444 58H35.8817L18.3628 0H0Z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Burger Menu Section */}
      <section className="burger" aria-hidden="true">
        <div className="burger__container">
          {/* Close Button */}
          <button
            className="burger__close"
            type="button"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#CEDC00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.20777 0.361084H0L12.8176 20.0001H19.9999L7.20777 0.361084Z" />
              <path d="M12.7922 0H20L7.18242 19.639H0.000101089L12.7922 0Z" />
            </svg>
          </button>

          {/* Logo */}
          <a href="/" className="burger__logo" aria-label="Homepage">
            <svg
              width="260"
              height="110"
              viewBox="0 0 260 110"
              fill="#E5E5E5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.9238 12.7529L38.3844 70.8424H56.8387L39.3036 12.7529H20.9238Z" />
              <path d="M60.0833 12.7529L77.5388 70.8424H95.9931L78.463 12.7529H60.0833Z" />
              <path d="M0 70.8423H17.6643L8.24332 40.2344L0 70.8423Z" />
              <path d="M140.33 12.7529L162.099 70.8424H181.075L159.237 12.7529H140.33Z" />
              <path d="M116.087 70.8423H140.832L128.802 38.4365L116.087 70.8423Z" />
              <path d="M222.53 12.7529H201.417L238.962 70.8424H260L222.53 12.7529Z" />
              <path d="M201.422 70.8423H217.929L209.676 58.0894L201.422 70.8423Z" />
              <path d="M251.742 0L243.484 12.7529L251.742 25.5009L259.995 12.7529L251.742 0Z" />
              <path d="M0.775146 91.0039H11.7861V93.4488H7.48806V108.903H5.05829V93.4488H0.775146V91.0039Z" />
              <path d="M29.674 91.0039H39.6514V93.4488H32.1037V97.9187H39.6514V100.334H32.1037V106.488H39.6514V108.903H29.674V91.0039Z" />
              <path d="M72.421 91.6213V94.3873C70.4782 93.4389 68.6944 92.9697 67.0646 92.9697C64.9727 92.9697 63.2088 93.6414 61.7778 94.9849C60.3467 96.3283 59.6312 97.978 59.6312 99.9339C59.6312 101.89 60.3616 103.589 61.8274 104.922C63.2932 106.256 65.1268 106.923 67.3329 106.923C68.9329 106.923 70.6322 106.424 72.421 105.421V108.217C70.7912 109.076 69.0223 109.511 67.1193 109.511C64.3317 109.511 61.9467 108.573 59.9691 106.696C57.9915 104.819 57.0027 102.557 57.0027 99.9092C57.0027 97.2618 57.9766 95.0787 59.9194 93.2265C61.8672 91.3744 64.2075 90.4458 66.9503 90.4458C68.7143 90.4458 70.5378 90.8409 72.421 91.6263V91.6213Z" />
              <path d="M90.7461 91.0039H93.2057V97.8891H101.812V91.0039H104.241V108.903H101.812V100.304H93.2057V108.903H90.7461V91.0039Z" />
              <path d="M123.317 90.2878L136.633 103.895V91.009H139.093V109.738L125.776 96.1951V108.908H123.317V90.2928V90.2878Z" />
              <path d="M158.039 91.0039H160.469V108.903H158.039V91.0039Z" />
              <path d="M195.728 106.953L198.55 110H195.34L193.76 108.321C192.051 109.111 190.431 109.506 188.891 109.506C186.128 109.506 183.778 108.568 181.85 106.686C179.922 104.804 178.958 102.522 178.958 99.8451C178.958 97.168 179.932 95.0492 181.885 93.2068C183.837 91.3645 186.188 90.4409 188.935 90.4409C191.683 90.4409 193.969 91.3596 195.917 93.192C197.869 95.0245 198.843 97.2174 198.843 99.7611C198.843 102.646 197.805 105.041 195.723 106.948L195.728 106.953ZM191.917 106.355L187.967 102.147H191.176L193.949 105.1C195.474 103.648 196.235 101.929 196.235 99.9439C196.235 97.9583 195.524 96.3086 194.098 94.9652C192.677 93.6217 190.908 92.95 188.796 92.95C186.685 92.95 185.08 93.6316 183.673 94.9998C182.262 96.3679 181.562 98.0225 181.562 99.9686C181.562 101.915 182.282 103.564 183.723 104.923C185.164 106.281 186.918 106.957 188.99 106.957C189.855 106.957 190.829 106.76 191.912 106.36L191.917 106.355Z" />
              <path d="M217.288 91.0337H219.747V102.038C219.747 103.668 220.14 104.928 220.93 105.817C221.715 106.706 222.833 107.15 224.274 107.15C225.715 107.15 226.818 106.74 227.618 105.92C228.413 105.1 228.81 103.945 228.81 102.458V91.0337H231.27V102.29C231.27 104.483 230.639 106.236 229.382 107.545C228.125 108.854 226.45 109.511 224.358 109.511C222.267 109.511 220.508 108.844 219.221 107.516C217.934 106.187 217.293 104.226 217.293 101.628V91.0337H217.288Z" />
              <path d="M249.973 91.0039H259.95V93.4488H252.403V97.9187H259.95V100.334H252.403V106.488H259.95V108.903H249.973V91.0039Z" />
            </svg>
          </a>

          {/* Navigation Links */}
          <nav className="burger__links" aria-label="Burger Menu Navigation">
            <div className="burger__links-wrapper">
              <a
                href="#dabba"
                className="burger__link"
                data-anchor-position="0vw"
                onClick={() => {
                  goTo("");
                }}
              >
                MAIN PAGE
              </a>
              <a
                onClick={() => {
                  goTo("business");
                }}
                className="burger__link"
                data-anchor-position="100vw"
              >
                The Business
              </a>

              <a
                className="burger__link"
                onClick={() => {
                  goTo("services");
                }}
              >
                Services
              </a>
              <a
                onClick={() => {
                  goTo("contacts");
                }}
                className="burger__link"
              >
                Contacts
              </a>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default BurgerMenu;
