import React from 'react';
import logo from '../assets/logo-bg.png';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './Animation';

const Hero = () => {
  return (
    <div
      id='hero'
      className='bg-[#7FBCD2] pt-16 lg:pt-20 lg:pb-20 px-5 lg:px-32 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-10 lg:gap-5 bg-cover bg-center'
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-8'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left font-Playwrite'
        >
          THRILL EVENTS
        </motion.h1>
        <motion.h2
          variants={slideUpVariants}
          className='text-black uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left'
        >
          Bringing Your Dream Events to Life with Precision and Passion
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className='w-16 sm:w-20 md:w-24 lg:w-32 h-1 lg:h-2 bg-[#8c00ff] mx-auto lg:mx-0'
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='text-[#666666] text-base sm:text-lg md:text-xl lg:text-lg text-center lg:text-left'
        >
          Welcome to Thrill Events – your go-to for unforgettable events. From breathtaking weddings to spectacular corporate gatherings, we craft seamless experiences with a touch of innovation. Trust us to turn your visions into reality with flawless execution and exceptional service.        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className='flex flex-col sm:flex-row justify-center items-center gap-4'
        >
          <a href="/About">
          <motion.button
            variants={zoomInVariants}
            className='bg-transparent border-2 border-black hover:bg-[#85D1D1] hover:text-black px-4 sm:px-6 py-2 rounded-xl text-black font-bold'
          >
            Read More
          </motion.button>
          </a>
          <a href="/Reach">
          <motion.button
            variants={zoomInVariants}
            className='bg-[#55bde2] text-white hover:bg-[#A5F1E9] hover:text-black px-4 sm:px-6 py-2 rounded-xl font-bold'
          >
            CONTACT US
          </motion.button>
          </a>
        </motion.div>
      </motion.div>
      <div className='w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0'>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='image-invert h-32 sm:h-40 md:h-52 lg:h-72 object-contain contrast-600'
          src={logo}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Hero;
