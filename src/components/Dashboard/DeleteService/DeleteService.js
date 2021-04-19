import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DeleteService = (props) => {
    const { name, price, imageUrl, _id } = props.Service;

    const deleteHandlerService = id => {
        console.log(id);
        fetch('http://localhost:5005/deleteService/' + id, {
            method: 'DELETE',
        })
            .then(() => { console.log('remove') })

    }

    return (
        <div className='App'>
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <Button onClick={() => deleteHandlerService(_id)}>Delete</Button>
            <hr />
        </div>
    );
};

export default DeleteService;