import React from 'react'
import logo from '../assets/logo-bg.png'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants, fadeInVariants } from './Animation'
import { FaInstagram, FaFacebook, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-blue-900 pt-6 h-[380px]'>
      
      <div className='flex flex-col justify-center items-center lg:h-[350px] h-auto lg:w-full w-full'>
        {/* Logo */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="brightness-200 mt-4 lg:h-[150px] h-[120px] contrast-200 mb-2"
          src={logo}
          alt="Thrill Events Logo"
        />

        {/* Address */}
        <p className='text-white w-full max-w-xs lg:max-w-md font-semibold mb-4 text-center'>
          91, A Gaya Guru Ki Gali Sitaram Bazar Brahmpuri, Jaipur, Rajasthan, India
        </p>

        {/* Social Icons */}
        <div className='flex flex-row gap-6 mb-4'>
          <a
            className='underline flex items-center hover:text-[#f74ab4] transition-colors'
            href="https://www.instagram.com/thrillevents_?igsh=YXZqMnFkcTA2dXRn"
            target='_blank'
          >
            <FaInstagram className='text-white text-3xl lg:text-4xl hover:text-[#f74ab4]' />
          </a>
          <a
            className='underline flex items-center hover:text-[#3d7cca] transition-colors'
            href="https://www.facebook.com/share/p/RwMeATS1CNK4NSUk/?mibextid=oFDknk"
            target='_blank'
          >
            <FaFacebook className='text-white text-3xl lg:text-4xl hover:text-[#3d7cca]' />
          </a>
          <a
            className='underline flex items-center hover:text-[#25D366] '
            href="https://wa.me/9928819320"
            target='_blank'
          >
            <FaWhatsapp className='text-white text-3xl lg:text-4xl hover:text-[#25D366]' />
          </a>
        </div>

        {/* Divider Line */}
        <div className='w-full max-w-xs lg:max-w-md h-[2px] bg-white mb-4'></div>

        {/* Copyright */}
        <p className='text-white text-sm lg:text-base'>
          Copyright © ThrillEvents 2024
        </p>
      </div>

      {/* Scroll to Top Button */}
      <FaArrowUp
        onClick={scrollToTop}
        size={40}
        className='relative text-[30px] lg:text-[45px] text-white p-2 bg-black rounded-full opacity-50 shadow-lg hover:bg-[#A5F1E9] hover:opacity-100 hover:text-black transition-all duration-300 ease-in-out cursor-pointer  lg:ml-[1400px] bottom-24'
      />
    </footer>
  );
};

export default Footer;
