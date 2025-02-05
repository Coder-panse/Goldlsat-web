
import React from 'react';

const Cards = () => {
    let data = [
        {
            img: "/book.png",
            title: "PowerPrep Tutoring",
            amount: "$Free",
            des: "New to the LSAT? No problem! Start with a FREE 30-minute consultation. Here I will see what level you’re at, give you tips to improve your game, and get you on the right footing for that 170+.",
            time: "30 Minute Session"
        },
        {
            img: "/book.png",
            title: "Accelerate Learning Kits",
            amount: "$199",
            des: "Unleash your potential with our elite tutoring solutions that deliver results efficiently. See improvement within days and have a guarantee to increase your score at any level.",
            time: "1 hour Session"
        },
        {
            img: "/book.png",
            title: "Accelerate Tutoring",
            amount: "$199",
            des: "Experience rapid mastery in any question type or section with our personalized learning approach. Our platform ensures top-tier performance and unmatched growth.",
            time: "2 hour Session"
        }
    ];

    return (
        <div className='w-full flex flex-wrap justify-center pt-10 gap-6 px-5'>
            {data.map((info, index) => (
                <div key={index} className='w-full sm:w-[366px] h-auto rounded-lg p-4 bg-white shadow-md'>
                    <div className='w-full h-[235px] m-auto py-2'>
                        <img src={info.img} alt='' className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-between mt-2'>
                            <h2 className='text-lg md:text-xl font-medium underline'>{info.title}</h2>
                            <p className='text-[#5628FF] text-lg md:text-xl font-medium'>{info.amount}</p>
                        </div>
                        <div className='my-2 text-sm md:text-base'>
                            <p>{info.des}</p>
                        </div>
                        <div className='mt-4 text-sm md:text-base font-semibold text-gray-700'>
                            <p>{info.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;