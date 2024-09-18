import React from 'react'
import { FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa"
import { FaLocationPinLock } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='bg-[#7FBCD2] text-black min-h-screen flex flex-col items-center p-6 md:p-12'>
      <h1 className='uppercase font-extrabold mt-8 md:mt-16 text-3xl md:text-4xl text-center'>
        Contact Our Team
      </h1>
      <p className='uppercase w-full max-w-3xl text-center mt-5 font-semibold text-sm md:text-base'>
        Get in touch with us to make your next event unforgettable. Our team is here to provide personalized support and ensure everything runs smoothly.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mt-10 w-full max-w-5xl'>
        <form className='w-full flex flex-col gap-4'
        action="https://formspree.io/f/xanwzzzv"
        method='POST'>
          
          <label className='uppercase font-semibold'>Name</label>
          <input 
          name='Name'
            type="text"
            autoComplete='off'
            required
            className='mb-2 p-2 bg-transparent border-2 border-black shadow-xl focus:outline-none focus:ring-2 focus:ring-[#183060] transition-all duration-200 transform focus:scale-105 text-white rounded-xl'
            placeholder='Enter Your Name'
          />
          <label className='uppercase font-semibold'>Email</label>
          <input
          name='Email'
            type="email"
            autoComplete='off'
            required
            className='mb-2 p-2 bg-transparent border-2 border-black shadow-xl focus:outline-none focus:ring-2 focus:ring-[#183060] transition-all duration-200 transform focus:scale-105 text-white rounded-xl'
            placeholder='Enter Email'
          />
          <label className='uppercase font-semibold'>Number</label>
          <input
          name='number'
            type="text"
            autoComplete='off'
            required
            className='mb-2 p-2 bg-transparent border-2 border-black shadow-xl focus:outline-none focus:ring-2 focus:ring-[#183060] transition-all duration-200 transform focus:scale-105 text-white rounded-xl'
            placeholder='0000-0000-00'
          />
          <label className='uppercase font-semibold'>Message</label>
          <textarea
            name="Text"
            autoComplete='off'
            required
            className='p-2 bg-transparent border-2 border-black shadow-lg focus:outline-none focus:ring-2 focus:ring-[#183060] transition-all duration-200 transform focus:scale-105 text-white rounded-xl'
            cols="30"
            rows="6"
            placeholder='Leave a message for us'
          ></textarea>
          <input
            type="submit"
            value="SUBMIT"
            className='bg-transparent border-2 border-black hover:bg-[#85D1D1] hover:text-black px-6 py-3 rounded-xl text-black font-bold mt-4 cursor-pointer transition-all duration-200 transform focus:scale-105'
          />
        </form>

        <div className='flex flex-col text-black space-y-8 mt-8 lg:mt-0'>
          <div>
            <h2 className='uppercase font-bold text-lg md:text-xl mb-3'>Chat with Us</h2>
            <p className='uppercase mb-2 text-sm md:text-base'>Speak to our friendly team via live</p>
            <a className='underline flex items-center hover:text-[#f74ab4] cursor-pointer' href="https://www.instagram.com/thrillevents_?igsh=YXZqMnFkcTA2dXRn">
              <FaInstagram className='mr-2' /> Message Us on Instagram
            </a>
            <a href='mailto:thrillevents1@gmail.com' target='_blank' className='underline flex items-center hover:text-[#f74a4a] cursor-pointer mt-2'>
              <FaMailBulk className='mr-2' /> Mail Us
            </a>
          </div>

          <div>
            <h2 className='uppercase font-bold text-lg md:text-xl mb-3'>Call us</h2>
            <p className='text-sm md:text-base'>Call our team Mon-Fri from 8am to 5pm</p>
            <a href="tel:+91 9928819320" className='underline flex items-center hover:text-[#4ffd4c] cursor-pointer mt-2'>
              <FaPhone className='rotate-90 mr-2' /> +91 9928819320
            </a>
          </div>

          <div>
            <h2 className='uppercase font-bold text-lg md:text-xl mb-3'>Visit us</h2>
            <p className='text-sm md:text-base'>Chat with us in person at our office</p>
            <a href="https://www.google.com/maps/place/300A,+Shankar+Nagar,+Kagdiwara,+Brahampuri,+Jaipur,+Rajasthan+302002/@26.9432705,75.8299735,17z/data=!3m1!4b1!4m6!3m5!1s0x396db13fae565053:0x1989746e508a375c!8m2!3d26.9432705!4d75.8325484!16s%2Fg%2F11y1kpyz79?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" className='underline flex items-center hover:text-[#FFD700] cursor-pointer mt-2'>
              <FaLocationPinLock className='mr-2' /> 300 A, Shankar Nagar, Brahmpuri Road, Jaipur, Rajasthan
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
