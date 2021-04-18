import React from 'react';

const Photographer = (props) => {
    const { name, img } = props.photographer;
    console.log(name, img);
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: '200px' }} className='img-fluid' src={img}></img>
            <h3>{name}</h3>
        </div>
    );
};

export default Photographer;