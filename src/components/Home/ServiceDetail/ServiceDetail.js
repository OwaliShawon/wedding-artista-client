import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { name, img } = props.info;
    const [clikedService, setClickedService] = useState({
        // name: '',
        // img: ''
    });

    const handleServiceButton = () => {
        const newOrder = { ...props.info };
        fetch('http://localhost:5005/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log('product added to order list');
            })
    }


    return (
        <div className='col-md-4 text-center mt-5'>
            <Link to="/login">
                <button className="btn" onClick={handleServiceButton}>
                    <img className="img-fluid" style={{ height: '250px', padding: '20px' }} src={img} alt="" />
                    <h4 className="mt-3 mb-3">{name}</h4>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptas maxime iusto similique. Facilis, vero?</p>
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;