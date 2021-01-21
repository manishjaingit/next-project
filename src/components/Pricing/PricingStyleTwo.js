import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleTwo extends Component {
    render() {
        return (
            <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose The Pricing Plan</h2>
                        <p>Enjoy amazing features with our affordable subscription plans</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <h3>Monthly plan</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 12 <sub>/ User</sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Design
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        IT Consultancy
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Development
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Email Integration
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        Mobile Apps Development
                                    </li>
                                    <li>
                                        <i className='bx bxs-x-circle'></i>
                                        Quick Responses
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <h3>Yearly plan</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 120 <sub>/ User</sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Design
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        IT Consultancy
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Development
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Email Integration
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        Mobile Apps Development
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Quick Responses
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <h3>Enterprise plan</h3>
                                </div>

                                <div className="price">
                                     <sub> Please contact </sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Design
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        IT Consultancy
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Web Development
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Email Integration
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i> 
                                        Mobile Apps Development
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Quick Responses
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img2">
                    <img src={require("../../images/shape/shape2.svg")} alt="image" />
                </div>
                <div className="shape-img3">
                    <img src={require("../../images/shape/shape3.svg")} alt="image" />
                </div>
                <div className="shape-img4">
                    <img src={require("../../images/shape/shape4.png")} alt="image" />
                </div>
                <div className="shape-img5">
                    <img src={require("../../images/shape/shape5.png")} alt="image" />
                </div>
                <div className="shape-img6">
                    <img src={require("../../images/shape/shape6.png")} alt="image" />
                </div>
                <div className="shape-img7">
                    <img src={require("../../images/shape/shape7.png")} alt="image" />
                </div>
                <div className="shape-img9">
                    <img src={require("../../images/shape/shape9.png")} alt="image" />
                </div>
                <div className="shape-img10">
                    <img src={require("../../images/shape/shape10.png")} alt="image" />
                </div>
            </section>
        );
    }
}

export default PricingStyleTwo;