import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import bg from '../assets/abouut-bg.jpg';
import { slideUpVariants, zoomInVariants } from '../components/Animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


import H1 from '../assets/Facilities/Hospitality/H1.jpg';
import H2 from '../assets/Facilities/Hospitality/H2.jpg';
import H3 from '../assets/Facilities/Hospitality/H3.jpg';
import H4 from '../assets/Facilities/Hospitality/H4.jpg';
import H5 from '../assets/Facilities/Hospitality/H5.jpg';
import H6 from '../assets/Facilities/Hospitality/H6.jpg';
import H7 from '../assets/Facilities/Hospitality/H7.jpg';
import H8 from '../assets/Facilities/Hospitality/H8.jpg';
import H9 from '../assets/Facilities/Hospitality/H9.jpg';





  

// Animation variants
const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hospitality = ({ hideButton, description }) => {
  

  const servicesData = [
    { id: 1, image: H1 },
    { id: 2, image: H2 },
    { id: 3, image: H3 },
    { id: 4, image: H4 },
    { id: 5, image: H5 },
    { id: 6, image: H6 },
    { id: 7, image: H7 },
    { id: 8, image: H8 },
    { id: 9, image: H9 },
  ];

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
  const paragraphText = `
  Thrill Events, a trailblazing event management company, has redefined the landscape of weddings,
  corporate events, and entertainment experiences with its innovative planning and top-tier execution.
  With a commitment to delivering flawless events, Thrill Events has become a trusted name for creating
  unforgettable moments, from extravagant weddings to high-profile concerts.
`;

  return (
    <div className='bg-[#7FBCD2]'>
    

      <div className="bg-[#7FBCD2] lg:pb-0 px-6 justify-center items-center lg:px-12">
       
        <div className="bg-[#7FBCD2] lg:pb-20 px-6 flex flex-col lg:flex-row justify-center items-center md:px-0 lg:px-12">
          <div className="w-full lg:w-[60%] flex flex-col items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-black pt-16 pb-4">
            HOSPITALITY
          </h1>
            <Swiper
              breakpoints={slidesPerViewConfig1}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="lg:w-1/2 w-72  lg:px-0"
            >
              {servicesData.map((item) => (
                <SwiperSlide key={item.id} className="relative">
                  <div
                    className="relative shadow-lg rounded-2xl overflow-hidden cursor-pointer h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full"
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

          <div className="w-full lg:w-[100%] md:mb-10 lg:mb-0 lg:mr-12 mr-0 lg:mt-36">
            <motion.p
              className="text-white font-semibold md:mb-10 lg:mb-0 w-full text-xl "
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {description ? description : (
                <>
                  <span className='text-black font-extrabold text-4xl'>At Thrill Events,</span>  we believe that your wedding day should be as seamless and memorable as possible. Our dedicated hospitality team is committed to delivering unparalleled service, ensuring every detail is thoughtfully managed. From personalized welcome experiences for your guests to attentive service throughout your celebration, we tailor our approach to meet your unique vision. Let us handle the logistics and provide a warm, welcoming atmosphere so you can focus on creating lifelong memories with your loved ones. With Thrill Events, your wedding will be a truly unforgettable event.

                </>
              )}
              
            </motion.p>
            {!hideButton && (
            <a href="/HospitalityMain">
            <motion.button
            variants={zoomInVariants}
            className='bg-transparent border-2 mt-4 border-black hover:bg-[#85D1D1] hover:text-black px-4 sm:px-6 py-2 rounded-xl text-black font-bold'
          >
            Read More
          </motion.button>
          </a>
            )}
          </div>
        </div>
      </div>
      </div>
      

);
};
export default Hospitality;