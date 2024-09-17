import React from 'react'


import bg from '../assets/Facilities/Logistics/bg.jpg';
import Logistics from './Logistics';
const LogicsticsMain = () => {
    const data = `At Thrill Events, we excel in managing the intricate logistics of your event with precision and ease. From coordinating transportation and managing timelines to overseeing vendor arrangements and ensuring smooth transitions between each event segment, our experienced team handles every detail to ensure your celebration unfolds flawlessly. We focus on the logistics so you can focus on enjoying your special day, confident that everything is in expert hands.`
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
                    Logistics
                </h1>
            </div>
            <Logistics hideButton={true} description={data}/>
            
        </div>
    )
}

export default LogicsticsMain;