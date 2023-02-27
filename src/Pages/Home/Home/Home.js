import React from 'react';
import Cards from '../../Cards/Cards';
import Lower from '../../Lower/Lower';
import MakeAppoint from '../../MakeAppoint/MakeAppoint';
import Services from '../../Service/ServicesData/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Lower></Lower>
            <MakeAppoint></MakeAppoint>
        </div>
    );
};

export default Home;