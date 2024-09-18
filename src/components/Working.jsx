import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import pfp1 from '../assets/Reviews/1.jpg';
import pfp2 from '../assets/Reviews/2.jpg';
import pfp3 from '../assets/Reviews/3.jpg';
import pfp5 from '../assets/Reviews/5.jpg';
import pfp6 from '../assets/Reviews/6.jpg';
import pfp7 from '../assets/Reviews/7.jpg';
import pfp4 from '../assets/Reviews/4.jpg';
import pfp8 from '../assets/Reviews/8.jpg';

import venue from '../assets/review-bg.png';
import logo from '../assets/mid.png';
import { slideUpVariants, slideInFromTopVariants } from './Animation';
import { motion } from 'framer-motion';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      },
    },
  ],
};

const Working = () => {
  return (
    <div className="relative w-full my-0 flex flex-col items-center justify-center py-10"
      style={{
        backgroundImage: `url(${venue})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      <div className="bg-black absolute inset-0 opacity-50 w-full h-full" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromTopVariants}
        className='flex flex-col items-center mt-10 mb-10'>
        <div className='flex items-center mb-4'>
          <img className='h-8 w-8 md:h-10 md:w-10 lg:mx-2 invert' src={logo} alt="" />
          <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl text-[#fef735] contrast-200'>WHAT OUR CLIENTS SAY</h1>
          <img className='h-8 w-8 md:h-10 md:w-10 mx-2 invert' src={logo} alt="" />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='w-full max-w-screen-lg mx-auto'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-transparent text-black'>
              <div className='rounded-t-3xl flex items-center justify-center backdrop-blur-lg bg-white/30 border border-white/30 p-3 md:p-4'>
                <img src={d.image} className='h-10 w-10 md:h-12 md:w-12 rounded-full' alt="" />
                <p className='text-base md:text-lg font-bold ml-2 md:ml-4'>{d.name}</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-3 md:p-4 bg-white text-black rounded-b-3xl'>
                <p className='text-sm md:text-base font-semibold'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

const data = [
  {
    name: 'Akshay Gupta',
    image: pfp5,
    review: 'Thrill Events planned my daughter’s birthday party, and it was a huge success! They took care of all the arrangements and made the day special for her and her friends. The games, decorations, and food were all fantastic. I’m really happy with their service!'
},
{
    name: 'Prayag Goyal',
    image: pfp8,
    review: 'We hired Thrill Events for our wedding, and we couldn’t be happier! They handled everything perfectly, from the decorations to the food. The staff was very friendly and made sure everything ran smoothly. Highly recommend them if you want a stress-free event!'
},
{
    name: 'Aarti Chopra',
    image: pfp1,
    review: 'I recently attended an event managed by Thrill Events, and I was very impressed. The attention to detail was amazing, and everything was well-organised. The decorations were beautiful, and the team made sure the event was memorable.'
},
{
    name: 'Gaurav Arora',
    image: pfp6,
    review: 'Thrill Events handled our corporate event, and it was absolutely fantastic. Their team is very professional, and they brought great ideas to make the event stand out. From the décor to the entertainment, everything was top-notch.'
},
{
    name: 'Priya mathur',
    image: pfp2,
    review: 'The team at Thrill Events is amazing! They organized our anniversary celebration, and it was perfect. Everything from the lighting to the music was exactly what we wanted. They were very attentive to our needs and made the event truly special.'
},
{
    name: 'Saloni Jain',
    image: pfp3,
    review: 'Thrill Events did a fantastic job managing our product launch event. The setup was flawless, and they made sure everything was ready on time. Their creativity and attention to detail were excellent. We were very pleased with how everything turned out!'
},
{
    name: 'Ruhani Sharda',
    image: pfp4,
    review: 'Thrill Events provided excellent service for our charity event. Their team was professional, and they managed the entire event smoothly. The décor was stunning, and the guests had a great time. We look forward to working with them again in the future.'
},
{
    name: 'Vatsal Mittal',
    image: pfp7,
    review: 'I had a great experience with Thrill Events when they managed my college farewell party. They took care of every detail, and the event was unforgettable. The music, food, and atmosphere were all top-notch, and they made sure everything went off without a hitch!'
}

];

export default Working;
