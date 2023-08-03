import React from 'react';
import Headers from '../components/Headers';
import { Outlet } from 'react-router-dom';
import Footers from '../components/Footers';

const Main = () => {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footers />
        </div>
    );
};

export default Main;