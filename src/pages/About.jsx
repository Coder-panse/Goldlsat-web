

import React from 'react'

const About = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20'>
         <div className='flex flex-col lg:flex-row w-full gap-6 lg:gap-[6rem] justify-center mt-10 lg:mt-20 items-center'>
            <div className='w-full lg:w-[552px] text-center lg:text-left'>
                <h1 className='text-[#5628FF] text-[40px] md:text-[50px] lg:text-[70px] font-[600] leading-tight lg:leading-[90px] mb-5 oregano'>
                     Uncover <br/>Our Story
                </h1>
                <p className='leading-6 md:leading-8 text-sm md:text-base'>When I first started studying I was horrible at the LSAT. After a few months of studying, my first official take was barely in the 150’s. It took years of studying until I realized the few simple things that had me consistently scoring 170+. I want to share this knowledge with you! I promise you the LSAT is Simple, Easy, and Fun! Let me show you the brighter, Golden version of the LSAT. Become the Boss of the Test.</p>
                <div className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-10 justify-center lg:justify-start'>
                    <button className='px-8 py-2 bg-[#5628FF] text-white rounded-sm hover:cursor-pointer'>Book Now</button>
                    <button className='px-8 py-2 border-2 border-gray-400 rounded-sm hover:cursor-pointer'>More About</button>
                </div>
            </div>

            <div className='w-full max-w-[420px]'>
                <img src="/profession.png" alt="" className='w-full object-cover'/>
            </div>
        </div>

        <div className='w-full max-w-[90vw] md:w-[70vw] h-[380px] relative rounded-[40px] overflow-hidden my-16 lg:my-32 mx-auto'>
            <img src="/aboutimg.jpeg" alt="" className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className='absolute inset-0 text-white text-center px-6 md:px-16 flex flex-col justify-center items-center'>
                <h1 className='text-[30px] md:text-[40px] lg:text-[60px]'>Take Action</h1>
                <p className='my-3 md:my-5 text-sm md:text-base leading-6 md:leading-8'>When I first started studying I was horrible at the LSAT. After a few months of studying, my first official take was barely in the 150’s. It took years of studying until I realized the few simple things that had me consistently scoring 170+. I want to share this knowledge with you! I promise you the LSAT is Simple, Easy, and Fun! Let me show you the brighter, Golden version of the LSAT. Become the Boss of the Test.</p>
                <button className='bg-[#5628FF] px-5 py-2 w-[230px] md:w-[330px] rounded-sm text-white font-medium hover:cursor-pointer'>View Services</button>
            </div>
        </div>
    </div>
  )
}

export default About
