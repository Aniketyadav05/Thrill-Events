import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay'; 
import logo from '../assets/mid.png';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wedding from '../assets/Facilities/Wedding.jpg';
import event from '../assets/Facilities/Event.jpeg';
import vendors from '../assets/Facilities/Artist.jpeg';
import logistics from '../assets/Facilities/cars.jpeg';
import { slideUpVariants } from './Animation';

const Services = () => {
  const servicesData = [
    {
      title: 'Wedding',
      description:
        'At Thrill Events, we transform your wedding dreams into reality with elegance and precision, handling every detail from venue selection to entertainment. Our dedicated team ensures a seamless, stress-free experience, allowing you to focus on cherishing every moment.',
      image: wedding,
    },
    {
      title: 'Artist Management',
      description:
        'Artist management involves handling schedules, bookings, promotions, and offering guidance on artistic and business decisions. It allows artists to focus on creativity while their career is professionally managed.',
      image: vendors,
    },
    {
      title: 'Hospitality',
      description:
        'At Thrill Events, we deliver exceptional hospitality that embodies Indian warmth and generosity, making every guest feel welcomed and valued. Our meticulous care and personalized touches ensure a memorable and inviting atmosphere for any occasion.'

,
      image: event,
    },
    {
      title: 'Logistics',
      description:
        'At Thrill Events, we expertly manage all event logistics, from transportation to vendor coordination, ensuring smooth transitions and flawless execution. We handle the details so you can fully enjoy your special day with peace of mind.',
      image: logistics,
    },
  ];
  
  const [swiperInstance, setSwiperInstance] = useState(null);

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  md:px-0 lg:px-2">
      {/* Section title */}
      <h1 className="text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-2">
        OUR SERVICES
      </h1>

      {/* Logo */}
      <img className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 md:mb-6" src={logo} alt="Logo" />

      {/* Swiper to show images */}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        freeMode={false}
        onSwiper={setSwiperInstance}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="w-full"
      >
        {/* Dynamically create slides */}
        {servicesData.map((item) => (
          <SwiperSlide key={item.title} className="relative">
            <motion.div
              className="relative shadow-lg text-white overflow-hidden cursor-pointer flex flex-col items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px]"
            >
              {/* Image as background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})`,
                backgroundAttachment: 'fixed', }}
              />
              {/* Overlay effect */}
              <div
                className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              />
              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="relative z-10 text-center px-4 py-6"
              >
                <h1 className="text-lg md:text-xl lg:text-2xl mb-2 text-[#f6d86e]">{item.title}</h1>
                <p className="text-sm md:text-base lg:text-lg mb-4 w-[250px]">{item.description}</p>
                {/* Button */}
                <a href="/Provides">
                <motion.button
                  className="bg-[#55bde2] rounded-2xl text-white hover:bg-[#A5F1E9] hover:text-black px-4 py-2 md:px-6 md:py-3 font-bold"
                >
                  Learn More
                </motion.button></a>
              </motion.div>
            </motion.div>
            {/* Navigation arrows */}
            <div className='absolute inset-0 flex justify-between items-center px-4 md:px-4'>
              <FaArrowLeft
                className='md:text-[20px] md:text-2xl text-white bg-black p-3 md:p-3 opacity-50 rounded-full shadow-lg hover:bg-[#A5F1E9] hover:opacity-100 hover:text-black transition-all duration-300 ease-in-out cursor-pointer'
                onClick={prevSlide}
                size={35}
              />
              <FaArrowRight
                className='md:text-[20px] md:text-2xl text-white bg-black p-3 md:p-3 opacity-50 rounded-full shadow-lg hover:bg-[#A5F1E9] hover:opacity-100 hover:text-black transition-all duration-300 ease-in-out cursor-pointer'
                onClick={nextSlide}
                size={35}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
