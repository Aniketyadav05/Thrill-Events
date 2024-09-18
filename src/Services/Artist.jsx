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


import A1 from '../assets/Facilities/Artist/1.jpg';
import A3 from '../assets/Facilities/Artist/3.jpg';
import A2 from '../assets/Facilities/Artist/2.png';
import A4 from '../assets/Facilities/Artist/4.png';


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

const Artist = ({ hideButton, description }) => {
  
  

  const servicesData = [
    { id: 1, image: A1 },
    { id: 2, image: A2 },
    { id: 3, image: A3 },
    { id: 4, image: A4 },
    
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
    <div className='bg-[#7FBCD2] '>
    

      <div className="bg-[#7FBCD2] lg:pb-0 px-6 justify-center items-center lg:px-12 pb-10">
       
        <div className="bg-[#7FBCD2] lg:pb-20 px-6 flex flex-col lg:flex-row-reverse justify-center items-center md:px-0 lg:px-12 ">
        
          <div className="w-full lg:w-[60%] flex flex-col items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-black pt-16 pb-4 text-center">
            ARTIST MANAGEMENT
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
                      style={{ backgroundImage: `url(${item.image})`,
                        backgroundSize: '100% 130%' }}
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

          <div className="w-full lg:w-[100%] md:mb-10 lg:mb-0 lg:ml-12 ml-0 lg:mt-44">
            <motion.p
              className="text-white font-semibold md:mb-10 lg:mb-0  lg:w-full text-xl "
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {description ? description : (
                <>
                  <span className='text-black font-extrabold text-4xl'>At Thrill Events, </span>we specialize in curating a remarkable entertainment experience for your wedding. Our expert artist management team works closely with you to select and coordinate with top-tier performers, from live bands and DJs to solo artists and entertainers. We handle all the details, including scheduling, logistics, and technical requirements, ensuring a flawless performance that perfectly complements your special day. With our personalized approach, you can relax and enjoy the celebration while we create an unforgettable atmosphere with the perfect blend of talent and professionalism</>
              )}
              
            </motion.p>
            {!hideButton && (
            <a href="/ArtistMain">
            <motion.button
            variants={zoomInVariants}
            className='bg-transparent mt-4 border-2 border-black hover:bg-[#85D1D1] hover:text-black px-4 sm:px-6 py-2 rounded-xl text-black font-bold md:mb-20 lg:mb-0 '
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
export default Artist;