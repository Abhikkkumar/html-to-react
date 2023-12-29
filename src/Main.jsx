import React from "react";

import slider2 from "./assets/images/slider/byteproc-slider2.png";
import slider1 from "./assets/images/slider/byteproc-slider1.png";
import slider3 from "./assets/images/slider/byteproc-slider3.png";
import shape_1 from "./assets/images/shapes/main-slider-shape-1.png";
import shape_2 from "./assets/images/shapes/main-slider-shape-2.png";
import shape_3 from "./assets/images/shapes/main-slider-shape-3.png";
import softwareSvg from "./assets/images/services/software.svg";
import byteprocbg   from  "./assets/images/byte/about/byteproc-bg.svg";
import byteprocLogo   from  "./assets/images/byte/Byteproc-logo-sub.png";
import chatIcon   from  "./assets/images/byte/chat-icon.png";
import websiteByteProc   from  "./assets/images/services/website-byteproc.png";
import saasByteProc   from  "./assets/images/services/SAAS-byteproc.png";
import weStandShape   from  "./assets/images/shapes/we-stand-shape.png";
import byteprocAbout   from  "./assets/images/byte/Byteproc-about.png";
import byteprocAbout2   from  "./assets/images/byte/byteproc-about2.png";
import getToKnowShape1   from  "./assets/images/shapes/get-to-know-shape-1.png";
import sectionTitleShape   from  "./assets/images/shapes/section-title-shape.png";
import byteprocProject1   from  "./assets/images/project/Byteproc-project1.png";
import byteprocProject2   from  "./assets/images/project/Byteproc-project2.png";
import byteprocProject3   from  "./assets/images/project/Byteproc-project3.png";
import byteprocIcon1   from  "./assets/images/byte/byteproc-icon1.png";
import trustedSourceIcon   from  "./assets/images/icon/trusted-source-icon.png";
import helpingShape1   from  "./assets/images/shapes/helping-shape-1.png";
import brandT1   from  "./assets/images/brand/t1.png";
import brandT2   from  "./assets/images/brand/t2.png";
import brandT3   from  "./assets/images/brand/t3.png";
import brandT4   from  "./assets/images/brand/t4.png";
import brandT5   from  "./assets/images/brand/t5.png";
import byteprocPng   from  "./assets/images/byte/Byteproc-png.png";
import newsletter   from  "./assets/images/icon/footer-widget-newsletter-send-icon.png";

import "./assets/css/notech-rtl-custom.css";
import "./assets/vendors/bootstrap/css/bootstrap.min.css";
import "./assets/vendors/animate/animate.min.css";
import "./assets/vendors/animate/custom-animate.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/jarallax/jarallax.css";
import "./assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "./assets/vendors/nouislider/nouislider.min.css";
import "./assets/vendors/nouislider/nouislider.pips.css";
import "./assets/vendors/odometer/odometer.min.css";
import "./assets/vendors/swiper/swiper.min.css";
import "./assets/vendors/notech-icons/style.css";
import "./assets/vendors/notech-two-icons/style.css";
import "./assets/vendors/tiny-slider/tiny-slider.min.css";
import "./assets/vendors/reey-font/stylesheet.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css"; //updated
import "./assets/vendors/owl-carousel/owl.theme.default.min.css";
import "./assets/vendors/bxslider/jquery.bxslider.css"; //updated
import "./assets/vendors/bootstrap-select/css/bootstrap-select.min.css";
import "./assets/vendors/vegas/vegas.min.css"; // line 18
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/timepicker/timePicker.css"; //line 54

// <!-- template styles -->
import "./assets/css/notech.css";
import "./assets/css/notech-responsive.css";

// <!-- modes css -->
import "./assets/css/notech-light.css";

// <!-- toolbar css -->
import "./assets/vendors/toolbar/css/toolbar.css";

export default function Main() {
  return (
    <div className="main">
      <div className="page-wrapper">
        <header className="main-header main-header--one clearfix">
          <div className="main-header__top">
            <div className="main-header__top-inner clearfix">
              <div className="main-header__top-left">
                <ul className="list-unstyled main-header__top-address">
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>Raja Bajar, Motihari, Bihar, India</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:info@byteproc.com">info@byteproc.com</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="main-header__top-right">
                <div className="main-header__top-right-content">
                  <ul className="list-unstyled main-header__top-right-menu">
                    <li>
                      <a href="https://intern.byteproc.com/">Training</a>
                    </li>
                    <li>
                      <a href="https://intern.byteproc.com/">Internship</a>
                    </li>
                    <li>
                      <a href="#">Workshop</a>
                    </li>
                  </ul>
                  <div className="main-header__top-right-social">
                    <a href="https://www.linkedin.com/company/byteproc/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/byteproc">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/ByteProc">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/byteproc/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu clearfix">
            <div className="main-menu__wrapper clearfix">
              <div className="main-menu__left main-menu__left--two">
                <div className="main-menu__logo">
                  <a href="index.html">
                    <img
                      className="logo-dark"
                      src={byteprocLogo}
                      width="150px"
                      alt="Byteproc"
                    />
                    <img
                      className="logo-light"
                      src={byteprocLogo}
                      alt="Byteproc"
                    />
                  </a>
                </div>
                <div className="main-menu__main-menu-box main-menu__main-menu-box--two">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li className=" current">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="about.html">About Us</a>
                      <ul>
                        <li>
                          <a href="about.html">Company Overview</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="services.html">Services</a>
                      <ul>
                        <li>
                          <a href="software_development.html">
                            Software Development
                          </a>
                        </li>
                        <li>
                          <a href="website_development.html">
                            Website Development
                          </a>
                        </li>
                        <li>
                          <a href="app_development.html">App Development</a>
                        </li>
                        <li>
                          <a href="api_development.html">API Development</a>
                        </li>
                        <li>
                          <a href="Digital_Marketing.html">Digital marketing</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="careers.html">Careers</a>
                    </li>

                    <li>
                      <a href="product.html">Product</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-menu__right">
                <div className="main-menu__search-call">
                  <div className="main-menu__call">
                    <div className="main-menu__call-icon">
                      <a href="tel:917368804237">
                        <img src={chatIcon} alt="" />
                      </a>
                    </div>
                    <div className="main-menu__call-number">
                      <p>Have any question?</p>
                      <h5>
                        <a href="tel:917368804237">
                          <span>Call:</span> +91-7368804237
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="main-menu__search-box">
                    <a
                      href="#"
                      className="main-menu__search search-toggler icon-magnifying-glass"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
          {/* <!-- /.sticky-header__content --> */}
        </div>
        {/* <!-- /.stricky-header --> */}

        {/* <!--Main Slider Start--> */}
        <section className="main-slider">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${slider2})`
                    // backgroundImage: `url("https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png")`,
                  }}
                ></div>
                {/* <!-- /.image-layer --> */}
                <div className="main-slider__shape-1">
                  <img src={shape_1} alt="" />
                </div>
                <div className="main-slider__shape-2">
                  <img src={shape_2} alt="" />
                </div>
                <div className="main-slider__shape-3">
                  <img src={shape_3} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p>Delivering Excellence in</p>
                        <h2>Every Byte</h2>
                        <div className="main-slider__btn-video-box">
                          <div className="main-slider__btn-box">
                            <a href="#" className="thm-btn main-slider__btn">
                              Discover more
                            </a>
                          </div>
                          <div className="main-slider__video-link">
                            <a
                              href="https://www.youtube.com/watch?v=gr0SwQXGdAo"
                              className="video-popup"
                            >
                              <div className="main-slider__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h3 className="main-slider__video-text">
                              Watch <br /> how it works
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${slider1})`
                    // backgroundImage: `url("https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png")`,
                  }}
                ></div>
                {/* <!-- /.image-layer --> */}
                <div className="main-slider__shape-1">
                  <img src={shape_1} alt="" />
                </div>
                <div className="main-slider__shape-2">
                  <img src={shape_2} alt="" />
                </div>
                <div className="main-slider__shape-3">
                  <img src={shape_3} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p>It Software Solution &</p>
                        <h2>Technology</h2>
                        <div className="main-slider__btn-video-box">
                          <div className="main-slider__btn-box">
                            <a href="#" className="thm-btn main-slider__btn">
                              Discover more
                            </a>
                          </div>
                          <div className="main-slider__video-link">
                            <a
                              href="https://www.youtube.com/watch?v=gr0SwQXGdAo"
                              className="video-popup"
                            >
                              <div className="main-slider__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h3 className="main-slider__video-text">
                              Watch <br /> how it works
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      `url(${slider3})`
                    // backgroundImage: `url("https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png")`,
                  }}
                ></div>
                {/* <!-- /.image-layer --> */}
                <div className="main-slider__shape-1">
                  <img src={shape_1} alt="" />
                </div>
                <div className="main-slider__shape-2">
                  <img src={shape_2} alt="" />
                </div>
                <div className="main-slider__shape-3">
                  <img src={shape_3} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p>Grow Business Online with</p>
                        <h2>Byteproc</h2>
                        <div className="main-slider__btn-video-box">
                          <div className="main-slider__btn-box">
                            <a href="#" className="thm-btn main-slider__btn">
                              Discover more
                            </a>
                          </div>
                          <div className="main-slider__video-link">
                            <a
                              href="https://www.youtube.com/watch?v=gr0SwQXGdAo"
                              className="video-popup"
                            >
                              <div className="main-slider__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h3 className="main-slider__video-text">
                              Watch <br /> how it works
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- If we need navigation buttons --> */}
            <div
              className="swiper-pagination"
              id="main-slider-pagination"
            ></div>
          </div>
        </section>
        {/* <!--Main Slider End--> */}

        {/* <!--Get Solutions Start--> */}
        <section className="get-solutions">
          <div className="container">
            <div className="get-solutions__inner">
              <p className="get-solutions__text">
                Stop wasting time and money on technology.{" "}
                <a href="about.html">Explore Byteproc</a> and get best
                solutions.
              </p>
            </div>
          </div>
        </section>
        {/* <!--Get Solutions End--> */}

        {/* <!--Feature One Start--> */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="100ms"
              >
                {/* <!--Feature One Single--> */}
                <div className="feature-one__single">
                  <div className="feature-one__img">
                    <img src={softwareSvg} alt="" />
                    <div className="feature-one__title-box">
                      <h3 className="feature-one__title">
                        <a href="software_development.html">
                          Software Development
                        </a>
                      </h3>
                    </div>
                    <div className="feature-one__hover-content">
                      <div className="feature-one__icon">
                        <span className="icon-system"></span>
                      </div>
                      <h3 className="feature-one__hover-title">
                        <a href="software_development.html">
                          Software Development
                        </a>
                      </h3>
                      <p className="feature-one__hover-text">
                        Custom Software Development as per your requirement.
                      </p>
                      <div className="feature-one__learn-more">
                        <a href="software_development.html">
                          Learn more
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/* <!--Feature One Single--> */}
                <div className="feature-one__single">
                  <div className="feature-one__img">
                    <img
                      src={websiteByteProc}
                      alt=""
                    />
                    <div className="feature-one__title-box">
                      <h3 className="feature-one__title">
                        <a href="website_development.html">
                          Website & App Development
                        </a>
                      </h3>
                    </div>
                    <div className="feature-one__hover-content">
                      <div className="feature-one__icon">
                        <span className="icon-cyber"></span>
                      </div>
                      <h3 className="feature-one__hover-title">
                        <a href="website_development.html">
                          Website & App Development
                        </a>
                      </h3>
                      <p className="feature-one__hover-text">
                        We developed website and App as per your requirement.
                      </p>
                      <div className="feature-one__learn-more">
                        <a href="website_development.html">
                          Learn more
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
              >
                {/* <!--Feature One Single--> */}
                <div className="feature-one__single">
                  <div className="feature-one__img">
                    <img
                      src={saasByteProc}
                      alt=""
                    />
                    <div className="feature-one__title-box">
                      <h3 className="feature-one__title">
                        <a href="software_development.html">SAAS Development</a>
                      </h3>
                    </div>
                    <div className="feature-one__hover-content">
                      <div className="feature-one__icon">
                        <span className="icon-application"></span>
                      </div>
                      <h3 className="feature-one__hover-title">
                        <a href="software_development.html">SAAS Development</a>
                      </h3>
                      <p className="feature-one__hover-text">
                        We Develop SAAS based Software as per your requirement.
                      </p>
                      <div className="feature-one__learn-more">
                        <a href="software_development.html">
                          Learn more
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Feature One End--> */}

        {/* <!--We Stand Start--> */}
        <section className="we-stand">
          <div className="container">
            <div className="we-stand__top">
              <div className="we-stand__top-title-box">
                <div className="we-stand__top-title-box-bg"></div>
                <h2
                  style={{
                    backgroundImage:
                      `url(${byteprocbg})`,
                  }}
                  className="we-stand__top-title"
                >
                  Byteproc
                </h2>
              </div>
              <div className="we-stand-shape">
                <img src={weStandShape} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!--We Stand End--> */}

        {/* <!--Get To Know Start--> */}
        <section className="get-to-know">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="get-to-know__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="get-to-know__img-box">
                    <div className="get-to-know__img">
                      <img
                        src={byteprocAbout}
                        alt=""
                      />
                    </div>
                    <div className="get-to-know__small-img">
                      <img
                        src={byteprocAbout2}
                        alt=""
                      />
                    </div>
                    <div className="get-to-know__client-box">
                      <h3 className="odometer" data-count="250">
                        00
                      </h3>
                      <span className="get-to-know__plus">+</span>
                      <p className="get-to-know__client-text">
                        Worldwide clients
                      </p>
                    </div>
                    <div className="get-to-know-shape-1">
                      <img
                        src={getToKnowShape1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="get-to-know__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">
                        Get to know us
                      </span>
                      <div className="section-title-shape">
                        <img
                          src={sectionTitleShape}
                          alt=""
                        />
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      Easy solutions for your IT problems
                    </h2>
                  </div>
                  <p className="get-to-know__text">
                    Byteproc Solutions Pvt. Ltd. is a leading software company,
                    specializing in custom software development and IT services.
                  </p>
                  <ul className="list-unstyled get-to-know__points">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>Focus on innovation and client-centric solutions.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>High-quality standards, and clear communication.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="get-to-know__it-solutions">
                    <div className="get-to-know__it-solutions-icon">
                      <span className="icon-data-analytics"></span>
                    </div>
                    <div className="get-to-know__it-solutions-text-box">
                      <p className="get-to-know__it-solutions-text">
                        Stop worrying, we take care of your technology problems.
                      </p>
                    </div>
                  </div>
                  <a href="about.html" className="get-to-know__btn thm-btn">
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Get To Know End--> */}

        {/* <!--Services One Start--> */}
        <section
          className="services-one"
          style={{
            backgroundImage: "url(./assets/images/shapes/service-bg-1-1.png)",
          }}
        >
          <div className="service-one__shape-1"></div>
          {/* <!-- /.service-one__shape-1 --> */}
          <div className="service-one__shape-2"></div>
          {/* <!-- /.service-one__shape-2 --> */}
          <div className="container">
            <div className="services-one__top">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="services-one__top-left">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box">
                        <span className="section-title__tagline">
                          What we’re offering
                        </span>
                        <div className="section-title-shape">
                          <img
                            src={sectionTitleShape}
                            alt=""
                          />
                        </div>
                      </div>
                      <h2 className="section-title__title">
                        Services we’re providing to our clients
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="services-one__top-right">
                    <p className="services-one__top-text">
                      We are committed to understanding our clients' unique
                      challenges and goals, ensuring that our solutions are
                      tailored to their specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-one__bottom">
              <ul className="list-unstyled services-one__list">
                <li className="services-one__single">
                  <div className="services-one__content">
                    <div className="services-one__icon">
                      <span className="icon-coding"></span>
                    </div>
                    <h3 className="services-one__title">
                      <a href="software_development.html">
                        Software <br />
                        development
                      </a>
                    </h3>
                    <p className="services-one__text">
                      Develop your Software <br /> as per your need.
                    </p>
                  </div>
                </li>
                <li className="services-one__single">
                  <div className="services-one__content">
                    <div className="services-one__icon">
                      <span className="icon-design-thinking"></span>
                    </div>
                    <h3 className="services-one__title">
                      <a href="website_development.html">
                        Website <br />
                        Designing
                      </a>
                    </h3>
                    <p className="services-one__text">
                      Design your Website <br /> as per your requirement.
                    </p>
                  </div>
                </li>
                <li className="services-one__single">
                  <div className="services-one__content">
                    <div className="services-one__icon">
                      <span className="icon-content"></span>
                    </div>
                    <h3 className="services-one__title">
                      <a href="app_development.html">
                        App <br />
                        Development
                      </a>
                    </h3>
                    <p className="services-one__text">
                      We develop your app <br /> as per your need.
                    </p>
                  </div>
                </li>
                <li className="services-one__single">
                  <div className="services-one__content">
                    <div className="services-one__icon">
                      <span className="icon-technology"></span>
                    </div>
                    <h3 className="services-one__title">
                      <a href="Digital_Marketing.html">
                        Digital <br />
                        marketing
                      </a>
                    </h3>
                    <p className="services-one__text">
                      Grow Business Online <br /> with our Digital Team.
                    </p>
                  </div>
                </li>

                <li className="services-one__single">
                  <div className="services-one__content">
                    <div className="services-one__icon">
                      <span className="icon-optimization"></span>
                    </div>
                    <h3 className="services-one__title">
                      <a href="#">
                        Graphics <br /> Design
                      </a>
                    </h3>
                    <p className="services-one__text">
                      Promote Your business <br /> with our graphics team.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!--Services One End--> */}

        {/* <!--Business From Start--> */}
        <section className="business-from">
          <div className="business-from-bg-box">
            <div
              className="business-from-bg jarallax"
              data-jarallax
              data-speed="0.2"
              data-imgPosition="50% 0%"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/byteproc parallex.png)",
              }}
            ></div>
          </div>
          <div className="container">
            <div className="business-from__inner text-center">
              <p className="business-from__sub-title">
                Creating cutting-edge software
              </p>
              <h2 className="business-from__title">Solutions</h2>
              <div className="business-from__btn-box">
                <a href="contact.html" className="business-from__btn thm-btn">
                  Contact us now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Business From End--> */}

        {/* <!--Project One Start--> */}
        <section className="project-one">
          <div className="project-one__inner">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Recently completed work
                  </span>
                  <div className="section-title-shape">
                    <img
                      src={sectionTitleShape}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="section-title__title">Our latest projects</h2>
              </div>
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  {/* <!--Project One Single--> */}
                  <div className="project-one__single">
                    <div className="project-one__img">
                      <img
                        src={byteprocProject1}
                        alt=""
                      />
                      <a href="#">
                        <img
                          src={byteprocIcon1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-one__content">
                      <span className="project-one__sub-title">
                        1-1 Video Communication
                      </span>
                      <h3 className="project-one__title">
                        <a href="about.html">
                          This project helps 1-1
                          <br /> video call communication
                        </a>
                      </h3>
                      {/* <!-- <p className="project-one__text">When an unknown printer took a<br/> galley to and type
                                        book.</p> --> */}
                      <a href="about.html" className="thm-btn project-one__btn">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  {/* <!--Project One Single--> */}
                  <div className="project-one__single project-one__single-two">
                    <div className="project-one__img">
                      <img
                        src={byteprocProject2}
                        alt=""
                      />
                      <a href="#">
                        <img
                          src={byteprocIcon1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-one__content">
                      <span className="project-one__sub-title">
                        Hotel Booking
                      </span>
                      <h3 className="project-one__title">
                        <a href="#">
                          Accept online booking
                          <br /> & Manage your hotel
                        </a>
                      </h3>
                      {/* <!-- <p className="project-one__text">When an unknown printer took a<br/> galley to and type
                                        book.</p> --> */}
                      <a href="#" className="thm-btn project-one__btn">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  {/* <!--Project One Single--> */}
                  <div className="project-one__single project-one__single-three">
                    <div className="project-one__img">
                      <img
                        src={byteprocProject3}
                        alt=""
                      />
                      <a href="#">
                        <img
                          src={byteprocIcon1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-one__content">
                      <span className="project-one__sub-title">
                        Flight Booking
                      </span>
                      <h3 className="project-one__title">
                        <a href="#">
                          Seat booking and
                          <br /> Proper management
                        </a>
                      </h3>
                      {/* <!-- <p className="project-one__text">When an unknown printer took a<br/> galley to and type */}
                      {/* book.</p> --> */}
                      <a href="#" className="thm-btn project-one__btn">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Project One End--> */}

        {/* <!--Counter One Start--> */}
        <section className="counter-one">
          <div
            className="counter-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/byteproc counter.png)",
            }}
          ></div>
          {/* <!-- /.counter-one__bg --> */}
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <ul className="list-unstyled counter-one__list">
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-work"></span>
                    </div>
                    <h3 className="odometer" data-count="20">
                      00
                    </h3>
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__title">Tech Team</p>
                    {/* <!-- <p className="counter-one__text">Lorem ipsum is simply Call: text used by refring.</p> --> */}
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-technical-support"></span>
                    </div>
                    <h3 className="odometer" data-count="1000">
                      +
                    </h3>
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__title">IT problems solved</p>
                    {/* <!-- <p className="counter-one__text">Lorem ipsum is simply Call: text used by refring.</p> --> */}
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-like"></span>
                    </div>
                    <h3 className="odometer" data-count="200">
                      +
                    </h3>
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__title">Satisfied clients</p>
                    {/* <!-- <p className="counter-one__text">Lorem ipsum is simply Call: text used by refring.</p> --> */}
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-user"></span>
                    </div>
                    <h3 className="odometer" data-count="500">
                      +
                    </h3>
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__title">Trainings</p>
                    {/* <!-- <p className="counter-one__text">Lorem ipsum is simply Call: text used by refring.</p> --> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Counter One End--> */}

        {/* <!--Trusted Source Start--> */}
        <section className="trusted-source">
          <div className="container">
            <div
              className="trusted-source__inner wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="trusted-source__left">
                <h3 className="trusted-source__content">
                  Trusted source in IT <br /> services
                </h3>
                <div className="trusted-source__icon">
                  <img
                    src={trustedSourceIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="trusted-source__right">
                <div className="trusted-source__contact-info">
                  <p>Have any question?</p>
                  <a href="tel:917368804237">
                    <span>Call:</span> +91-7368804237
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Trusted Source End--> */}

        {/* <!--Helping Start--> */}
        <section className="helping">
          <div className="helping-wrapper">
            <div className="helping__left">
              <div
                className="helping__left-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/byte/Byteproc about3.png)",
                }}
              ></div>
            </div>
            <div className="helping__right">
              <div
                className="helping-shape-1  wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src={helpingShape1} alt="" />
              </div>
              <div className="helping__right-content">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      Technology solution
                    </span>
                    <div className="section-title-shape">
                      <img
                        src={sectionTitleShape}
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">
                    Helping businesses around the world
                  </h2>
                </div>
                <p className="helping__text">
                  We specializes in creating cutting-edge software solutions
                  that transform businesses.{" "}
                </p>
                <ul className="list-unstyled helping__points">
                  <li>
                    <div className="icon">
                      <span className="icon-data-protection"></span>
                    </div>
                    <h3 className="helping__title">Data protection</h3>
                    <p className="helping__text-2">
                      Protect your data as if it is your most valuable asset.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-backup-copy"></span>
                    </div>
                    <h3 className="helping__title">Optimize IT system</h3>
                    <p className="helping__text-2">
                      We fully focuse on making your software easy to use.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Helping End--> */}

        {/* <!--Brand One Start--> */}
        <section className="brand-one">
          <div className="container">
            <h4 className="brand-one__title">Our business partners</h4>
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
            "0": {
                "spaceBetween": 30,
                "slidesPerView": 2
            },
            "375": {
                "spaceBetween": 30,
                "slidesPerView": 2
            },
            "575": {
                "spaceBetween": 30,
                "slidesPerView": 3
            },
            "767": {
                "spaceBetween": 50,
                "slidesPerView": 4
            },
            "991": {
                "spaceBetween": 50,
                "slidesPerView": 5
            },
            "1199": {
                "spaceBetween": 100,
                "slidesPerView": 5
            }
        }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={brandT1} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT2} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT3} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT4} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT5} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT1} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT2} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT3} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT4} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
                <div className="swiper-slide">
                  <img src={brandT5} alt="" />
                </div>
                {/* <!-- /.swiper-slide --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!--Brand One End--> */}

        {/* <!--Site Footer Start--> */}
        <footer className="site-footer">
          <div
            className="site-footer-bg-1 wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
            style={{
              backgroundImage:
                "url(assets/images/shapes/site-footer-shape-1.png)",
            }}
          ></div>

          <div className="site-footer__middle">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo">
                      <a href="index.html">
                        <img
                          src={byteprocPng}
                          width="200"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="footer-widget__about-text-box">
                      <p className="footer-widget__about-text">
                        Subsrcibe for our upcoming latest articles and news
                        resources
                      </p>
                    </div>
                    <form className="footer-widget__newsletter-form">
                      <div className="footer-widget__newsletter-input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                        <button
                          type="submit"
                          className="footer-widget__newsletter-btn"
                        >
                          <img
                            src={newsletter}
                            alt=""
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__links clearfix">
                    <h3 className="footer-widget__title">Company</h3>
                    <ul className="footer-widget__links-list list-unstyled clearfix">
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="careers.html">Careers</a>
                      </li>
                      <li>
                        <a href="privacy_policy.html">Privacy Policies</a>
                      </li>
                      <li>
                        <a href="terms_&_condition.html">Terms & Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__contact clearfix">
                    <h3 className="footer-widget__title">Contact Us</h3>
                    <ul className="footer-widget__contact-list list-unstyled clearfix">
                      <li>
                        <div className="icon">
                          <span className="icon-telephone"></span>
                        </div>
                        <div className="text">
                          <p>
                            <a href="tel:917368804237">+91-7368804237</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-email"></span>
                        </div>
                        <div className="text">
                          <p>
                            <a href="mailto:info@byteproc.com">
                              info@byteproc.com
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="text">
                          <p>
                            Raja Bazar, Motihari <br /> Bihar, 845401, IN
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__social-box clearfix">
                    <div className="site-footer__social">
                      <a href="https://www.linkedin.com/company/byteproc/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://www.facebook.com/byteproc">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com/ByteProc">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/byteproc/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer__bottom-inner">
                    <p className="site-footer__bottom-text">
                      © All Copyright 2023 by{" "}
                      <a href="#">Byteproc Solutions Pvt. Ltd.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!--Site Footer End--> */}
      </div>
      {/* <!-- /.page-wrapper --> */}

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* <!-- /.mobile-nav__overlay --> */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src={byteprocPng}
                width="155"
                alt=""
              />
            </a>
          </div>
          {/* <!-- /.logo-box --> */}
          <div className="mobile-nav__container"></div>
          {/* <!-- /.mobile-nav__container --> */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:info@byteproc.com">info@byteproc.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:917368804237">+91-7368804237</a>
            </li>
          </ul>
          {/* <!-- /.mobile-nav__contact --> */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://www.linkedin.com/company/byteproc/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/byteproc">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/ByteProc">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/byteproc/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* <!-- /.mobile-nav__social --> */}
          </div>
          {/* <!-- /.mobile-nav__top --> */}
        </div>
        {/* <!-- /.mobile-nav__content --> */}
      </div>
      {/* <!-- /.mobile-nav__wrapper --> */}

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        {/* <!-- /.search-popup__overlay --> */}
        <div className="search-popup__content">
          <form action="#">
            <label for="search" className="sr-only">
              search here
            </label>
            {/* <!-- /.sr-only --> */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
        {/* <!-- /.search-popup__content --> */}
      </div>
      {/* <!-- /.search-popup --> */}

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>

      <div className="floating_btn">
        <a target="_blank" href="https://wa.me/917368804237">
          <div className="contact_icon">
            <i className="fa fa-whatsapp my-float"></i>
          </div>
        </a>
        <p className="text_icon">Talk to us?</p>
      </div>
    </div>
  );
}
