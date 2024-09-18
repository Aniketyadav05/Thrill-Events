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


import G1 from '../assets/Facilities/Wedding/1.jpg';
import G2 from '../assets/Facilities/Wedding/2.jpg';
import G3 from '../assets/Facilities/Wedding/3.jpg';



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

const Wedding = () => {
  
  

  const servicesData = [
    { id: 1, image: G1 },
    { id: 2, image: G2 },
    { id: 3, image: G3 },
    
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

  return (
    <div className='bg-[#7FBCD2] '>
    

      <div className="bg-[#7FBCD2] lg:pb-0 px-6 justify-center items-center lg:px-24">
       
        <div className="bg-[#7FBCD2] lg:pb-20 px-6 flex flex-col lg:flex-row-reverse justify-center items-center md:px-0 lg:px-12 ">
        
          <div className="w-full lg:w-[60%] flex flex-col items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-black pt-16 pb-4">
            Wedding
          </h1>
            <Swiper
              breakpoints={slidesPerViewConfig1}
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="lg:w-1/2 w-72 lg:px-0"
            >
              {servicesData.map((item) => (
                <SwiperSlide key={item.id} className="relative">
                  <div
                    className="relative shadow-lg rounded-2xl overflow-hidden cursor-pointer h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full"
                    onClick={() => handleImageClick(item.image)}
                  >
                    <div
                      className="absolute inset-0 bg-contain bg-center"
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

          <div className="w-full lg:w-[100%] md:mb-10 lg:mb-0 lg:ml-12 ml-0 lg:mt-48">
            <motion.p
              className="text-white font-semibold md:mb-10 lg:mb-0  lg:w-full text-xl "
              initial="initial"
              animate="animate"
              variants={variants}
            >
              
                <>
                  <span className='text-black font-extrabold text-4xl'>At Thrill Events,</span>  we turn your wedding dreams into reality with unparalleled elegance and precision. Our dedicated team works tirelessly to ensure every detail of your celebration is meticulously planned and executed. From intimate ceremonies to grand receptions, we offer a range of services tailored to your unique vision, including venue selection, decor, catering, and entertainment. Let us handle the logistics and create a seamless, stress-free experience so you can focus on cherishing every moment with your loved ones. With Thrill Events, your wedding will be an extraordinary event that reflects your personal style and leaves a lasting impression.
                  </>
              
              
            </motion.p>
            
            <a href="/WeddingMain">
            <motion.button
            variants={zoomInVariants}
            className='bg-transparent border-2 mt-4 border-black hover:bg-[#85D1D1] hover:text-black px-4 sm:px-6 py-2 rounded-xl text-black font-bold md:mb-20 lg:mb-0'
          >
            Read More
          </motion.button>
          </a>
            
          </div>
        </div>
        
      </div>
      </div>
      

);
};
export default Wedding;