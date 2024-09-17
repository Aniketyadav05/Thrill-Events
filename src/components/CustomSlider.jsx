// CustomSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const CustomSlider = ({ images = [], infoData = [], slidesPerViewConfig = {} }) => {
  // Debug logs to check if images are being passed correctly
  

  return (
    <Swiper
      breakpoints={slidesPerViewConfig}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      freeMode={true}
      pagination={false}
      modules={[FreeMode, Pagination, Autoplay]}
      className="w-full px-2 md:px-4 lg:px-6"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="relative shadow-lg rounded-xl overflow-hidden cursor-pointer h-[400px] sm:h-[450px] md:h-[400px] lg:h-[350px] w-full group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50" />
            
            {/* Info Overlay - Initially hidden, shown on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center p-4 text-white">
              <h3 className="text-xl font-bold">{infoData[index]?.name || 'Name'}</h3>
              <p className="text-sm mt-2">{infoData[index]?.info || 'Information'}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSlider;
