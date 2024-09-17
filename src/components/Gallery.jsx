import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay'; 
import logo from '../assets/mid.png';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import G1 from '../assets/Gallery/1.jpg';
import G2 from '../assets/Gallery/11.jpg';
import G3 from '../assets/Gallery/8.jpg';
import G4 from '../assets/Gallery/12.jpg';
import G5 from '../assets/Gallery/5.jpg';
import G6 from '../assets/Gallery/16.jpg';
import G7 from '../assets/Gallery/15.jpg';
import G8 from '../assets/Gallery/9.jpg';

const Gallery = () => {
  const servicesData = [
    { id: 1, image: G1 },
    { id: 2, image: G2 },
    { id: 3, image: G3 },
    { id: 4, image: G4 },
    { id: 5, image: G5 },
    { id: 6, image: G6 },
    { id: 7, image: G7 },
    { id: 8, image: G8 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8">
      {/* Section title */}
      <h1 className="text-black font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
        YOUR GALLERY
      </h1>

      {/* Logo */}
      <img className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 md:mb-6" src={logo} alt="Logo" />

      {/* Swiper component for responsive images */}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8, // Space between images on very small screens
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 12, // Space between images on small screens
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16, // Space between images on medium screens
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20, // Space between images on large screens
          },
        }}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full px-2 md:px-4 lg:px-6"
      >
        {/* Dynamically create Swiper slides */}
        {servicesData.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <div className="relative shadow-lg rounded-xl overflow-hidden cursor-pointer h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full">
              {/* Image background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
