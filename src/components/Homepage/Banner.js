import React from "react";

const Banner = () => {
  return (
    <div className="relative mt-10 overflow-hidden bg-gradient-to-r from-blue-800 via-purple-600 to-blue-800 text-white py-6 md:py-8 lg:py-10">
      {/* Scrolling container */}
      <div className="whitespace-nowrap flex animate-slow-marquee items-center">
        {/* Repeated Text */}
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
        ----- SELF DRIVING VEHICLES 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
        ----- SELF DRIVING VEHICLES 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
        <p className="mx-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos">
          ----- SELF DRIVING VEHICLES 6.0 SAEINDIA NIT DURGAPUR -----
        </p>
      </div>
    </div>
  );
};

export default Banner;
