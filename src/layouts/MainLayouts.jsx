import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

            
        </div>
    );
};

export default MainLayouts;