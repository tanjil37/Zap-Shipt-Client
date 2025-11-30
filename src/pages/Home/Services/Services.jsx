import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center mb-8 space-y-4">
        <h3 className="font-extrabold text-[40px] text-white">Our Services</h3>
        <p className="text-base font-medium text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>

      {/* card */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mx-auto mx-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
