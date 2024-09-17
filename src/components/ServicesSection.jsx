import React from 'react';
import sangeet from '../assets/sangeet.png';
import { motion } from 'framer-motion';
import { slideUpVariants } from './Animation';
import logo from '../assets/mid.png';
import Artist from '../assets/Artis.jpeg';
import designing from '../assets/designing.jpeg';
import hospitality from '../assets/hospitality.jpeg';
import logistics from '../assets/logistics.jpeg';
import planning from '../assets/weddingPlanning.jpeg';
import management from '../assets/management.jpeg';
import vendors from '../assets/vendors.jpeg';
import ArtistIcon from '../assets/ArtistIcon.png';
import designIcon from '../assets/design.png';
import hospitalityIcon from '../assets/hospitality.png';
import logisticsIcon from '../assets/logistics.png';
import manpowerIcon from '../assets/manpower.png';
import productionIcon from '../assets/Production.png';
import venueIcon from '../assets/venue.png';
import planningIcon from '../assets/planning.png';

const ServiceCard = ({ title, description, image, icon }) => {
  return (
    <div className="relative bg-gray-100 p-4 shadow-md rounded-2xl h-auto w-full max-w-xs mx-auto mt-4">
      <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-4 text-center"
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <img src={icon} alt={`${title} icon`} className='h-12 sm:h-16 mb-4' />
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFEEAF] font-bold mb-2">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg text-white">{description}</p>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      title: "Production",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: sangeet,
      icon: productionIcon
    },
    {
      title: "Artist",
      description: "Expertly identifying and securing the ideal locations that meet all client specifications and detailed event requirements.",
      image: Artist,
      icon: ArtistIcon
    },
    {
      title: "Logistics",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: logistics,
      icon: logisticsIcon
    },
    {
      title: "Hospitality",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: hospitality,
      icon: hospitalityIcon
    },
    {
      title: "Planning",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: planning,
      icon: planningIcon
    },
    {
      title: "Designing",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: designing,
      icon: designIcon
    },
    {
      title: "Venue Sourcing",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: vendors,
      icon: venueIcon
    },
    {
      title: "Manpower",
      description: "We create a visually adorable stunning and cohesive atmosphere that reflects your Event and enhances event themes.",
      image: management,
      icon: manpowerIcon
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h1 className='text-black font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-3'>OUR EXPERTISE</h1>
      <img className='h-6 sm:h-8 md:h-10 mx-auto mb-2' src={logo} alt="Logo" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
