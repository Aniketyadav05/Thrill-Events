import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const ImageSwiper = ({ servicesData, slidesPerViewConfig, variants, paragraphText }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 lg:px-44 px-10" >
      {/* Image Slider Section */}
      <Swiper
        breakpoints={slidesPerViewConfig}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full lg:w-1/2 px-2 mt-10"
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

      {/* Paragraph Section */}
      <motion.div
        className="md:w-full lg:w-1/2 px-4 lg:px-6"
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <p className="text-white font-semibold text-xl">
          {paragraphText}
        </p>
      </motion.div>
    </div>
  );
};

export default ImageSwiper;
