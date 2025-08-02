import React, { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

import main from '../../assets/home/home&outdoor/main.png'
import softchair from '../../assets/home/home&outdoor/soft chair.png'
import lamp from '../../assets/home/home&outdoor/lamp.png'
import kitchendished from '../../assets/home/home&outdoor/kitchen dishes.png'
import bucket from '../../assets/home/home&outdoor/bucket.png'
import mixer from '../../assets/home/home&outdoor/mixer.png'
import blender from '../../assets/home/home&outdoor/blenders.png'
import towelstand from '../../assets/home/home&outdoor/towel stand.png'
import fakeplant from '../../assets/home/home&outdoor/fake plant.png'

const HomeOutdoor = () => {
    const scrollContainerRef = useRef(null)

    const topRowItems = [
        {
            image: softchair,
            title: 'Soft chairs',
            price: 'USD 19',
            category: 'furniture'
        },
        {
            image: lamp,
            title: 'Lamp',
            price: 'USD 19',
            category: 'furniture'
        },
        {
            image: kitchendished,
            title: 'Kitchen dishes',
            price: 'USD 19',
            category: 'kitchen'
        },
        {
            image: bucket,
            title: 'Smart watches',
            price: 'USD 19',
            category: 'electronics'
        }
    ]

    const bottomRowItems = [
        {
            image: mixer,
            title: 'Kitchen mixer',
            price: 'USD 19',
            category: 'kitchen'
        },
        {
            image: blender,
            title: 'Blenders',
            price: 'USD 09',
            category: 'kitchen'
        },
        {
            image: towelstand,
            title: 'Towel Stand',
            price: 'USD 19',
            category: 'appliances'
        },
        {
            image: fakeplant,
            title: 'Coffee maker',
            price: 'USD 10',
            category: 'kitchen'
        }
    ]

    const allItems = [...topRowItems, ...bottomRowItems]

    const scrollLeft = () => {
        const isMobile = window.innerWidth < 768
        const scrollEls = isMobile
            ? [scrollMobileRef.current]
            : [scrollDesktopTopRef.current, scrollDesktopBottomRef.current]

        scrollEls.forEach((el) => {
            if (el) {
                const itemWidth = el.querySelector('.scroll-item')?.offsetWidth || 200
                el.scrollBy({
                    left: -itemWidth,
                    behavior: 'smooth',
                })
            }
        })
    }

    const scrollRight = () => {
        const isMobile = window.innerWidth < 768
        const scrollEls = isMobile
            ? [scrollMobileRef.current]
            : [scrollDesktopTopRef.current, scrollDesktopBottomRef.current]

        scrollEls.forEach((el) => {
            if (el) {
                const itemWidth = el.querySelector('.scroll-item')?.offsetWidth || 200
                el.scrollBy({
                    left: itemWidth,
                    behavior: 'smooth',
                })
            }
        })
    }



    const scrollMobileRef = useRef(null)
    const scrollDesktopTopRef = useRef(null)
    const scrollDesktopBottomRef = useRef(null)



    return (
        <section className='relative flex max-md:flex-col border border-gray-200 my-2 bg-white'>
            {/* Left Side - Home and Outdoor Section */}
            <div className='flex flex-col justify-center border-r max-md:border-r-0 border-slate-300 flex-shrink-0 relative overflow-hidden'>
                <div className='relative'>
                    <h1 className='hidden max-md:flex p-6 text-xl font-semibold'>Home and outdoor</h1>
                    <div className='max-md:hidden absolute z-10 p-6'>
                        <h1 className='text-xl font-semibold'>Home and</h1>
                        <h1 className='text-xl font-semibold mb-4'>outdoor</h1>
                        <button className='bg-white cursor-pointer px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors'>
                            Source now
                        </button>
                    </div>
                    <img src={main} alt="main" className='max-md:hidden w-full object-cover' />
                </div>
            </div>

            {/* Scroll Container */}
            <div className='flex-1 overflow-hidden relative'>
                <div
                    ref={scrollContainerRef}
                    className='md:flex md:flex-row h-full overflow-x-auto scrollbar-hide scroll-smooth'
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >

                    {/* Desktop: Two Rows */}
                    <div className='hidden md:flex md:flex-col h-full w-full'>
                        <div
                            ref={scrollDesktopTopRef}
                            className='flex overflow-x-auto scrollbar-hide flex-nowrap h-1/2'>
                            {topRowItems.map((item, index) => (
                                <div key={`top-${index}`} className='scroll-item flex flex-row justify-between select-none cursor-pointer gap-2 border-r border-gray-200 px-3 py-4 hover:bg-gray-50 transition-colors min-w-[220px] w-full'>
                                    <div className=''>
                                        <h3 className='text-sm font-medium text-gray-800 mb-1'>{item.title}</h3>
                                        <p className='text-xs text-gray-500'>From</p>
                                        <p className='text-xs text-gray-500'>{item.price}</p>
                                    </div>
                                    <div className='rounded-lg flex items-end justify-center overflow-hidden'>
                                        <img src={item.image} alt={item.title} className='size-18 max-lg:object-cover' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row */}
                        <div
                            ref={scrollDesktopBottomRef}
                            className='flex overflow-x-auto scrollbar-hide flex-nowrap h-1/2 border-t border-gray-200'
                        >
                            {bottomRowItems.map((item, index) => (
                                <div key={`bottom-${index}`} className='scroll-item flex flex-row justify-between select-none cursor-pointer gap-2 border-r border-gray-200 px-3 py-4 hover:bg-gray-50 transition-colors min-w-[220px] w-full'>
                                    <div className='text-center'>
                                        <h3 className='text-xs font-medium text-gray-800 mb-1'>{item.title}</h3>
                                        <p className='text-xs text-gray-500'>From</p>
                                        <p className='text-xs font-semibold text-gray-700'>{item.price}</p>
                                    </div>
                                    <div className='rounded-lg flex items-end justify-center overflow-hidden'>
                                        <img src={item.image} alt={item.title} className='size-18 max-lg:object-cover' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Single Row */}
                    <div
                        ref={scrollMobileRef}
                        className='md:hidden flex overflow-x-auto scrollbar-hide h-full'>
                        {allItems.map((item, index) => (
                            <div key={`mobile-${index}`} className='scroll-item flex flex-col min-w-[160px] select-none cursor-pointer items-center gap-2 border border-gray-200 px-3 py-4 flex-shrink-0 hover:bg-gray-50 transition-colors'>
                                <div className='size-25 hover:bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden'>
                                    <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-xs font-medium text-gray-800 mb-1'>{item.title}</h3>
                                    <p className='text-xs text-gray-500'>From</p>
                                    <p className='text-xs font-semibold text-gray-700'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='hidden max-md:flex w-full p-6 text-blue-600 font-semibold'>
                        <a href="#">Source now <ArrowRight className='inline size-5' /></a>
                    </div>
                </div>

                {/* Left Scroll Button */}
                <button
                    onClick={scrollLeft}
                    className='absolute left-2 top-1/2 max-sm:top-1/3 cursor-pointer transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border border-gray-200'
                    aria-label="Scroll left"
                >
                    <svg className='w-4 h-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                {/* Right Scroll Button */}
                <button
                    onClick={scrollRight}
                    className='absolute right-2 top-1/2 max-sm:top-1/3 cursor-pointer transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 border border-gray-200'
                    aria-label="Scroll right"
                >
                    <svg className='w-4 h-4 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default HomeOutdoor