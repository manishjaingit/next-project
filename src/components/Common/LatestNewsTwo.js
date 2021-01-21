import React, { Component } from 'react';
import Link from 'next/link';

class LatestNewsTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Latest News</h2>
                            <p>Our Latest Articles And News For Our Clients</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../../images/blog-image/img1.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="#">
                                                        <a>Sarah Taylor</a>
                                                    </Link>
                                                </li>
                                                <li>June 24, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>How To Boost Your Digital Marketing Agency</a>
                                            </Link>
                                        </h3>
                                        <p>If you’re ready to adapt to these changes and drive massive growth for your agency, grow your brand, generate qualified leads, close more deals, and increase revenue.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../../images/blog-image/img3.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>By: 
                                                    <Link href="#">
                                                        <a>James Anderson</a>
                                                    </Link>
                                                </li>
                                                <li>June 26, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Rise Of Smarketing And Why You Need It</a>
                                            </Link>
                                        </h3>
                                        <p>Professor Chris LoDolce defined smarketing as “The alignment of the sales and marketing team around common goals within a business or organisation, focused on improving revenue.”</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={require("../../images/blog-image/img2.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="#">
                                                        <a>Steven Smith</a>
                                                    </Link>
                                                </li>
                                                <li>June 25, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>How To Use Music To Boost Your Business</a>
                                            </Link>
                                        </h3>
                                        <p>Since the beginning of time, sound has always been a part of human existence. It has played a great role in making us aware of what is happening around and awakening our senses from within.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default LatestNewsTwo;