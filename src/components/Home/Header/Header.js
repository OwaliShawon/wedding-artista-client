import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SlideShow from '../SlideShow/SlideShow';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SlideShow></SlideShow>
        </div>
    );
};

export default Header;