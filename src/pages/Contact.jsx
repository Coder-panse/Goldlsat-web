
import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='w-full h-[540px] mt-4 relative'>
        <img src="/contactImg.jpeg" alt="" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className='absolute inset-0 flex flex-col justify-center text-center px-4 md:px-0'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>GET IN TOUCH</h1>
          <p className="text-white font-medium text-base md:text-xl mt-4">Ready to join forces? Give us your details and we’ll connect with you in no time. We’re eager to hear from you!</p>
        </div>
      </div>

      <div className='w-[90vw] max-sm:items-center md:w-[70vw] bg-white relative top-[-50px] flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between mx-auto p-6 shadow-lg rounded-md gap-4'>
       
        <div className='flex items-center gap-2.5'>
          <img src="/phone.png" alt="" className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]' />
          <p className='text-sm md:text-base'>+1 (917) 582-6971</p>
        </div>

        <div className='hidden md:block h-[110px] w-[5px] rounded-md bg-[#5628FF]'></div>

        <div className='flex items-center gap-2.5'>
          <img src="/message.png" alt="" className='w-[50px] md:w-[60px] h-[50px] md:h-[60px]' />
          <p className='text-sm md:text-base'>goldnnsa@gmail.com</p>
        </div>

        <div className='hidden md:block h-[110px] w-[5px] rounded-md bg-[#5628FF]'></div>

        <div className='flex items-center gap-2.5'>
          <img src="/location.jpeg" alt="" className='w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full' />
          <p className='text-sm md:text-base'>New York, Virginia</p>
        </div>
       
      </div>

      <div className='w-[90vw] md:w-[70vw] flex flex-col md:flex-row mx-auto mt-10 mb-32 rounded-2xl overflow-hidden shadow-xl'>
        <div className='w-full md:w-[40%] bg-[#6a47e8] flex justify-center items-center p-6'>
          <iframe className='w-full h-[300px] md:h-[550px] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7897169704174!2d-73.98578442450108!3d40.722645436964534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259772ce59555%3A0xa46a052ccc7757f5!2sVirginia&#39;s!5e0!3m2!1shi!2sin!4v1738601214913!5m2!1shi!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-full md:w-[60%] p-6 md:p-12'>
          <h1 className='text-3xl md:text-3xl font-bold'>Get In <span className='text-[#5628FF] oregano text-4xl'>Touch</span></h1>
          <p className='text-sm md:text-base font-medium mt-2'>Have questions? Reach out, and we’ll get back to you ASAP!</p>
          <form className='mt-6 space-y-4'>
            <input type="text" placeholder='Name' className='w-full p-3 border rounded-md' />
            <input type="email" placeholder='Email' className='w-full p-3 border rounded-md' />
            <input type="tel" placeholder='Phone No.' className='w-full p-3 border rounded-md' />
            <input type="text" placeholder='How did you find us' className='w-full p-3 border rounded-md' />
            <button className='w-full bg-[#5628FF] text-white py-3 rounded-md'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;