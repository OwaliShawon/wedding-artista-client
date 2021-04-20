import React, { useContext, useEffect, useState } from 'react';
import wedding from '../../../images/wedding.jpg'
import birthday from '../../../images/birthday.jpg'
import corporate from '../../../images/corporate.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { UserContext } from '../../../App';

// const serviceData = [
//     {
//         name: 'Wedding Photography',
//         img: wedding
//     },
//     {
//         name: 'Birthday Party',
//         img: birthday
//     },
//     {
//         name: 'Corporate Photography',
//         img: corporate
//     }
// ]

const Services = () => {
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5005/services')
            .then((response) => response.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{ color: "blue" }}>Our Services</h3>
                <h1>Services We Provide</h1>
                <p>Click On the Service you want to Book</p>
            </div>

            <div className='row d-flex justify-content-center'>
                <div className='w-75 row'>
                    {
                        services.map((info) => <ServiceDetail info={info}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;