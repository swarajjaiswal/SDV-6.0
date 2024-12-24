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
        <h2 className='text text-transparent bg-clip-text bg-gradient-to-r from-[#D52484] to-[#63e] font-bold text-3xl md:text-6xl'>
          Why SDV ?
        </h2>
        <ul className='space-y-4 md:space-y-12 mt-4'>
          <motion.li whileHover={{ x: 10 }} className='text-lg md:text-xl gap-4'>
            High-quality service and support
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className='text-lg md:text-xl gap-4'>
            Innovative solutions tailored to your needs
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className='text-lg md:text-xl gap-4'>
            Commitment to sustainability
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className='text-lg md:text-xl gap-4'>
            Dedicated and experienced team
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default WhySdv;
