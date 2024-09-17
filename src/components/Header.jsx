import React, { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo-bg.png';
import { slideInFromLeftVariants, fadeInVariants, hoverVariants } from "./Animation";
import ReactCountryFlag from "react-country-flag";
import flag from '../assets/flag.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 150], [1, 0.5]);
  const y = useTransform(scrollY, [0, 150], ["0%", "-100px"]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  const logoOpacity = useTransform(scrollY, [0, 150], [0, 3]);
  const logoScale = useTransform(scrollY, [0, 150], [0.5, 2]);

  const transitionSettings = {
    duration: 1,
    ease: "easeInOut",
  };

  // Variants for sliding in the menu from the right
  const slideInFromRightVariants = {
    hidden: { x: "100%" }, // Menu starts off-screen (right)
    visible: { x: "0%" },  // Menu slides in
    exit: { x: "100%" },   // Menu slides out
  };

  return (
    <nav className="bg-blue-900 p-4 shadow-xl relative flex justify-between items-center font-bold w-full">
      {/* Logo and title */}
      <div className="flex space-x-2 ml-2">
        <motion.a
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeftVariants}
          href="/"
          className="text-white font-bold flex hover:cursor-pointer"
        >
          <h1 className="mr-1 font-extrabold">Thrill</h1>
          <h1 className="text-[#f6d86e] font-extrabold">Events</h1>
        </motion.a>

        <NavLink onClick={scrollToTop}>
          <motion.img
            src={logo}
            alt="Logo"
            style={{
              opacity: logoOpacity,
              scale: logoScale,
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: 10,
            }}
            transition={transitionSettings}
            className=" hidden md:block w-8 h-8 mt-4 image-invert contrast-600 ml-4"
          />
        </NavLink>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="block md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation links with slide-in animation */}
      <motion.div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-blue-900 p-6 z-50 transform ${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden`} // Always hidden on larger screens
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"} // Animate based on menu state
        variants={slideInFromRightVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl">
            &times; {/* Close button */}
          </button>
        </div>

        {/* Navigation Links */}
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Provides"
          className="text-[#F5F5F5] block mb-4 text-lg hover:cursor-pointer hover:text-[#f6d86e] font-md"
        >
          <img src={flag} alt="" className="h-[40px] w-[40px] mb-4" />
          Services
          
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Work"
          className="text-[#F5F5F5] block mb-4 text-lg hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          Portfolio
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/About"
          className="text-[#F5F5F5] block mb-4 text-lg hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          About
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Reach"
          className="text-[#F5F5F5] block mb-4 text-lg hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          Contact
        </motion.a>

        {/* Chat Button */}
        <NavLink to='https://wa.me/9928819320' target='_blank'>
          <motion.button
            className='bg-white border-2 border-black hover:bg-[#4ba2ff] hover:text-[#f6d86e] px-4 py-2 w-full rounded-lg text-black mb-6'>
            CHAT WITH US
          </motion.button>
        </NavLink>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a className='text-white hover:text-[#f74ab4]' href="https://www.instagram.com/thrillevents_?igsh=YXZqMnFkcTA2dXRn"  target='_blank'>
            <FaInstagram size={28} />
          </a>
          <a
            className='underline flex items-center hover:text-[#3d7cca] transition-colors'
            href="https://www.facebook.com/share/p/RwMeATS1CNK4NSUk/?mibextid=oFDknk"
            target='_blank'
          >
            <FaFacebook size={28} />
          </a>
        </div>
      </motion.div>

      {/* Navigation links for larger screens */}
      <motion.div
        className="hidden md:flex space-x-4 mr-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
      >
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Provides"
          className="text-[#F5F5F5] hover:cursor-pointer hover:text-[#f6d86e] font-md"
        >
          Services
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Work"
          className="text-[#F5F5F5] hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          Portfolio
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/About"
          className="text-[#F5F5F5] hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          About
        </motion.a>
        <motion.a
          variants={hoverVariants}
          whileHover="hover"
          href="/Reach"
          className="text-[#F5F5F5] hover:text-[#f6d86e] hover:cursor-pointer font-md"
        >
          Contact
        </motion.a>

        {/* Chat Button and Social Icons for larger screens */}
        <NavLink to='https://wa.me/8302720065' target='_blank'>
          <motion.button
            className='bg-white border-2 border-black hover:bg-[#4ba2ff] hover:text-[#f6d86e] px-2 rounded-lg text-black mb-1'>
            CHAT WITH US
          </motion.button>
        </NavLink>
        <div className="flex space-x-4 items-center">
          <a className='text-white hover:text-[#f74ab4]' href="https://www.instagram.com/thrillevents_?igsh=YXZqMnFkcTA2dXRn">
            <FaInstagram size={24} />
          </a>
          <a className='text-white hover:text-[#3d7cca]' href="https://www.facebook.com/share/p/RwMeATS1CNK4NSUk/?mibextid=oFDknk">
            <FaFacebook size={24} />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
