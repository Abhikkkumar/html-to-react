import React from 'react'

export default function blogDetails() {
  return (
    <div >
        {/* <!-- style switcher --> */}
    <div className="style-switcher">
        <a href="#" id="switcher-toggler"><i className="fa fa-cog"></i></a>
        <h3>Layout Options</h3>
        <div className="layout-feature" id="colorMode">
            <a href="" className="dark-switcher" data-theme="notech-dark">Dark</a>
            <a href="" className="light-switcher" data-theme="notech-light">Light</a>
            <button className="boxed-switcher">Boxed</button>
            {/* <!-- /.ltr-switcher --> */}
        </div>
        {/* <!-- /.language-feature --> */}
    </div>
    {/* <!-- end style switcher --> */}

    <div className="preloader">
        <img className="preloader__image" width="60" src="assets/images/loader.png" alt="" />
    </div>
    {/* <!-- /.preloader --> */}
    <div className="page-wrapper">
        <header className="main-header clearfix">
            <div className="main-header__top">
                <div className="main-header__top-inner clearfix">
                    <div className="main-header__top-left">
                        <ul className="list-unstyled main-header__top-address">
                            <li>
                                <div className="icon">
                                    <span className="icon-pin"></span>
                                </div>
                                <div className="text">
                                    <p>66 broklyn golden street line. New York</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-email"></span>
                                </div>
                                <div className="text">
                                    <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-header__top-right">
                        <div className="main-header__top-right-content">
                            <ul className="list-unstyled main-header__top-right-menu">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div className="main-header__top-right-social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
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
                                <img className="logo-dark" src="assets/images/resources/logo-1.png" alt="" />
                                <img className="logo-light" src="assets/images/resources/logo-2.png" alt="" />
                            </a>
                        </div>
                        <div className="main-menu__main-menu-box main-menu__main-menu-box--two">
                            <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                            <ul className="main-menu__list">
                                <li className="dropdown megamenu">
                                    <a href="index.html">Home</a>
                                    <ul>
                                        <li>
                                            <div className="megamenu-box">
                                                <div className="container">
                                                    <div className="megamenu-box__inner">
                                                        <div className="row">
                                                            <div className="col-xl-3">
                                                                <div className="megamenu-box__single">
                                                                    <div className="megamenu-box__img">
                                                                        <img src="assets/images/resources/megamenu-box-img-1.jpg"
                                                                            alt="" />
                                                                        <div className="megamenu-box__btns">
                                                                            <a href="index.html" target="_blank"
                                                                                className="thm-btn main-slider__btn">Multi
                                                                                Page</a>
                                                                            <a href="index-one-page.html"
                                                                                target="_blank"
                                                                                className="thm-btn main-slider__btn">One
                                                                                Page</a>
                                                                        </div>
                                                                        {/* <!-- /.megamenu-box__btns --> */}

                                                                    </div>
                                                                    <p className="megamenu-box__text">Home Page 01</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="megamenu-box__single">
                                                                    <div className="megamenu-box__img">
                                                                        <img src="assets/images/resources/megamenu-box-img-2.jpg"
                                                                            alt="" />
                                                                        <div className="megamenu-box__btns">
                                                                            <a href="index2.html" target="_blank"
                                                                                className="thm-btn main-slider__btn">Multi
                                                                                Page</a>
                                                                            <a href="index2-one-page.html"
                                                                                target="_blank"
                                                                                className="thm-btn main-slider__btn">One
                                                                                Page</a>
                                                                        </div> 
                                                                        {/* <!-- /.megamenu-box__btns --> */}
                                                                    </div>
                                                                    <p className="megamenu-box__text">Home Page 02</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="megamenu-box__single">
                                                                    <div className="megamenu-box__img">
                                                                        <img src="assets/images/resources/megamenu-box-img-3.jpg"
                                                                            alt="" />
                                                                        <div className="megamenu-box__btns">
                                                                            <a href="index3.html" target="_blank"
                                                                                className="thm-btn main-slider__btn">Multi
                                                                                Page</a>
                                                                            <a href="index3-one-page.html"
                                                                                target="_blank"
                                                                                className="thm-btn main-slider__btn">One
                                                                                Page</a>
                                                                        </div>
                                                                        {/* <!-- /.megamenu-box__btns --> */}
                                                                    </div>
                                                                    <p className="megamenu-box__text">Home Page 03</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="megamenu-box__single">
                                                                    <div className="megamenu-box__img">
                                                                        <img src="assets/images/resources/megamenu-box-img-4.jpg"
                                                                            alt="" />
                                                                        <div className="megamenu-box__btns">
                                                                            <a href="index-dark.html" target="_blank"
                                                                                className="thm-btn main-slider__btn">View
                                                                                Page</a>
                                                                        </div>
                                                                        {/* <!-- /.megamenu-box__btns --> */}
                                                                    </div>
                                                                    <p className="megamenu-box__text">Home Dark</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="team.html">Team</a></li>
                                        <li><a href="team-carousel.html">Team Carousel</a></li>
                                        <li><a href="team-details.html">Team Details</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="testimonial.html">Testimonials</a></li>
                                        <li><a href="testimonials-carousel.html">Testimonials Carousel</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="services.html">Services</a>
                                    <ul>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services2.html">Services 02</a></li>
                                        <li><a href="services3.html">Services 03</a></li>
                                        <li><a href="services4.html">Services 04</a></li>
                                        <li><a href="service2-carousel.html">Services Carousel</a></li>
                                        <li><a href="product-development.html">Product development</a></li>
                                        <li><a href="ui-ux-designing.html">UI/UX designing</a></li>
                                        <li><a href="digital-marketing.html">Digital marketing</a></li>
                                        <li><a href="content-management.html">Content management</a></li>
                                        <li><a href="data-analysis.html">Data analysis</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Projects</a>
                                    <ul>
                                        <li><a href="projects-page-1.html">Project 01</a></li>
                                        <li><a href="project-carousel-1.html">Project Carousel 01</a></li>
                                        <li><a href="projects-page-2.html">Project 02</a></li>
                                        <li><a href="project-carousel-2.html">Project Carousel 02</a></li>
                                        <li><a href="project-details.html">Project Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="products.html">Shop</a>
                                    <ul>
                                        <li><a href="products.html">Shop</a></li>
                                        <li><a href="product-details.html">Product Details</a></li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-carousel.html">Blog Carousel</a></li>
                                        <li><a href="blog-sidebar.html">Blog Sidebar Right</a></li>
                                        <li><a href="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-menu__right">
                        <div className="main-menu__search-call">
                            <div className="main-menu__call">
                                <div className="main-menu__call-icon">
                                    <img src="assets/images/icon/main-menu-icon-comment.png" alt="" />
                                </div>
                                <div className="main-menu__call-number">
                                    <p>Have any question?</p>
                                    <h5><a href="tel:926668880000"><span>Free</span> +98 (000)-9850</a></h5>
                                </div>
                            </div>
                            <div className="main-menu__search-box">
                                <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a>
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

        {/* <!--Page Header Start--> */}
        <section className="page-header">
            <div className="page-header-bg" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg)">
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span>/</span></li>
                        <li className="active">Blog Details</li>
                    </ul>
                    <h2>Blog Details</h2>
                </div>
            </div>
        </section>
        {/* <!--Page Header End--> */}

        {/* <!--Blog Sidebar Start--> */}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-img-1.jpg" alt="" />
                            </div>
                            <div className="blog-details__content">
                                <ul className="list-unstyled blog-details__meta">
                                    <li><a href="blog-details.html"><i className="far fa-clock"></i> 8 Jan, 2022</a>
                                    </li>
                                    <li><a href="blog-details.html"><i className="far fa-user-circle"></i> by Layerdrops</a></li>
                                </ul>
                                <h3 className="blog-details__title">Easy to use software new innovation</h3>
                                <p className="blog-details__text-1">There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus. Duis auctor vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt, sagittis sapien eu, porta diam. Aenean finibus scelerisque nulla non facilisis. Fusce vel orci sed quam gravida condimentum. Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus dolor. Nulla a erat et orci mattis auctor.</p>
                                <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                            </div>
                            <div className="blog-details__bottom">
                                <p className="blog-details__tags">
                                    <span>Tags</span>
                                    <a href="#">Technology</a>
                                    <a href="#">Software</a>
                                </p>
                                <div className="blog-details__social-list">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="blgo-details__pagenation-box">
                                <ul className="list-unstyled blog-details__pagenation">
                                    <li>Benefits of using digital technology tools</li>
                                    <li>Survived not only five centuries</li>
                                </ul>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__title">2 Comments</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-1.jpg" alt="" />
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Kevin martin</h3>
                                        <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
                                        <a href="blog-details.html" className="thm-btn comment-one__btn">Reply</a>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-2.jpg" alt="" />
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Saral albertt</h3>
                                        <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
                                        <a href="blog-details.html" className="thm-btn comment-one__btn">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Comment</h3>
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email address" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Write comment"></textarea>
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="thm-btn comment-form__btn">Send a message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search here" />
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest posts</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i className="far fa-clock"></i> 8 Jan, 2022</span>
                                                <a href="blog-details.html">Can you still get tech benefits?</a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i className="far fa-clock"></i> 8 Jan, 2022</span>
                                                <a href="blog-details.html">Promoting the Rights of Children</a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i className="far fa-clock"></i> 8 Jan, 2022</span>
                                                <a href="blog-details.html">Bring to the table win-win survival strategies</a>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li><a href="blog-details.html">Technology <span className="fa fa-long-arrow-alt-right"></span></a></li>
                                    <li className="active"><a href="blog-details.html">Software <span className="fa fa-long-arrow-alt-right"></span></a></li>
                                    <li><a href="blog-details.html">Innovations <span className="fa fa-long-arrow-alt-right"></span></a></li>
                                    <li><a href="blog-details.html">Development <span className="fa fa-long-arrow-alt-right"></span></a></li>
                                    <li><a href="blog-details.html">Web Design <span className="fa fa-long-arrow-alt-right"></span></a></li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <a href="#">Technology</a>
                                    <a href="#">Software</a>
                                    <a href="#">IT</a>
                                    <a href="#">Web Development</a>
                                    <a href="#">Innovation</a>
                                    <a href="#">Solution</a>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__comments">
                                <h3 className="sidebar__title">Comments</h3>
                                <ul className="sidebar__comments-list list-unstyled">
                                    <li>
                                        <div className="sidebar__comments-icon">
                                            <i className="fas fa-comment"></i>
                                        </div>
                                        <div className="sidebar__comments-text-box">
                                            <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__comments-icon">
                                            <i className="fas fa-comment"></i>
                                        </div>
                                        <div className="sidebar__comments-text-box">
                                            <p><span>John Doe</span> on Template:</p>
                                            <h5>Comments</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__comments-icon">
                                            <i className="fas fa-comment"></i>
                                        </div>
                                        <div className="sidebar__comments-text-box">
                                            <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__comments-icon">
                                            <i className="fas fa-comment"></i>
                                        </div>
                                        <div className="sidebar__comments-text-box">
                                            <p> <span>John Doe</span> on Template:</p>
                                            <h5>Comments</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--Blog Sidebar End--> */}


        {/* <!--Site Footer Start--> */}
        <footer className="site-footer">
            <div className="site-footer-bg-1 wow slideInLeft" data-wow-delay="100ms"
            data-wow-duration="2500ms" style="background-image: url(assets/images/shapes/site-footer-shape-1.png);">
            </div>
            <div className="site-footer-bg-2 wow slideInRight" data-wow-delay="100ms"
            data-wow-duration="2500ms" style="background-image: url(assets/images/shapes/site-footer-shape-2.png);">
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="site-footer__top-left">
                            <div className="site-footer__top-icon">
                                <span className="icon-artificial-intelligence"></span>
                            </div>
                            <h3 className="site-footer__top-title">Helping you overcome your technology challenges</h3>
                        </div>
                        <div className="site-footer__top-right">
                            <a href="about.html" className="thm-btn site-footer__btn">Discover more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <a href="index.html"><img src="assets/images/resources/footer-logo.png" alt="" /></a>
                                </div>
                                <div className="footer-widget__about-text-box">
                                    <p className="footer-widget__about-text">Subsrcibe for our upcoming latest articles and
                                        news resources</p>
                                </div>
                                <form className="footer-widget__newsletter-form">
                                    <div className="footer-widget__newsletter-input-box">
                                        <input type="email" placeholder="Email address" name="email" />
                                        <button type="submit" className="footer-widget__newsletter-btn"><img
                                                src="assets/images/icon/footer-widget-newsletter-send-icon.png"
                                                alt="" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__links clearfix">
                                <h3 className="footer-widget__title">Links</h3>
                                <ul className="footer-widget__links-list list-unstyled clearfix">
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="team.html">Meet our team</a></li>
                                    <li><a href="blog.html">News & media</a></li>
                                    <li><a href="projects-page-1.html">Our projects</a></li>
                                    <li><a href="contact.html">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__contact clearfix">
                                <h3 className="footer-widget__title">Contact</h3>
                                <ul className="footer-widget__contact-list list-unstyled clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-telephone"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="tel:980009850">+98 (000)-9850</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-email"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="text">
                                            <p>66 broklyn golden street line <br /> new york</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__social-box clearfix">
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
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
                                <p className="site-footer__bottom-text">© All Copyright 2022 by <a
                                        href="#">Layerdrops.com</a>
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
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <a href="index.html" aria-label="logo image"><img src="assets/images/resources/footer-logo.png"
                        width="155" alt="" /></a>
            </div>
            {/* <!-- /.logo-box --> */}
            <div className="mobile-nav__container"></div>
            {/* <!-- /.mobile-nav__container --> */}

            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:needhelp@packageName__.com">needhelp@notech.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:666-888-0000">666 888 0000</a>
                </li>
            </ul>
            {/* <!-- /.mobile-nav__contact --> */}
            <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-facebook-square"></a>
                    <a href="#" className="fab fa-pinterest-p"></a>
                    <a href="#" className="fab fa-instagram"></a>
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
                <label for="search" className="sr-only">search here</label>
                {/* <!-- /.sr-only --> */}
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="thm-btn">
                    <i className="icon-magnifying-glass"></i>
                </button>
            </form>
        </div>
        {/* <!-- /.search-popup__content --> */}
    </div>
    {/* <!-- /.search-popup --> */}

    <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></a>

      
    </div>
  )
}
