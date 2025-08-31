import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/header/logo.png'
import { User, MessageSquare, Heart, ShoppingCart, ChevronDown, X, Menu, Search } from 'lucide-react'
import Sidebar from './Sidebar'
import { NavLink, useNavigate } from 'react-router'
import MobileCatBar from './MobileCatBar'

const Navbar = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showCatDropdown, setShowCatDropdown] = useState(false)
    const [catType, setCatype] = useState('All Categories')
    const [sidebar, setsidebar] = useState(false)
    const navigate = useNavigate()

    return (
        <nav>
            <div className='h-20 justify-between gap-6 flex items-center text-black px-4'>
                {/* logo */}
                <div className='flex items-center space-x-5'>
                    <button
                        onClick={() => setsidebar(!sidebar)}
                        className=" p-2 bg-white rounded-lg group shadow-xs cursor-pointer hover:shadow-xl duration-200 lg:hidden"
                    >
                        <Menu size={20} className="text-gray-700 group-hover:text-blue-500 transition-all" />

                    </button>
                    <Sidebar isOpen={sidebar} onClose={() => setsidebar(false)} />
                    <div onClick={() => navigate('/')} className='flex items-center cursor-pointer space-x-2'>
                        <div className='bg-blue-500 w-10 h-10 max-sm:h-8 max-sm:w-8 flex items-center justify-center rounded-xl'>
                            <img src={logo} alt="Logo" className='max-sm:h-5' />
                        </div>
                        <h1 className='text-2xl select-none text-blue-400 font-bold'>Brand</h1>
                    </div>
                </div>

                {/* SearchBar */}
                <div className='h-12 w-full max-lg:hidden flex items-center justify-between bg-white rounded-lg  border border-gray-300' >
                    <input
                        type="text"
                        placeholder="Search..."
                        className='px-4 py-2 w-full placeholder:text-gray-400 rounded-lg focus:outline-none'
                    />
                    <div className='flex items-center justify-center'>
                        {/* categorydropdown */}
                        <div
                            onClick={() => setShowCatDropdown(!showCatDropdown)}
                            className='relative flex items-center justify-center cursor-pointer  border-gray-300 border-l-1 px-2 h-12'>
                            <p
                                className='text-gray-500  select-none text-nowrap'>
                                {catType} <ChevronDown className='size-4 inline text-gray-400' />
                            </p>
                            {showCatDropdown && (
                                <div className='absolute flex justify-center top-12 bg-white border border-gray-200 rounded shadow-lg z-10'>
                                    <ul className='min-w-40 flex flex-col items-center justify-center'>
                                        <li className='py-1 w-full text-center hover:bg-gray-100 cursor-pointer' onClick={() => setCatype('All Categories')}>All Categories</li>
                                        <li className='py-1 w-full text-center hover:bg-gray-100 cursor-pointer' onClick={() => setCatype('Category 1')}>Category 1</li>
                                        <li className='py-1 w-full text-center hover:bg-gray-100 cursor-pointer' onClick={() => setCatype('Category 2')}>Category 2</li>
                                        <li className='py-1 w-full text-center hover:bg-gray-100 cursor-pointer' onClick={() => setCatype('Category 3')}>Category 3</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <button className='bg-blue-500 select-none cursor-pointer text-white px-6 py-3 rounded-r-lg font-semibold'>Search</button>
                    </div>
                </div>

                {/* Placeholder for future buttons (20%) */}
                <div className='flex items-center justify-end'>
                    {/* Profile Dropdown */}
                    <div className="relative mx-2 flex flex-col items-center">
                        <button type="button" className="max-lg:hidden cursor-pointer flex flex-col items-center" onMouseLeave={() => setShowProfileDropdown(false)} onClick={() => setShowProfileDropdown(!showProfileDropdown)} onMouseOver={() => setShowProfileDropdown(true)}>
                            <User className='size-4 text-gray-500' />
                            <p className='text-xs font-semibold text-gray-500 flex text-nowrap'>Profile</p>
                        </button>
                        <button type="button" className="max-lg:flex hidden cursor-pointer flex-col items-center" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                            <User className='size-5 text-black ' />
                        </button>
                        {showProfileDropdown && (
                            <div onMouseOver={() => setShowProfileDropdown(true)} onMouseLeave={() => setShowProfileDropdown(false)} className="absolute mt-8 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
                                {['Account', 'Settings', 'Logout'].map((option) => (
                                    <div key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" onClick={() => setShowProfileDropdown(false)}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Other icons */}
                    <div className='flex items-center'>
                        <div className='flex max-lg:hidden flex-col items-center space-x-1 mx-2'>
                            <MessageSquare className='size-4 text-gray-500' />
                            <p className='text-xs font-semibold text-gray-500 flex text-nowrap'>Message</p>
                        </div>
                        <div className='flex max-lg:hidden flex-col items-center space-x-1 mx-2'>
                            <Heart className='size-4 text-gray-500' />
                            <p className='text-xs font-semibold text-gray-500 flex text-nowrap'>Orders</p>
                        </div>
                        <NavLink to={'/cart'} className='flex flex-col items-center space-x-1 mx-2'>
                            <ShoppingCart className='size-4 max-lg:size-5 max-lg:text-black text-gray-500' />
                            <p className='text-xs max-lg:hidden font-semibold text-gray-500 flex text-nowrap'>My Cart</p>
                        </NavLink>
                    </div>
                </div>

            </div>
            <div className='hidden max-lg:block'>
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="flex gap-2 px-2 rounded-xl border items-center bg-slate-50 border-slate-200 h-12">
                        <Search className='text-gray-400' />
                        <input type="text" placeholder='Search' className='w-full pl-2 outline-none rounded-xl placeholder:text-gray-400 h-full' />
                    </div>
                </div>
            </div>
           <MobileCatBar />
        </nav>
    )
}

export default Navbar
