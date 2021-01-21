import React, { Component } from 'react';
import Link from 'next/link';

class OurFeatures extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../../images/features-image/back8.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">Our Features</span>
                                    <h2>Creative solutions to improve your business!</h2>
                                    <p>CRMcity is complete Customer Relationship Management software that is a great fit for almost any company, freelancer or many other uses. With its clean and modern design,  CRMCity can help you look more professional to your customers and help improve business performance at the same time.</p>

                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Recommender systems</span></li>
                                        <li><span><i className="fas fa-check"></i> Demand prediction</span></li>
                                        <li><span><i className="fas fa-check"></i> Omnichannel analytics</span></li>
                                        <li><span><i className="fas fa-check"></i> Lead generation</span></li>
                                        <li><span><i className="fas fa-check"></i> Dedicated Developers</span></li>
                                        <li><span><i className="fas fa-check"></i> 24/7 Support</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Images */}
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurFeatures;