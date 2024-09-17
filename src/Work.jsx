import React, { useState, useEffect } from 'react';
import hehe from './assets/Memories/bg.jpeg';
import { Media } from './constant/Media';
import { motion } from 'framer-motion';
import { zoomInVariants } from './components/Animation';

const Work = () => {
  const [File, setFile] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check if the user is on a mobile device (max-width: 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile width threshold
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limit to 10-15 photos on mobile
  const photosToShow = isMobile ? Media.slice(0, 10) : Media;

  return (
    <div className='relative mx-auto mt-0 shadow-lg text-white overflow-hidden cursor-pointer h-full w-full flex flex-col items-center justify-center'>
      {/* Background Image */}
      <div
        className='w-full h-full absolute top-0'
        style={{
          backgroundImage: `url(${hehe})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

      {/* Title */}
      <h1 className='text-white font-extrabold flex justify-center items-center text-4xl relative mt-28 mb-18'>
        Reminiscence
      </h1>

      {/* Grid of Images and Videos */}
      <div className='relative mt-[100px] bg-white w-full'>
        <div className='relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-20 mt-10 mb-10'>
          {photosToShow.map((file, index) => (
            <motion.div
              className='w-auto h-[200px] shadow-custom overflow-hidden rounded-3xl'
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              key={index}
              onClick={() => setFile(file)}
            >
              {file.type === 'image' ? (
                <motion.img
                  className='hover:opacity-50 transition-opacity w-full h-full object-cover duration-300 ease-linear'
                  src={file.url}
                  alt=""
                />
              ) : (
                <motion.video
                  className='hover:opacity-50 transition-opacity w-full h-full object-cover duration-300 ease-linear'
                  src={file.url}
                  alt=""
                  muted
                  playsInline
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image/Video Modal */}
      {File && (
        <div className='fixed top-0 left-0 z-[100] bg-[#000000b3] h-full w-full'>
          <span
            className='absolute top-5 right-5 text-5xl font-extrabold z-[101] cursor-pointer text-white select-none'
            onClick={() => setFile(null)}
          >
            &times;
          </span>
          {File.type === 'image' ? (
            <img
              className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 block max-w-[90%] max-h-[80%] object-contain border-4 border-white'
              src={File.url}
              alt="Selected media"
            />
          ) : (
            <video
              className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 block max-w-[90%] max-h-[80%] object-contain border-4 border-white'
              src={File.url}
              controls
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Work;
