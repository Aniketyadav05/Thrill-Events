import React, { useState } from 'react';
import { motion } from 'framer-motion';
import G1 from '../assets/fairmont.jpeg';
import G2 from '../assets/rambagh.jpeg';
import G3 from '../assets/buena.jpeg';
import G4 from '../assets/Leela.jpg';

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  // Dummy data for the four cards
  const cardsData = [
    { id: 1, info: 'Fairmont', image: G1 },
    { id: 2, info: 'Rambagh Palace', image: G2 },
    { id: 3, info: 'Buena Vista', image: G3 },
    { id: 4, info: 'Leela Palace', image: G4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center relative mb-10">
      {/* Main card */}
      <div
        className={`bg-[#7FBCD2] text-white w-64 h-64 rounded-lg shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${expanded ? ' h-16 mb-4 scale-105' : 'scale-105'} bg-opacity-40 backdrop-blur-lg border border-opacity-50 border-white relative overflow-hidden z-10`}
        onClick={() => setExpanded(!expanded)}
      >
        <h1 className='text-3xl font-extrabold'>OUR VENUES</h1>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
      </div>

      {/* Expanded cards */}
      {expanded && (
        <div className="flex flex-col items-center mt-6 space-y-4">
          {/* Grid layout for larger screens */}
          <motion.div
            className="hidden lg:flex lg:flex-row md:grid md:grid-cols-2 md:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {cardsData.map((card) => (
              <motion.div
                key={card.id}
                className="w-48 h-48 bg-gray-300 rounded-lg shadow-lg relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white text-center">{card.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Single-column layout for mobile */}
          <motion.div
            className="md:hidden grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {cardsData.slice(0, 2).map((card) => (
              <motion.div
                key={card.id}
                className="w-full h-48 bg-gray-300 rounded-lg shadow-lg relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white text-center">{card.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Card;
