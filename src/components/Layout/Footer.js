import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <section className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                            <Link href="#">
                                                <a>+123 54214 578 52</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Do You Have a Question?</span>
                                            <Link href="mailto:example@crm.city">
                                                <a>example@crm.city</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-social-media"></i>
                                            <span>Socials Network</span>

                                            <ul className="social">
                                                <li>
                                                    <Link href="https://twitter.com/">
                                                        <a><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.facebook.com/">
                                                        <a><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/">
                                                        <a><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/">
                                                        <a><i className="fab fa-linkedin"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.youtube.com/">
                                                        <a><i className="fab fa-youtube"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/features">
                                                <a>Feature</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/partner">
                                                <a>Partners</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a href="#">Shop</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>FAQ</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/conatct">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-footer-widget pl-5">
                                    <h3>Instagram</h3>

                                    <ul className="footer-instagram-post">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img1.jpg")} alt="imagesss" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img2.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img3.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img4.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img5.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img6.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img7.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img8.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src={require("../../images/instagram-image/insta-img1.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright @{currentYear} CRM-City. 
                                        All rights reserved
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Footer;