import React from 'react';
import { motion } from 'framer-motion';
import './WhySdv.css';

const images = [
  'https://pcbwayfile.s3-us-west-2.amazonaws.com/web/20/12/21/1129065663881t.gif',
  'https://content.instructables.com/FY0/RJ57/LTR8PYNT/FY0RJ57LTR8PYNT.gif?auto=webp&fit=bounds&frame=1auto=webp&frame=1&height=150',
  'https://content.instructables.com/F3W/5MR0/LTR8PXPS/F3W5MR0LTR8PXPS.gif?auto=webp&fit=bounds&frame=1auto=webp&frame=1&height=150',
  'https://hackster.imgix.net/uploads/attachments/955208/uploads2ftmp2f47ee14af-2687-4d5e-84be-dad3a9fa2e992fezgif-5-9c37bdbf2aaa_NXmd4CK3ZQ.gif?auto=compress%2Cformat&gifq=35&w=740&h=555&fit=max',
];

const WhySdv = () => {
  return (
    <div className="why-sdv-container">
      {/* Gallery Section */}
      <div className="gallery">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="sdv-gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={image} alt={`Gallery ${index}`} />
          </motion.div>
        ))}
      </div>

      {/* Text Section */}
      <div className="text-section px-4 md:px-32">
  <h2 className="font-antons text text-transparent bg-clip-text bg-gradient-to-r from-[#D52484] to-[#63e] text-3xl md:text-6xl">
    Why SDV ?
  </h2>
  <h2 className="font-antons text text-transparent bg-clip-text bg-gradient-to-r from-[#D52484] to-[#63e] text-3xl md:text-6xl">
    Transform Ideas into Reality
  </h2>
  
  <p className="font-calsans text-lg md:text-xl mt-4 text-gray-300">
    Bring your ideas to life by building a self-driving bot with key features like line-following, obstacle avoidance, and more.
  </p>
  <ul className="space-y-6 md:space-y-10 mt-6">
    <motion.li whileHover={{ x: 10 }} className="font-calsans text-lg md:text-xl gap-4 tracking-wider bg-gradient-to-r from-[#63e] to-[#D52484] text-transparent bg-clip-text">
      Mentorship from the Best
      <p className="text-gray-300 text-base md:text-lg mt-2">
        Learn the art of building smart systems and innovative technologies, with our mentors guiding you every step of the way.
      </p>
    </motion.li>
    <motion.li whileHover={{ x: 10 }} className="font-calsans text-lg md:text-xl gap-4 tracking-wider bg-gradient-to-r from-[#63e] to-[#D52484] text-transparent bg-clip-text">
      Teamwork & Innovation
      <p className="text-gray-300 text-base md:text-lg mt-2">
        Work with like-minded peers to share ideas, solve problems, and create something amazing together.
      </p>
    </motion.li>
    <motion.li whileHover={{ x: 10 }} className="font-calsans text-lg md:text-xl gap-4 tracking-wider bg-gradient-to-r from-[#63e] to-[#D52484] text-transparent bg-clip-text">
      Crafting Quality, Driving Innovation
      <p className="text-gray-300 text-base md:text-lg mt-2">
        Create your project with the highest standards of quality, from concept to completion, using the tools that will shape the future of robotics.
      </p>
    </motion.li>
    <motion.li whileHover={{ x: 10 }} className="font-calsans text-lg md:text-xl gap-4 tracking-wider bg-gradient-to-r from-[#63e] to-[#D52484] text-transparent bg-clip-text">
      Boost Your CV
      <p className="text-gray-300 text-base md:text-lg mt-2">
        Showcase your skills with a high-impact project and earn a certificate of participation to stand out in the tech world.
      </p>
    </motion.li>
  </ul>
</div>




    </div>
  );
};

export default WhySdv;
