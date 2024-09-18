import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import bg from './assets/bg-about.jpg';
import CustomSlider from './components/CustomSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { FaCircle } from 'react-icons/fa';
import kanish from './assets/Team/kannu.jpg'
import Aniket from './assets/Team/Ani.jpg'
import Mitva from './assets/Team/Mitva1.jpg'
import Bhawani from './assets/Team/Bhawani1.jpg'
import Rishu from './assets/Team/Rishu.jpg'
import Palak from './assets/Team/Palak.jpg'

import G1 from './assets/Facilities/Artist/1.jpg';
import G2 from './assets/Facilities/Hospitality/H1.jpg'
import G3 from './assets/Facilities/Logistics/1.jpg'
import G4 from './assets/Facilities/Wedding/W1.jpg'


// Custom hook for animated count
const useAnimatedCount = (target, speed = 10) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let currentCount = 0;
      const intervalId = setInterval(() => {
        currentCount += 1;
        if (currentCount <= target) {
          setCount(currentCount);
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [inView, target, speed]);

  return { count, ref };
};

// Animation variants
const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  const images = [
    { image:  Rishu},
    { image: Palak },
    { image: kanish },
    { image: Bhawani },
    { image: Mitva },
    { image: Aniket },
  ];
  const infoData = [
    { name: 'Rishu Jaiswal', info: 'Management & Planning', college: 'Passed out from AWPEM' },
    { name: 'Palak Goyal', info: 'Luxury wedding at a destination resort.', college: 'Passed out from AWPEM'  },
    { name: 'Kanish Joshi', info: 'Client Management' ,college:''},
    { name: 'Bhawani Singh', info: 'Logistic & Artist Management', college: 'Passed out from AWPEM'  },
    { name: 'Mitva Agarwal', info: 'Production & Hospitality', college: 'Passed out from AWPEM'  },
    { name: 'Aniket Yadav', info: 'Front-end developer & Management',college:'' },
  ];

  const servicesData = [
    { id: 1, image: G1 },
    { id: 2, image: G2 },
    { id: 3, image: G3 },
    { id: 4, image: G4 },
    
  ];

  const { count: teamMembers, ref: teamRef } = useAnimatedCount(30);
  const { count: experiences, ref: experienceRef } = useAnimatedCount(200);
  const { count: events, ref: eventRef } = useAnimatedCount(100);
  const slidesPerViewConfig = {
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  const slidesPerViewConfig1 = {
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='bg-[#7FBCD2]'>
      <div className="relative mx-auto shadow-lg text-white overflow-hidden cursor-pointer h-[auto] lg:h-[auto] w-full flex flex-col items-center justify-center bg-[#7FBCD2]">
        <div
          className="w-full h-full md:h-[50vh] absolute"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
        <h1 className="text-white font-extrabold flex justify-center items-center text-4xl relative mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-28 lg:mb-28">
          About Us
        </h1>
      </div>

      <div className="bg-[#7FBCD2] lg:pb-0 px-6 justify-center items-center lg:px-0">
        <div className="w-full text-center mb-10 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-black pt-16">
            What we Provide
          </h1>
        </div>
        <div className="bg-[#7FBCD2] lg:pb-20 px-6 flex flex-col lg:flex-row justify-center items-center md:px-0 lg:px-10">
          <div className="w-full lg:w-[60%] flex items-center justify-center mb-10 lg:mb-0">
            <Swiper
              breakpoints={slidesPerViewConfig1}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="w-1/2 px-2 md:px-1 lg:px-2"
            >
              {servicesData.map((item) => (
                <SwiperSlide key={item.id} className="relative">
                  <div
                    className="relative shadow-lg rounded-2xl overflow-hidden cursor-pointer h-[200px] sm:h-[250px] md:h-[300px] lg:h-[550px] w-full"
                    onClick={() => handleImageClick(item.image)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Image Modal */}
            {selectedImage && (
              <div className='fixed top-0 left-0 z-[100] bg-[#000000b3] h-full w-full'>
                <span
                  className='absolute top-5 right-5 text-5xl font-extrabold z-[101] cursor-pointer text-white select-none'
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </span>
                <img
                  className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 block max-w-[90%] max-h-[80%] object-contain border-4 border-white'
                  src={selectedImage}
                  alt="Selected media"
                />
              </div>
            )}
          </div>

          <div className="w-full lg:w-[100%] px-4 lg:px-0 md:mb-10 lg:mb-0 lg:pr-20">
            <motion.p
              className="text-white font-semibold md:mb-10 lg:mb-0"
              initial="initial"
              animate="animate"
              variants={variants}
            >
              <span className='text-black font-extrabold text-3xl'>At </span> Thrill Events, we excel in delivering a comprehensive suite of services designed to cater to diverse needs with elegance and efficiency. Our offerings span across hospitality, where we ensure impeccable service and warmth, logistics, providing seamless coordination and management, artist services that deliver creativity and excellence, and bespoke hampers crafted with sophistication. Additionally, our skilled manpower solutions guarantee the right expertise and support for every project. With a commitment to excellence in every facet, we transform your vision into reality with professionalism and care.
            </motion.p>
          </div>
        </div>
      </div>
    

      <div className="flex flex-col lg:flex-row justify-center items-center text-white bg-black p-6 lg:p-10 md:rounded-none lg:rounded-r-full mb-8 mt-10 lg:mt-0">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-4 text-2xl font-extrabold"
        >
          <motion.p variants={variants}>Numbers Speak For Themselves!</motion.p>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-4 text-center lg:text-left">
          <div className='flex flex-col lg:flex-col justify-center items-center  ml-0 lg:ml-10 space-y-4 lg:space-y-0 lg:space-x-8'>
            <motion.h2 className='text-6xl' ref={teamRef} variants={variants}>{teamMembers}+</motion.h2>
            <p className='lg:pr-10'>Team Members</p>
          </div>
          <div className='flex flex-col lg:flex-col justify-center items-center  ml-0 lg:ml-10 space-y-4 lg:space-y-0 lg:space-x-8'>
            <motion.h2 className='text-6xl' ref={experienceRef} variants={variants}>{experiences}+</motion.h2>
            <p className='lg:pr-20'>Experiences</p>

          </div>
          <div className='flex flex-col lg:flex-col justify-center items-center  ml-0 lg:ml-10 space-y-4 lg:space-y-0 lg:space-x-8'>
            <motion.h2 className='text-6xl' ref={eventRef} variants={variants}>{events}+</motion.h2>
            <p className='lg:pr-8' >Events Managed</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4 lg:mx-20 mb-10 py-5'>
        <div className='flex flex-col justify-center items-start mb-4 lg:mb-0'>
          <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>Mission</h2>
          <p className='w-full lg:w-[400px] text-base lg:text-lg font-bold'>
            To create unforgettable experiences that exceed expectations. Thrill Events is dedicated to delivering exceptional event management services that leave a lasting impression on our clients and their guests.
          </p>
        </div>
        <div className='flex flex-col justify-center items-start mb-4 lg:mb-0'>
          <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>Vision</h2>
          <p className='w-full lg:w-[400px] text-base lg:text-lg font-bold'>
            To be the industry leader in innovative and personalized event planning. We strive to redefine the event experience by pushing boundaries, embracing creativity, and delivering tailored solutions that resonate with our clients' unique goals and aspirations.
          </p>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <h2 className='text-xl lg:text-2xl font-extrabold mb-2'>Values</h2>
          <ul className="text-base lg:text-lg ">
            <li className='flex flex-row  items-center'> <FaCircle size={8} className='mr-1' /> Excellence</li>
            <li className='flex flex-row  items-center'><FaCircle size={8} className='mr-1' />Creativity</li>
            <li className='flex flex-row  items-center'><FaCircle size={8} className='mr-1' />Customer Focus</li>
            <li className='flex flex-row  items-center'><FaCircle size={8} className='mr-1' />Integrity</li>
          </ul>
        </div>
      </div>

      <div
        className="w-full lg:h-[300px] md:h-[500px] relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 " />
      </div>
      {/* New Swiper Slider at the bottom */}
      <div className='flex flex-col justify-center items-center pb-16 pt-4'>
        <h1 className="text-3xl lg:text-4xl font-bold text-black pt-4 pb-10">Our Team</h1>
        <CustomSlider images={images} infoData={infoData} slidesPerViewConfig={slidesPerViewConfig} />
      </div>
    </div>
  );
};

export default About;
