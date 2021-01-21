import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 gray-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>We offer comprehensive implementation services for a successful CRMCity roll-out, ensuring it meets our client's rapid time-to-productivity expectations. We work closely with our clients to understand their needs and environment - tailoring an implementation approach to best match their requirements.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-conversation"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Consultancy</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-laptop"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Web Development</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bxs-megaphone"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-mobile-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Mobile App Development</a>
                                    </Link>
                                </h3>
                                <p>Mobile applications will allow you to work with WireCRM data from your phone, create tasks for employees, work with customer base data and add deals, all this can be done from your phone using mobile applications. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-cart'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>eCommerce Development</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-list-check'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Solutions</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;