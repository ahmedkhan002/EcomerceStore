import React, { useState } from 'react'
import herobg from '../../assets/home/herobg.png'
import user from '../../assets/home/user.png'

const HeroSection = () => {
    const cateorybuttons = ['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category']

    const [activecat, setactivecat] = useState(0)

    return (
        <section className='flex flex-row justify-center flex-nowrap space-x-4 my-4 p-8 border border-gray-200 bg-white'>

            <div className='flex flex-1/5 flex-col gap-0.5 max-lg:hidden'>
                {cateorybuttons.map((button, index) => (
                    <button className={`text-start text-nowrap font-semibold select-none rounded-lg py-2 px-4 cursor-pointer hover:bg-slate-100 hover:text-black ${activecat === index ? 'bg-slate-100 text-black' : 'text-slate-400'}`}
                        key={index}
                        onClick={() => setactivecat(index)}>
                        {button}
                    </button>
                ))}
            </div>

            <div className='relative shrink-[.8]'>
                <div className='absolute h-full top-[10%] left-[7%] flex flex-col gap-'>
                    <h1 className='text-2xl max-sm:text-xl '>Latest trending</h1>
                    <h1 className='text-3xl max-sm:text-2xl font-bold'>Electronic items</h1>
                    <button className='max-w-max py-2 max-sm:py-1 max-sm:px-3 px-4 bg-white font-semibold cursor-pointer rounded-md mt-4 hover:text-blue-500 transition-all shadow-sm hover:shadow-md'>Learn more</button>
                </div>
                <img className='h-full w-full' src={herobg} alt='herobg' />
            </div>

            <div className='flex flex-col flex-1/6 shrink gap-3 max-md:hidden'>

                <div className='flex flex-col rounded-lg bg-[#E3F0FF] p-2'>
                    <div className='flex flex-col gap-2 text-sm'>
                        <div className='flex gap-2'>
                            <span className='bg-[#bcd9fa] overflow-hidden size-10 rounded-full '>
                                <img src={user} className='mt-2 mx-auto object-center' alt="user" />
                            </span>
                            <p className='text-nowrap'><span className=' block'>Hi, user</span> let’s get stated</p>
                        </div>
                        <button className='text-center text-nowrap rounded-sm cursor-pointer py-1 text-white bg-blue-500'>Join now</button>
                        <button className='text-center text-nowrap font-semibold cursor-pointer rounded-sm py-1   text-blue-500 bg-white'>Log in</button>
                    </div>
                </div>

                <div className='bg-[#F38332] text-white h-full p-4 rounded-lg'>
                    <p className='break-words text-wrap '>
                        <span className='block'>
                            Get US $10 off</span>
                        <span className='block'>with a new</span>
                        supplier</p>
                </div>
                <div className='bg-[#55BDC3] text-white p-4 rounded-lg'>
                    <p className='break-words text-wrap '>
                        <span className='block'>
                            Send quotes with</span>
                        <span className='block'>supplier</span>
                        preferences</p>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
