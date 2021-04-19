import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ info }) => {

    const [clikedService, setClickedService] = useState({
        // name: '',
        // img: ''
    });

    const handleServiceButton = () => {
        setClickedService({
            name: info.name,
            img: info.img
        });
        console.log(clikedService);
    }


    return (
        <div className='col-md-4 text-center mt-5'>
            <Link to="/login">
                <button className="btn" onClick={handleServiceButton}>
                    <img className="img-fluid" style={{ height: '250px', padding: '20px' }} src={info.img} alt="" />
                    <h4 className="mt-3 mb-3">{info.name}</h4>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptas maxime iusto similique. Facilis, vero?</p>
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;