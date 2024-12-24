import React from "react";

const AtAGlance = () => {
  return (
    <div
      className="bg-cover bg-center bg-pink text-white py-16 px-4 sm:px-8"
      style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* <h2 className="text-3xl sm:text-4xl font-bold mb-6">Event Details</h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-12">
        Not long ago, self-driving cars seemed like science fiction. Now, it's like observing the future occurring right in front of us. Today, technology is constantly improving. Driverless cars are a success, proving our progress. Using computer tech in transportation enhances safety and reliability, paving the way for a safer, easier future. Self Driving Vehicles 6.0 is a 2-day hackathon where you can showcase your skills and learn from the best in the
            industry. Register now to be a part of this amazing event!
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Registration */}
          <div className="bg-gray-800 bg-opacity-75 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold"># Registrations</h3>
            <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#D52484' }}>168+</p>
          </div>
          {/* Prize Pool */}
          <div className="bg-gray-800 bg-opacity-75 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">💰 Registration Amount</h3>
            <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#D52484' }}>Rs. 3,000</p>
          </div>
          {/* Team Size */}
          <div className="bg-gray-800 bg-opacity-75 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">👥 Team Size</h3>
            <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#D52484' }}>1 - 4</p>
          </div>
          {/* Duration */}
          <div className="bg-gray-800 bg-opacity-75 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold">⏱ Duration</h3>
            <p className="text-3xl sm:text-4xl font-bold" style={{ color: '#D52484' }}>2 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
