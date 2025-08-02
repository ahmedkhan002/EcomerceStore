import React from 'react'
import Navbar from './Navbar'
import Nav2 from './Navbar2'

const Header = () => {
    return (
        <header className='bg-white max-lg:pb-2'>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw'>
                <Navbar />
            </div>
            <div className='border-y-1 border-slate-300 max-lg:border-none'>
                <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]e'>
                    <Nav2 />
                </div>
            </div>
        </header>
    )
}

export default Header
