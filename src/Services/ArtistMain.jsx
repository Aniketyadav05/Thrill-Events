import React from 'react'


import bg from '../assets/abouut-bg.jpg';
import Artist from './Artist';
const ArtistMain = () => {
    const data =`Artist management involves guiding and supporting artists to help them succeed in their careers. This includes handling their schedules, bookings, and promotions, as well as providing advice on their artistic direction and business decisions. The goal is to ensure that artists can focus on their creativity while their career and business needs are professionally managed.`
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
                <h1 className="text-white font-extrabold flex justify-center items-center text-4xl relative mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-28 lg:mb-28">
                    Artist Management
                </h1>
            </div>
            <Artist hideButton={true} description={data}/>
            
        </div>
    )
}

export default ArtistMain;