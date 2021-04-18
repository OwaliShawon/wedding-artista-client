import React from 'react';
import antor from '../../../images/antor.jpeg';
import symoon from '../../../images/symoon.jpeg';
import owali from '../../../images/owali.jpeg';
import Photographer from '../Photographer/Photographer';

const Photographers = () => {
    const photographerData = [
        {
            name: 'Hasin',
            img: antor
        },
        {
            name: 'Rafi',
            img: symoon
        },
        {
            name: 'Kawsar',
            img: owali
        }
    ]

    return (
        <section>
            <div className="container text-center">
                <h2>Core Photographers</h2>
                <div className="row">
                    {
                        photographerData.map(photographer => <Photographer photographer={photographer}></Photographer>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Photographers;