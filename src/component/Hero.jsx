

import React from 'react';
import Cards from './Cards';

const Hero = () => {
  return (
    <>
      <div className='w-full h-[630px] mt-2.5 relative'>
        <img src='../public/Goldimg.png' className='w-full h-full object-cover' alt='Hero Background' />
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-5'>
          <p className='text-white text-3xl md:text-5xl font-bold leading-[70px]' >
            Unlock Your True LSAT Potential <br className='hidden md:block' />With 170+ Tutors
          </p>
          <button className='bg-[#5628FF] px-6 md:px-10 py-2 md:py-3.5 rounded-lg text-white mt-4'>Explore More</button>
        </div>
      </div>

      <div className='service-section bg-gray-200 px-5 md:px-10 pt-20 md:pt-28 min-h-[750px] w-full pb-20'>
        <h1 className='text-[#5628FF] text-center text-4xl md:text-5xl font-semibold oregano'>Exclusive Service</h1>
        <div className='mt-10'>
          <Cards />
        </div>
      </div>

      <div className='pt-20 md:pt-28 min-h-[800px] flex flex-col items-center px-5'>
        <h1 className='text-[#5628FF] text-4xl md:text-5xl font-bold text-center oregano'>Schedule Today</h1>
        <p className='text-[15px] text-center md:text-left font-medium max-w-2xl mt-3'>
          Unlock your full potential with our personalized private tutoring services. Book your appointment now and
          take the first step towards mastering the LSAT with unbeatable strategies and expert guidance.
        </p>

        <div className='flex flex-col  md:flex-row items-center gap-12 mt-8'>
          <div className='w-full md:w-[500px] py-10 px-5 md:px-7 rounded-md shadow-md lg:w-[762px]'>
            <h3 className='text-[22px] font-medium'>Choose Appointment</h3>
            <div className='flex flex-wrap justify-between mt-5 mb-10 gap-4 max-md:justify-center'>
              <p className='border-2 border-gray-400 px-6 py-2 font-medium rounded-sm hover:bg-[#5628FF] hover:text-white transition-all cursor-pointer text-center'>
                Free Consultation <br /> 30 minutes
              </p>
              <p className='border-2 border-gray-400 px-6 py-2 font-medium rounded-sm hover:bg-[#5628FF] hover:text-white transition-all cursor-pointer text-center'>
                Basic Service <br /> 1 hour @ $99.00
              </p>
              <p className='border-2 border-gray-400 px-6 py-2 font-medium rounded-sm hover:bg-[#5628FF] hover:text-white transition-all cursor-pointer text-center'>
                Advanced Service <br /> 1 hour @ $199.00
              </p>
            </div>

            <h3 className='text-[22px] font-medium'>Your Information</h3>
            <form className='flex flex-col md:flex-row justify-between mt-5 mb-10 gap-4'>
              <input type='text' placeholder='Enter Name' className='border-2 border-gray-400 px-3 py-3 text-center rounded-sm w-full' />
              <input type='email' placeholder='Enter Email' className='border-2 border-gray-400 px-3 py-3 text-center rounded-sm w-full' />
              <input type='tel' placeholder='Enter Ph. No.' className='border-2 border-gray-400 px-3 py-3 text-center rounded-sm w-full' />
            </form>

            <h3 className='text-[22px] font-medium'>Your Confirmation</h3>
            <button className='w-full bg-[#5628FF] text-white py-2 rounded-md mt-2.5 cursor-pointer'>Success</button>
          </div>

          <div className='w-[250px] md:w-[246px]'>
            <img src='../public/calender.png' alt='Calendar' className='drop-shadow-md w-full' />
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center w-full gap-10 md:gap-[6rem] justify-center mt-28 px-5'>
        <div className='w-full md:w-[552px]'>
          <h1 className='text-[#5628FF] text-4xl md:text-[70px] font-bold leading-tight mb-5 text-center md:text-left oregano'>
            Uncover <br /> Our Story
          </h1>
          <p className='leading-7 text-center md:text-left'>
            When I first started studying, I was horrible at the LSAT. My first official take barely scored in the 150’s. It took years of studying until I realized a few simple things that helped me consistently score 170+. I want to share this knowledge with you! The LSAT is Simple, Easy, and Fun! Let me show you the brighter, Golden version of the LSAT. Become the Boss of the Test.
          </p>
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-10 items-center md:items-start'>
            <button className='px-10 py-2 bg-[#5628FF] text-white rounded-md'>Book Now</button>
            <button className='px-10 py-2 border-2 border-gray-400 rounded-md'>More About</button>
          </div>
        </div>

        <div className='w-[280px] md:w-[420px]'>
          <img src='../public/profession.png' alt='Professional' className='w-full object-cover' />
        </div>
      </div>

      <div className='h-[100px] bg-[#5628FF] mt-20 mb-20 w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-[15vw] text-center'>
        <h1 className='text-white text-xl md:text-2xl font-medium'>Follow Us on Social Media</h1>
        <div className='hidden md:block h-[95px] w-[5px] bg-white rounded'></div>
        <div className='flex items-center gap-4 md:gap-5 mt-3 md:mt-0'>
          <a href='#'><img src='../public/instagram.png' alt='Instagram' className='w-[40px] md:w-[50px] hover:cursor-pointer' /></a>
          <a href='#'><img src='../public/facebook.png' alt='Facebook' className='w-[60px] md:w-[85px] hover:cursor-pointer' /></a>
          <a href='#'><img src='../public/youtube.png' alt='YouTube' className='w-[50px] md:w-[73px] hover:cursor-pointer' /></a>
          <a href='#'><img src='../public/tik tok.png' alt='TikTok' className='w-[50px] md:w-[75px] hover:cursor-pointer' /></a>
        </div>
      </div>
    </>
  );
};

export default Hero;



