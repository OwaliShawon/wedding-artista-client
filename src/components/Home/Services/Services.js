import React from 'react';
import wedding from '../../../images/wedding.jpg'
import birthday from '../../../images/birthday.jpg'
import corporate from '../../../images/corporate.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Wedding Photography',
        img: wedding
    },
    {
        name: 'Birthday Party',
        img: birthday
    },
    {
        name: 'Corporate Photography',
        img: corporate
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