import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class SolutionTwo extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <React.Fragment>
                <section className="solution-area ptb-100 jarallax">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="solution-content">
                                    <h2>Why Choose us to Watch this Video Know More!</h2>
                                    <p>We offers a great service in the Web development, Mobile app development,eCommerce development ,IT Consultant and Digital marketing of your business website. We strive to offer the perfect solution for your business and impartial advice at an honest and much competitive price.</p>

                                    <Link href="/contact">
                                        <a className="default-btn">Contact Us <span></span></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="solution-video">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="flaticon-play-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default SolutionTwo;