import React from 'react';

const ServiceDetail = ({ info }) => {
    return (
        <div className='col-md-4 text-center mt-5'>
            <img style={{ height: '300px' }} src={info.img} alt="" />
            <h4 className="mt-3 mb-3">{info.name}</h4>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptas maxime iusto similique. Facilis, vero?</p>
        </div>
    );
};

export default ServiceDetail;