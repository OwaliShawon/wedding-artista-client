import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Photographers from '../Photograpers/Photographers';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Testimonials></Testimonials>
            <Photographers></Photographers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;