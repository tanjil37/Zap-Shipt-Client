import React from 'react';
import errorImg from '../../assets/Eroor.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='bg-white rounded-4xl py-[80px] text-center'>
            <img className='mx-auto' src={errorImg} alt="" />

                <Link to='/' className='btn bg-primary'>Go Home</Link>
        </div>
    );
};

export default Error;