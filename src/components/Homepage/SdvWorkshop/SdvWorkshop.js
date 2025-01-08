import React from "react";
import SpaceButton from '../SpaceButton/SpaceButton';
const SdvWorkshop = () => {
  return (
    <div className="relative flex flex-col items-center  bg-gradient-to-b p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C10000] to-[#C10000] drop-shadow-lg">
          About SDV Workshop
        </h1>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex justify-center sm:w-1/2 sm:pl-4 md:pl-6">
          <img
            src="./sdvposter.jpg"
            alt="Self-Driving Vehicles Workshop"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-conatin mt-6"
          />
        </div>

        <div className="sm:w-1/2 text-center sm:text-left sm:pr-4 md:pr-6">
          <p className="text-sm sm:text-base md:text-sm lg:text-2xl text-[#F5F5F5] tracking-wide leading-relaxed">
            <br />
            The 6th edition of <span className="text-red-500">SDV Workshop</span> is back with exciting projects such as manually operated bots, line-following bots, obstacle-avoiding bots, and controlling bot movement. Whether you’re a beginner or have some experience, you’ll gain valuable technical skills in robotics and IoT while learning to collaborate effectively with your team. This is more than just a hands-on experience; it’s about growth, communication, and teamwork. Along the way, you’ll develop problem-solving skills, make new friends, and create lasting memories. Don’t miss this opportunity to dive into a world of innovation, creativity, and fun!

          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center sm:justify-center md:justify-start flex-wrap space-x-2 sm:space-x-8">
            <section className="button-section">
              <a href='https://docs.google.com/forms/d/1OBjOjsYahT44kt_2BJob65cK5LY6eLn7s7KD-GTnXxY/edit'  without rel="noreferrer">
                <SpaceButton text="Register Now" />
              </a>
            </section>

            <section className="button-section">
              <a href='/whysdv' without rel="noreferrer">
                <SpaceButton text="Learn More" />
              </a>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#E2F1E7] opacity-40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#C10000] opacity-50 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#C10000] opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SdvWorkshop;
