import React from 'react'
import Artist from './Services/Hospitality'
import Wedding from './Services/Wedding'
import Vendors from './Services/Artist'
import bg from './assets/abouut-bg.jpg';
import Events from './Services/Logistics';
const Provides = () => {
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
                    Services
                </h1>
            </div>
            <Wedding/>
            <Artist/>
            
            <Vendors/>
            <Events/>
            <div
                    className="w-full lg:h-[300px] md:h-[50vh] relative brightness-50"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: '100% 70%',
                        backgroundAttachment: 'fixed',
                    }}
                />
               
            
        </div>
    )
}

export default Provides;