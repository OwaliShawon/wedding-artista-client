import React, { useEffect, useState } from 'react';
import DeleteService from '../DeleteService/DeleteService';


const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/services')
            .then((response) => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                {
                    services.map((service) => <DeleteService service={service}></DeleteService>)
                }
            </div>
        </div>
    );
};


export default ManageService;