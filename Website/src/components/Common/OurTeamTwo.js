import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        }
    }
}

class OurTeamTwo extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Our Expert Team</h2>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="team-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/team10.jpg")} alt="team" />
                                    
                                    <div className="social">
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="content">
                                    <h3>Manish Jain</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
          
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/team11.jpg")} alt="team" />
                                    
                                    <div className="social">
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Priya Jain</h3>
                                    <span>Backend Team Leader</span>
                                </div>
                            </div>
        
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/team12.jpg")} alt="team" />

                                    <div className="social">
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Fabian Gerhard</h3>
                                    <span>Project Manager</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/team13.jpg")} alt="team" />

                                    <div className="social">
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Mark Smith</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src={require("../../images/team-image/team14.jpg")} alt="team" />

                                    <div className="social">
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>Williams Smith</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>

                    {/* Animation shape image */}
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
                    <div className="shape-img9">
                        <img src={require("../../images/shape/shape9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/shape10.png")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeamTwo;