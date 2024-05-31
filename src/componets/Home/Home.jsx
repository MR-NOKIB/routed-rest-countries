/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h4>This is the header</h4>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;