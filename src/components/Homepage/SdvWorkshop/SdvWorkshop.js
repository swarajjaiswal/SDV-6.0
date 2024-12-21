import React from "react";

const SdvWorkshop = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 drop-shadow-lg">
          About SDV Workshop
        </h1>
      </div>

      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex justify-center sm:w-1/2 sm:pl-4 md:pl-6">
          <img
            src="https://i.ibb.co/XkV5C73/arduino-car-1.gif"
            alt="Self-Driving Vehicles Workshop"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-cover"
          />
        </div>

        <div className="sm:w-1/2 text-center sm:text-left sm:pr-4 md:pr-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 tracking-wide leading-relaxed">
            Explore the future of{" "}
            <span className="text-blue-400">Self-Driving Vehicles</span> in this
            immersive workshop.
            <br />
            Unlock innovation, learn cutting-edge technology, and drive
            tomorrow's solutions! Not long ago, self-driving cars seemed like
            science fiction. Now, it's like observing the future occurring right
            in front of us. Today, technology is constantly improving.
            Driverless cars are a success, proving our progress. Using computer
            tech in transportation enhances safety and reliability, paving the
            way for a safer, easier future.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center space-x-2 sm:space-x-4">
      {/* Register Button */}
      <a
        href="#register"
        className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-600 
                   text-white text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg 
                   hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Register Now
      </a>

      {/* Learn More Button */}
      <a
        href="#learn-more"
        className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-violet-500 
                   text-white text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg 
                   hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Learn More
      </a>

      {/* Responsive Styling for 640px to 750px */}
      <style>
        {`
          @media (min-width: 650px) and (max-width: 750px) {
            a {
              font-size: 1rem; 
              padding: 0.8rem 1.5rem; /* Adjust padding for this range */
            }
            .flex-wrap {
              justify-content: space-between; /* Adjust alignment for buttons */
            }
          }
        `}
      </style>
    </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Purple Glow */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full animate-pulse"></div>
        {/* Blue Glow */}
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-700 opacity-50 blur-2xl rounded-full animate-pulse"></div>
        {/* Violet Glow */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-violet-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SdvWorkshop;
