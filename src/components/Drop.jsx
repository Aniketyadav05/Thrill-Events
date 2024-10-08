import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './Animation';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

const Drop = () => {
  return (
    <motion.div className='fixed bottom-4 right-4 z-50'>
      <motion.details className="group">
        {/* + button with fixed size */}
        <summary className="cursor-pointer appearance-none list-none bg-green-500 border-2 border-white rounded-full p-4 w-12 h-12 flex justify-center items-center text-white text-2xl relative z-10 mt-2">
          <FaPlus/>
        </summary>

        {/* Icons container with animation */}
        <motion.div
          initial='hidden'
          animate='visible'
          
          variants={slideUpVariants}
          className="icon-container absolute bottom-full right-0 flex flex-col items-center mt-2 space-y-3"
        >
          <motion.a 
            className="icon bg-[#25D366] rounded-full p-4 transition-transform duration-500 cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.2 }} // Slight scale up on hover
            href='https://wa.me/+919928819320'
            target='_blank'
          >
            <FaWhatsapp size={16} />
          </motion.a>
          <motion.a 
            className="icon bg-[#f74ab4] rounded-full p-4 transition-transform duration-500 cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.2 }} // Slight scale up on hover
            href="https://www.instagram.com/thrillevents_?igsh=YXZqMnFkcTA2dXRn"
            target='_blank'
          >
            <FaInstagram size={16} />
          </motion.a>
          <motion.a 
            className="icon bg-[#3d7cca] rounded-full p-4 transition-transform duration-500 cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.2 }} // Slight scale up on hover
            href="https://www.facebook.com/share/p/RwMeATS1CNK4NSUk/?mibextid=oFDknk"
            target='_blank'
          >
            <FaFacebook size={16} />
          </motion.a>
        </motion.div>
      </motion.details>
    </motion.div>
  );
};

export default Drop;
