import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const signaturePackages = [
        { name: "Elegant 1", link: "/elegant" },
        { name: "Elegant 2", link: "elegant" },
        { name: "Elegant 3", link: "/elegant" },
        { name: "Elegant 4", link: "/elegant" },
        { name: "Elegant 5", link: "/elegant" },
    ]
    const ourAddress = [
        { name: "999 Jatrabari", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Wedding Photography", link: "/emergency" },
        { name: "Wedding Photography", link: "/checkup" },
        { name: "Child Photography", link: "/personal-treatment" },
        { name: "Birthday ", link: "/tooth-extract" },
        { name: "Corporate Event", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5 ">
                    <FooterCol key={1} menuTitle={"Signature Packages"} menuItems={signaturePackages} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+42424242424242</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by Owali Shawon</p>
                </div>
            </div>
        </footer >

    );
};

export default Footer;