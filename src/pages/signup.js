import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Signup" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Signup" 
                />

                <div className="container">
                    <div className="form-content">
                        <div className="form-header">
                            <h3>Create an Account</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>

                        <form>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" id="first-name" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" id="last-name" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="your-email" placeholder="Your email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="your-password" placeholder="Your password" />
                            </div>

                            <button type="submit" className="default-btn">Signup</button>
                        </form>

                        <div className="form-footer">
                            <p>
                                Do you have an account? 
                                <Link href="/login">
                                    <a className="form-link">Login</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Signup;