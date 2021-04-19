import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>this is dashboard</h1>
            <div className='App'>
                <Link to='/addService'>Add Service</Link>
                <br />
                <Link to='/manageService'>Manage Service</Link>
            </div>

        </div>
    );
};

export default Dashboard;