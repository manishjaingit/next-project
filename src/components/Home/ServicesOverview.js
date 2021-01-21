import React, { Component } from 'react';
import Link from 'next/link';

class ServicesOverview extends Component {
    render() {
        return (
            <section className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box it-overview">
                        <div className="overview-content">
                            <div className="content">
                                <h2>Digital Marketing</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            SEO Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Email Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Facebook Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Data Scraping
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Social Marketing
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Youtube Marketing
                                        </span>
                                    </li>
                                </ul>

                                <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={require("../../images/services/dm.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box it-overview">
                        <div className="overview-image">
                            <div className="image">
                                <img src={require("../../images/projects-image/back7.png")} alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <h2>Web Design & Development</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Responsive Design
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            UI / UX Design
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Mobile App Development
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Laravel Development
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            React Development
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Angular Development
                                        </span>
                                    </li>
                                </ul>

                                <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box it-overview">
                        <div className="overview-content">
                            <div className="content">
                                <h2>Cloud Storage Service</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Cloud Database
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Hybrid Cloud
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Email Servers
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Website Hosting
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            File Storage
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Backup Systems
                                        </span>
                                    </li>
                                </ul>

                                <div className="rm-btn">
                                    <Link href="/services2">
                                        <a className="default-btn">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={require("../../images/services/cloud.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src={require("../../images/services/shutterstock_280808684-1.jpg")} alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <h2>SEO Consultancy</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Content Marketing</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> SEO Optimization</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Social Marketing</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesOverview;