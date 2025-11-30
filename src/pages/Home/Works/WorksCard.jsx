import React from 'react';
import pickUp from '../../../assets/bookingIcon.png'
const WorksCard = () => {
    return (
        <div className='p-8 bg-white max-w-[302px] rounded-3xl'>
            <img className='mb-6' src={pickUp} alt="" /> 
            <h3 className='text-secondary font-bold text-xl mb-4'>Booking Pick & Drop</h3>
            <p className='text-black8  font-medium text-base'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div> 
    );
};

export default WorksCard;