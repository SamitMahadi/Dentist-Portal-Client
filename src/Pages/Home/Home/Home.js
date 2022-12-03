import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import TermsHome from '../TermsHome/TermsHome';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import HomeContact from '../HomeContact/HomeContact';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <TermsHome></TermsHome>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;