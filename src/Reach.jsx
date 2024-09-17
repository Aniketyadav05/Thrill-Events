import React from 'react'
import hehe from './assets/Gallery/11.jpg'
import Contact from './components/Contact'
const Reach = () => {
  return (
    <>
    <div className='relative mx-auto mt-0 shadow-lg text-white overflow-hidden cursor-pointer h-[100%] lg:h-[100%] w-full flex flex-col items-center justify-center'>
        <div className='w-full h-full md:h[100%] mt-0  absolute' style={{
        backgroundImage: `url(${hehe})`,
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',

      }} />
      <div className="absolute inset-0 w-full h-[100%] bg-black opacity-50 "></div>
      <h1 className='text-white font-extrabold flex justify-center items-center text-4xl relative mt-28 mb-28'>CONTACT US</h1>

      
    </div>
    <Contact className=''/>
    </>
  )
}

export default Reach