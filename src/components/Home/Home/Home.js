import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Company from '../Company/Company';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import TeamWork from '../TeamWork/TeamWork';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Service></Service>
            <TeamWork></TeamWork>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;