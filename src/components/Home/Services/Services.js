import React from 'react';
import fluoride from '../../../images/fluride.png'
import cavity from '../../../images/cavity.png'
import whitining from '../../../images/white.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Wedding',
        img: fluoride
    },
    {
        name: 'Birthday Party',
        img: cavity
    },
    {
        name: 'Corporate',
        img: whitining
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{ color: "aqua" }}>Our Services</h3>
                <h1>Services We Provide</h1>
            </div>

            <div className='row d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        serviceData.map((info) => <ServiceDetail info={info}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;