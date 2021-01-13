import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layout/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Team Style One"  
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Team Style One" 
                />
                <TeamCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;