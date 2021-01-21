import React, { Component } from 'react';
import Link from 'next/link';

export class SidebarModal extends Component {

    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <React.Fragment>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>CRMs need to focus on customers and  CRMCity does that with a powerful support system that helps you track and resolve issues quickly via the integrated ticket system and customer reminders. Assign reminders to yourself, one or many staff members and with one click, reminders can be sent to email and in-app notification system. These features and more can take customer satisfaction to the next level.</p>
                            </div>
                        </div>

                        <div className="sidebar-instagram-feed">
                            <h2>Instagram</h2>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <img src="/_next/static/images/insta-img7-3ab007c13458680b6076878295e09ec0.jpg" alt="imagesss" />
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
                            </ul>
                        </div>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <span className="main-color">
                                            +088 130 629 8615
                                        </span>
                                        <span className="or">OR</span>
                                        <span><a href="mailto:example@crm.city">example@crm.city</a></span>
                                    </h2>
            
                                    <ul className="social">
                                        <li>
                                            <Link href="https://twitter.com/">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.youtube.com/">
                                                <a target="_blank">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-close"></i>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SidebarModal;