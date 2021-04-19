import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SlideShow from '../SlideShow/SlideShow';

const Header = () => {
    return (
        <main>
            <Navbar></Navbar>
            <SlideShow></SlideShow>
        </main>
    );
};

export default Header;