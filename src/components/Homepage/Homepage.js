import React, { useState, useEffect } from "react";
import "./Homepage.css";
import AnimatedText from "./AnimatedText";
import AtAGlance from "./AtAGlance";
import { CalendarDays, MapPin } from "lucide-react";
import WhySdv from "./WhySdv/WhySdv";
import Banner from "./Banner";
import Countdown from "./Countdown";
import SdvWorkshop from "./SdvWorkshop/SdvWorkshop";

const Homepage = () => {
  const [showAnimatedText, setShowAnimatedText] = useState(false);
  const [showOtherContent, setShowOtherContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowAnimatedText(false);
    setShowOtherContent(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimatedText(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="homepage min-h-screen flex flex-col">
      <div className="w-full text-center">
        {showAnimatedText && (
          <AnimatedText onAnimationComplete={handleAnimationComplete} />
        )}
      </div>

      {showOtherContent && (
        <div className="">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8 mx-12">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-8xl sdv-heading font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C10000] to-[#C10000] drop-shadow-lg">
                Self Driving Vehicles
              </p>
              <p className="text-xl text-[#FAFAFA] mt-4">
                Discover the future of autonomous transportation with advanced
                technology and innovation.
              </p>
              <div className="mt-6">
                <p className="flex items-center">
                  <MapPin className="mr-2 text-[#C10000]" /> {/* Icon color */}
                  <span className="text-white"> {/* Text color */}
                    National Institute of Technology Durgapur
                  </span>
                </p>
                <p className="flex items-center mt-2">
                  <CalendarDays className="mr-2 text-[#C10000]" /> {/* Icon color */}
                  <span className="text-white"> {/* Text color */}
                    18th-19th January, 2025
                  </span>
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://i.ibb.co/r0bz453/1-removebg.png"
                alt="Car Image"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          {/* <Banner /> */}
          <Countdown />
          <SdvWorkshop />
          <WhySdv />
          {/* <AtAGlance /> */}
        </div>
      )}
    </div>
  );
};

export default Homepage;
