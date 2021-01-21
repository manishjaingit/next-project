import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ModalVideo from 'react-modal-video';

const options = {
    items: 1,
    loop: true,
    nav: false,
    animateOut: 'fadeOut',
    dots: false,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
}

class Banner extends Component {

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

    // Open Popup Modal
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <div className="it-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container mt-50">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-content">
                                        <h1>CRM Solution to Grow your business!</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help 
                                            redefine the possibilities and potential of digital engagements.</p>
                                        
                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn mr-3">
                                                    Get Started <span></span>
                                                </a>
                                            </Link>
                                            
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="flaticon-play-button"></i> Play Video
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    {this.state.display ? <OwlCarousel 
                                        className="it-banner-image owl-carousel owl-theme"
                                        {...options}
                                    >
                                        <div className="animate-image">
                                            <img src={require("../../images/it-banner/animate-img.jpg")} alt="image" />
                                        </div>
                                        <div className="animate-image hello">
                                            <img src={require("../../images/it-banner/animate-img2.jpg")} alt="image" />
                                        </div>
                                    </OwlCarousel> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />

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
                <div className="shape-img8">
                    <img src={require("../../images/shape/shape8.png")} alt="image" />
                </div>
                <div className="shape-img9">
                    <img src={require("../../images/shape/shape9.png")} alt="image" />
                </div>
                <div className="shape-img10">
                    <img src={require("../../images/shape/shape10.png")} alt="image" />
                </div>
                <div className="shape-img11">
                    <img src={require("../../images/shape/shape11.png")} alt="image" />
                </div>
                <div className="shape-img12">
                    <img src={require("../../images/shape/shape12.png")} alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;