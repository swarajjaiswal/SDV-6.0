import React from "react";

const Banner = () => {
  return (
    <div className="relative mt-10 overflow-hidden bg-red-600 text-white py-6  ">
      {/* Scrolling container */}
      <div className="whitespace-nowrap flex animate-slow-marquee items-center">
        {/* Repeated Text */}
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
        ----- SELF-DRIVING VEHICLE WORKSHOP 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
        ----- SELF-DRIVING VEHICLE WORKSHOP 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
        ----- SELF-DRIVING VEHICLE WORKSHOP 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
      </div>
    </div>
  );
};

export default Banner;


