import React from 'react';
import { NavLink } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, InstagramIcon, ChevronUpIcon, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black  text-gray-300 relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="https://swarajjaiswal.github.io/saeevents/logo.png" 
              alt="SAE Logo" 
              className="w-32 mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Driving innovation and excellence in automotive engineering education and research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block">
               Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-600 "></span>
              </h3>
            <nav className="space-y-7 mt-4">
              <NavLink to="/" className="block hover:text-red-500 transition-colors duration-300">
                Home
              </NavLink>
              <NavLink to="/sdvcomponent" className="block hover:text-red-500 transition-colors duration-300">
                SDV Components
              </NavLink>
              <NavLink to="/team" className="block hover:text-red-500 transition-colors duration-300">
                Team
              </NavLink>
              <NavLink to="/previousevent" className="block hover:text-red-500 transition-colors duration-300">
                Previous Event
              </NavLink>
            </nav>
          </div>

          {/* Connect With Us */}
<div>
  <h3 className="text-xl font-bold mb-4 relative inline-block">
    Connect With Us
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-600 mt-4"></span>
  </h3>
  <p className="text-gray-400 mb-4">
    Follow us on social media to stay updated with the latest news, events, and innovations.
  </p>
  <div className="flex justify-start space-x-6">
    <a
      href="https://www.youtube.com/@saenitdgp"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 transition-transform transform hover:scale-110 duration-300"
      aria-label="YouTube"
    >
      <Youtube className="w-7 h-7" />
    </a>
    <a
      href="https://www.linkedin.com/company/sae-nitdgp/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 transition-transform transform hover:scale-110 duration-300"
      aria-label="LinkedIn"
    >
      <LinkedinIcon className="w-7 h-7" />
    </a>
    <a
      href="https://www.instagram.com/sae.nitd"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 transition-transform transform hover:scale-110 duration-300"
      aria-label="Instagram"
    >
      <InstagramIcon className="w-7 h-7" />
    </a>
    <a
      href="https://www.facebook.com/SAENITD"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 transition-transform transform hover:scale-110 duration-300"
      aria-label="Facebook"
    >
      <Facebook className="w-7 h-7" />
    </a>
  </div>
</div>


          {/* Google Maps */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-3 text-white">Find Us</h3> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14630.312462134343!2d87.2931383!3d23.5476717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational%20Institute%20of%20Technology%20Durgapur!5e0!3m2!1sen!2sin!4v1704636928883!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-700">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} SAE. All rights reserved.
    </p>
    <div className="mt-4 md:mt-0 text-gray-400 text-sm">
      Made with ❤️ by SAE WebD Team {new Date().getFullYear()}
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;