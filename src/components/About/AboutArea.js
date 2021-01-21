import React, { Component } from 'react';

class AboutArea extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../../images/about-img1.png")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>About CRMCity</h2>
                                    <p>CRMs need to focus on customers and  CRMCity does that with a powerful support system that helps you track and resolve issues quickly via the integrated ticket system and customer reminders. Assign reminders to yourself, one or many staff members and with one click, reminders can be sent to email and in-app notification system. These features and more can take customer satisfaction to the next level.</p>

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

                        <div className="about-inner-area">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our History</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Activate Listening</li>
                                            <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                            <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                            <li><i className="flaticon-tick"></i> Branding it better!</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Mission</h3>
                                        <p>CRMCity help you look more professional to your customers and help improve business performance at the same time.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                            <li><i className="flaticon-tick"></i> Expect more</li>
                                            <li><i className="flaticon-tick"></i> Good thinking</li>
                                            <li><i className="flaticon-tick"></i> In real we trust</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                    <div className="about-text">
                                        <h3>Who we are</h3>
                                        <p> CRMcity is complete Customer Relationship Management software that is a great fit for almost any company, freelancer or many other uses. With its clean and modern design,  CRMCity can help you look more professional to your customers and help improve business performance at the same time.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                            <li><i className="flaticon-tick"></i> We have you covered</li>
                                            <li><i className="flaticon-tick"></i> We turn heads</li>
                                            <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                        </ul>
                                    </div>
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

export default AboutArea;