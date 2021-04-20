import React from 'react';
import { Link } from 'react-router-dom';
import AddService from '../AddService/AddService';

const Dashboard = () => {
    return (
        <div>
            <h1>this is dashboard</h1>
            <div className='App'>
                <Link to='/addService'>Add Service</Link>
                <br />
                <Link to='/manageService'>Manage Service</Link>
            </div>

            <hr />

            <div className='App'>
                <Link to='/orders'>Orders Booked</Link>
            </div>
        </div>
    );
};

export default Dashboard;