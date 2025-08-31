import React, { useRef, useState, useEffect } from 'react'
import smartwatch from '../../assets/home/weeklydeals/smartwatch.png'
import laptop from '../../assets/home/weeklydeals/laptop.png'
import gopro from '../../assets/home/weeklydeals/gopro.png'
import headphone from '../../assets/home/weeklydeals/headphone.png'
import mobile from '../../assets/home/weeklydeals/mobile.png'

const WeeklyDeals = () => {
    const scrollContainerRef = useRef(null)
    
    // Countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        days: 4,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // Timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { days, hours, minutes, seconds } = prevTime
                
                // Decrease seconds
                if (seconds > 0) {
                    seconds--
                } else if (minutes > 0) {
                    minutes--
                    seconds = 59
                } else if (hours > 0) {
                    hours--
                    minutes = 59
                    seconds = 59
                } else if (days > 0) {
                    days--
                    hours = 23
                    minutes = 59
                    seconds = 59
                } else {
                    // Timer reached zero, restart to 4 days
                    days = 4
                    hours = 0
                    minutes = 0
                    seconds = 0
                }
                
                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const Items = [
        {
            image: smartwatch,
            title: 'Smart Watches',
            discount: 25
        },
        {
            image: laptop,
            title: 'Laptops',
            discount: 15
        },
        {
            image: gopro,
            title: 'GoPro cameras',
            discount: 40
        },
        {
            image: headphone,
            title: 'Headphones',
            discount: 25
        },
        {
            image: mobile,
            title: 'Canon cameras',
            discount: 25
        },
    ]

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const itemWidth = scrollContainerRef.current.querySelector('.scroll-item').offsetWidth
            scrollContainerRef.current.scrollBy({
                left: -itemWidth,
                behavior: 'smooth'
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const itemWidth = scrollContainerRef.current.querySelector('.scroll-item').offsetWidth
            scrollContainerRef.current.scrollBy({
                left: itemWidth,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className='relative flex max-md:flex-col border border-gray-200 my-2 bg-white h-max'>
            <div className='flex flex-col max-md:flex-row max-md:justify-between p-6 border-r border-slate-300 flex-shrink-0'>
                <div>
                <h1 className='text-xl max-sm:text-lg font-semibold'>Deals and offers</h1>

                <p className='text-gray-400 max-md:text-black max-md:text-sm max-sm:text-xs max-md:font-normal font-semibold'>Hygiene equipments</p>
                </div>

                <div className='flex gap-3 mt-4 max-md:mt-0 text-white max-md:text-[#969595]'>
                    <div className='flex flex-col items-center justify-center rounded-md max-sm:w-10 w-12 max-sm:py-0.5 py-1 max-md:bg-slate-200 bg-[#606060]'>
                        <p className='text-lg font-semibold'>{timeLeft.days.toString().padStart(2, '0')}</p>
                        <p className='text-slate-200 max-md:text-[#868686] text-xs'>Days</p>
                    </div>
                    <div className='flex flex-col items-center justify-center rounded-md max-sm:w-10 w-12 max-sm:py-0.5 py-1 max-md:bg-slate-200 bg-[#606060]'>
                        <p className='text-lg font-semibold'>{timeLeft.hours.toString().padStart(2, '0')}</p>
                        <p className='text-slate-200 max-md:text-[#868686] text-xs'>Hour</p>
                    </div>
                    <div className='flex flex-col items-center justify-center rounded-md max-sm:w-10 w-12 max-sm:py-0.5 py-1 max-md:bg-slate-200 bg-[#606060]'>
                        <p className='text-lg font-semibold'>{timeLeft.minutes.toString().padStart(2, '0')}</p>
                        <p className='text-slate-200 max-md:text-[#868686] text-xs'>Min</p>
                    </div>
                    <div className='flex flex-col max-sm:hidden items-center justify-center rounded-md max-sm:w-10 w-12 max-sm:py-0.5 py-1 max-md:bg-slate-200 bg-[#606060]'>
                        <p className='text-lg font-semibold'>{timeLeft.seconds.toString().padStart(2, '0')}</p>
                        <p className='text-slate-200 max-md:text-[#868686] text-xs'>Sec</p>
                    </div>
                </div>
            </div>

            {/* Scroll Container */}
            <div className='flex-1 overflow-hidden relative'>
                <div 
                    ref={scrollContainerRef}
                    className='flex overflow-x-auto scrollbar-hide h-full scroll-smooth'
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {Items.map((item) => (
                        <div key={item.title} className='scroll-item flex flex-col w-1/4 min-w-[200px] select-none cursor-pointer items-center gap-5 border-r max-sm:border border-gray-200 px-2 py-4 flex-shrink-0'>
                            <img src={item.image} alt={item.title} className='h-[60%] max-sm:h-[50%]' />
                            <h1>{item.title}</h1>
                            <p className='px-1 bg-red-100 text-red-500 font-semibold rounded-2xl'>{`-${item.discount}%`}</p>
                        </div>
                    ))}
                </div>

                {/* Left Scroll Button */}
                <button
                    onClick={scrollLeft}
                    className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border border-gray-200'
                    aria-label="Scroll left"
                >
                    <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                {/* Right Scroll Button */}
                <button
                    onClick={scrollRight}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border border-gray-200'
                    aria-label="Scroll right"
                >
                    <svg className='w-5 h-5 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default WeeklyDeals