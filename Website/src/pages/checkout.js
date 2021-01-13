import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import CheckoutContent from '../components/Checkout/CheckoutContent';
import Footer from '../components/Layout/Footer';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Checkout" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Checkout" 
                />
                <CheckoutContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Checkout;