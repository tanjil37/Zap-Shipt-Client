import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayouts = () => {
    return (
       <div className='bg-[#eaeced]'>
         <div className=' max-w-11/12 mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </div>
       </div>
    );
};

export default MainLayouts;