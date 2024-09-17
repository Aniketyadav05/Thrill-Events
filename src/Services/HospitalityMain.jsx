import React from 'react'

import bg from '../assets/abouut-bg.jpg';
import Hospitality from './Hospitality';
const HospitalityMain = () => {
    const data= `At Thrill Events, we pride ourselves on offering exceptional hospitality that reflects the warmth and generosity of Indian culture. Our dedicated team ensures that every guest feels welcomed and cherished, attending to their needs with meticulous care and attention. From personalized greetings to thoughtful amenities, we create an inviting atmosphere that makes every occasion memorable.
`
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
                    Hospitality
                </h1>
            </div>
            <Hospitality hideButton={true} description={data}/>
            
        </div>
    )
}

export default HospitalityMain;