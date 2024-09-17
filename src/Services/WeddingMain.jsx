import React from 'react'
import Wedding from './Wedding'
import ImageSwiper from '../components/ImageSwiper';

import M1 from '../assets/Facilities/Wedding/Mehendi.jpg';
import M2 from '../assets/Facilities/Wedding//mehendi2.jpg';
import M3 from '../assets/Facilities/Wedding//mehendi3.jpg';
import M4 from '../assets/Facilities/Wedding//mehendi4.jpg';

import H1 from '../assets/Facilities/Wedding//Haldi.jpg';
import H2 from '../assets/Facilities/Wedding//haldi1.jpg';
import H3 from '../assets/Facilities/Wedding//haldi2.jpg';
import H4 from '../assets/Facilities/Wedding//haldi3.jpg';
import H5 from '../assets/Facilities/Wedding//haldi4.jpg';

import S from '../assets/Facilities/Wedding//Sangeet.jpg';
import S1 from '../assets/Facilities/Wedding//sangeet1.jpg';
import S2 from '../assets/Facilities/Wedding//sangeet2.jpg';
import S3 from '../assets/Facilities/Wedding//sangeet3.jpg';
import S4 from '../assets/Facilities/Wedding//sangeet4.jpg';
import S5 from '../assets/Facilities/Wedding//sangeet5.jpg';

import W1 from '../assets/Facilities/Wedding//W1.jpg';
import W2 from '../assets/Facilities/Wedding//W2.jpg';
import W3 from '../assets/Facilities/Wedding//W3.jpg';


import bg from '../assets/Facilities/Wedding/BG.jpg';
const WeddingMain = () => {
    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const Wedding = [
        { id: 1, image: W1 },
        { id: 2, image: W2 },
        { id: 3, image: W3 },

    ];
    const Mehndi = [
        { id: 1, image: M1 },
        { id: 2, image: M2 },
        { id: 3, image: M3 },
        { id: 4, image: M4 },

    ];
    const Haldi = [
        { id: 1, image: H1 },
        { id: 2, image: H2 },
        { id: 3, image: H3 },
        { id: 4, image: H4 },
        { id: 5, image: H5 },

    ];
    const Sangeet = [
        { id: 1, image: S },
        { id: 2, image: S2 },
        { id: 3, image: S3 },
        { id: 4, image: S4 },
        { id: 5, image: S5 },
        { id: 6, image: S1 },

    ];
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
            slidesPerView: 1,
            spaceBetween: 20,
        },
    };
    const HaldiText = `
  At Thrill Events, we honor the rich traditions of your wedding journey, starting with a vibrant Haldi ceremony. This sacred ritual, celebrated with joy and festivity, is a cherished prelude to the wedding day. Our expert team ensures that every detail, from the vibrant decorations and traditional attire to the aromatic turmeric paste and celebratory music, is thoughtfully managed. We create a warm and festive atmosphere that embraces cultural heritage while offering a seamless experience for you and your guests. Let us help you make this special occasion a memorable and joyful part of your wedding celebrations.
`;
    const MehendiText = `At Thrill Events, we celebrate the Mehndi ceremony as a vibrant and meaningful prelude to your wedding. This cherished tradition, known for its intricate henna designs and joyful ambiance, is an opportunity for you and your guests to immerse in cultural elegance. Our team ensures every detail is beautifully curated—from selecting skilled Mehndi artists and creating a stunning setting to providing personalized touches that reflect your style. We take care of all the arrangements so you can relax and enjoy this festive occasion, creating lasting memories with your loved ones before the big day.
`;
    const SangeetText = `At Thrill Events, we enchanting evening of music, dance, and celebration at the Sangeet! This special event will bring together family and friends to enjoy vibrant performances, heartfelt toasts, and a lively atmosphere filled with joy. It’s a night where traditions come alive through dance and song, setting the stage for the wedding festivities to come. We look forward to sharing this magical evening with you and creating unforgettable memories.
`
    const WeddingText = `At Thrill Events, the vibrant splendor of Indian weddings, where tradition meets opulence in a celebration like no other. From the rich, colorful ceremonies to the intricate rituals and joyful festivities, Indian weddings are a tapestry of cultural heritage and personal stories. Our expert team is dedicated to capturing every moment of your special day, blending timeless traditions with modern elegance. Whether it’s the grand ceremonies, the intimate rituals, or the lively receptions, we ensure every detail reflects the grandeur and significance of your unique love story. Let us help you create memories that will be cherished for a lifetime.`
    return (

        <div className='bg-[#7FBCD2]'>
            <div className="relative mx-auto shadow-lg text-white overflow-hidden cursor-pointer h-[auto] lg:h-[auto] w-full flex flex-col items-center justify-center bg-[#7FBCD2]">
                <div
                    className="w-full h-full md:h-[50vh] absolute"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: '100% 70%',
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
                <h1 className="text-white  font-extrabold flex justify-center items-center text-4xl relative mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-28 lg:mb-28">
                    Wedding
                </h1>
            </div>
            <h1 className='lg:text-left lg:ml-48 ml-0 text-center font-bold text-4xl mt-20'>MEHENDI</h1>
            <ImageSwiper
                servicesData={Mehndi}
                slidesPerViewConfig={slidesPerViewConfig}
                variants={variants}
                paragraphText={MehendiText}
            />;
            <h1 className='lg:text-left lg:ml-48 ml-0 text-center font-bold text-4xl mt-20 '>Haldi</h1>
            <ImageSwiper
                servicesData={Haldi}
                slidesPerViewConfig={slidesPerViewConfig}
                variants={variants}
                paragraphText={HaldiText}
            />;
            <h1 className='lg:text-left lg:ml-48 ml-0 text-center font-bold text-4xl mt-20'>Sangeet</h1>
            <ImageSwiper
                servicesData={Sangeet}
                slidesPerViewConfig={slidesPerViewConfig}
                variants={variants}
                paragraphText={SangeetText}
            />;
            <h1 className='lg:text-left lg:ml-48 ml-0 text-center font-bold text-4xl mt-20'>Wedding</h1>
            <ImageSwiper
                servicesData={Wedding}
                slidesPerViewConfig={slidesPerViewConfig}
                variants={variants}
                paragraphText={WeddingText}
            />;


        </div>
    )
}

export default WeddingMain;