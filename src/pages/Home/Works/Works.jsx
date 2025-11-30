import React from 'react';
import WorksCard from './WorksCard';


const Works = () => {
    return (
        <div>
            <div className='mb-8'>
                <h2 className='font-extrabold text-3xl text-secondary'>How it Works</h2>
            </div>

        {/* card */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <WorksCard/>
        <WorksCard/>
        <WorksCard/>
        <WorksCard/>

       </div>

            
        </div>
    );
};

export default Works;