
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black rounded-tl-[70px] rounded-tr-[70px] px-8 py-10 md:px-16 md:py-16 flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left'>
        <div className='mb-8 md:mb-0'>
            <h1 className='text-white text-4xl md:text-5xl font-semibold mb-4'>Gold<span className='text-[#5628FF]'>LSAT</span></h1>
            <p className='text-white text-base md:text-lg font-medium'>Unlock Your True LSAT <br className='hidden md:block'/>Potential</p>
            <div className='flex gap-3.5 items-center justify-center md:justify-start mt-4'>
                <a href=""><img src="../public/facebook.png" alt="" className='w-[50px] md:w-[85px]'/></a>
                <a href=""><img src="../public/instagram.png" alt="" className='w-[40px] md:w-[50px]' /></a>
                <a href=""><img src="../public/youtube.png" alt="" className='w-[50px] md:w-[73px]' /></a>
            </div>
        </div>
        <div className='text-white mb-8 md:mb-0'>
            <p className='text-xl md:text-2xl font-medium mb-3 md:mb-5'>
                In-Person Location
            </p>
            <p className='text-sm md:text-md'>
                New York, Virginia
            </p>
        </div>
        <div className='text-white mb-8 md:mb-0'>
            <h1 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-5'>Quick Links</h1>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-2 md:mt-4'>
                <div>
                    <p><a href="">Home</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Service</a></p>
                </div>
                <div>
                    <p><a href="">Contact</a></p>
                    <p><a href="">Book Now</a></p>
                    <p><a href="">Login</a></p>
                </div>
            </div>
        </div>
        <div>
            <form action="" className='flex flex-col items-center md:items-start'>
                <input type="email" placeholder='Enter Your Email' className='rounded-sm py-2 px-5 bg-white mb-4 md:mb-5 w-full md:w-auto' />
                <button className='bg-[#5628FF] px-5 py-2 rounded-sm text-white font-medium hover:cursor-pointer' >Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Footer;
