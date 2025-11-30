import React from "react";
import serviceImg from '../../../assets/service.png'
const ServiceCard = () => {
  return (
    <div>
      <div className="card  bg-base-100 card-lg shadow-sm text-center">
        <div className="card-body space-y-3">

            <img className="w-6 h-6 mx-auto" src={serviceImg} alt="" />
          <h2 className="font-bold text-2xl text-secondary">Express  & Standard Delivery</h2>
          <p className="font-medium text-base">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
