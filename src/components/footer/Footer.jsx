import React from 'react';

import apple from '../../assets/footer/apple.png'
import playstore from '../../assets/footer/playstore.png'
import facebook from '../../assets/footer/facebook.png'
import twitter from '../../assets/footer/twitter.png'
import linkedin from '../../assets/footer/linkedin.png'
import instagram from '../../assets/footer/instagram.png'
import youtube from '../../assets/footer/youtube.png'
import logo from '../../assets/header/logo.png'

const Footer = () => {
  return (
    <footer className="">
      <div className='bg-white text-gray-700 px-6 md:px-20 pt-16 pb-10'>
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between gap-10">
        <div className='flex flex-col max-md:items-center w-50 gap-2 max-md:w-full'>
          <div className='flex items-center cursor-pointer space-x-2'>
            <div className='bg-blue-500 w-9 h-9 max-sm:h-8 max-sm:w-8 flex items-center justify-center rounded-xl'>
              <img src={logo} alt="Logo" className='max-sm:h-5' />
            </div>
            <h1 className='text-2xl select-none text-blue-400 font-bold'>Brand</h1>
          </div>
          <p className="text-sm leading-6 text-gray-600 max-md:text-center">
            We are a modern e-commerce store offering fashion-forward products for all seasons.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <div className='bg-gray-300 size-7 p-1 flex items-center justify-center hover:scale-105 cursor-pointer rounded-full'>
              <img src={facebook} alt='404' className="size-4 transition" />
            </div>
            <div className='bg-gray-300 size-7 p-1 flex items-center justify-center hover:scale-105 cursor-pointer rounded-full'>
              <img src={twitter} alt='404' className="size-4 transition" />
            </div>
            <div className='bg-gray-300 size-7 p-1 flex items-center justify-center hover:scale-105 cursor-pointer rounded-full'>
              <img src={linkedin} alt='404' className="size-4 transition" />
            </div>
            <div className='bg-gray-300 size-7 p-1 flex items-center justify-center hover:scale-105 cursor-pointer rounded-full'>
              <img src={instagram} alt='404' className="size-4 transition" />
            </div>
            <div className='bg-gray-300 size-7 p-1 flex items-center justify-center hover:scale-105 cursor-pointer rounded-full'>
              <img src={youtube} alt='404' className="size-4 transition" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className='flex flex-col max-md:items-center max-md:mx-auto'>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2 max-md:text-center text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Find store</li>
            <li className="hover:text-blue-500 cursor-pointer">Categories</li>
            <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Information */}
        <div className='flex flex-col max-md:items-center max-md:mx-auto'>
          <h2 className="text-lg font-semibold mb-4">Partnership</h2>
          <ul className="space-y-2 max-md:text-center text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Find store</li>
            <li className="hover:text-blue-500 cursor-pointer">Categories</li>
            <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='flex flex-col max-md:items-center max-md:mx-auto'>
          <h2 className="text-lg font-semibold mb-4">Information</h2>
          <ul className="space-y-2 max-md:text-center text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-500 cursor-pointer">Money Refund</li>
            <li className="hover:text-blue-500 cursor-pointer">Shipping</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='flex flex-col max-md:items-center max-md:mx-auto'>
          <h2 className="text-lg font-semibold mb-4">For users</h2>
          <ul className="space-y-2 max-md:text-center text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Login</li>
            <li className="hover:text-blue-500 cursor-pointer">Register</li>
            <li className="hover:text-blue-500 cursor-pointer">Settings</li>
            <li className="hover:text-blue-500 cursor-pointer">My Orders</li>
          </ul>
        </div>

        <div className='flex flex-wrap flex-col max-lg:justify-center gap-2'>
          <h1 className='text-black font-semibold'>Get App</h1>
          <div
            className='flex flex-row mt-2 group gap-2 hover:scale-105 cursor-pointer duration-150 py-2 px-3 w-35 rounded-xl bg-black text-white items-center'>
            <div className='h-8'>
              <img className='h-full' src={apple} alt="appstore" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px]'>DOWNLOAD ON THE</p>
              <p className='font-semibold text-md'>App Store</p>
            </div>
          </div>
          <div
            className='flex flex-row group gap-1 bg-black hover:scale-105 duration-150 cursor-pointer w-35 h-max py-2 px-2 rounded-xl text-white items-center'>
            <div className='h-8'>
              <img className='h-full' src={playstore} alt="appstore" />
            </div>
            <div className='flex items-start flex-col'>
              <p className='text-[8px]'>GET IT ON</p>
              <p className='font-semibold text-md'>Google Play</p>
            </div>
          </div>
        </div>

      </div>
      </div>
       <div className=" bg-gray-100 py-4 px-6 md:px-20 flex flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2023 Ecommerce.</p>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <img
            src="https://flagcdn.com/us.svg"
            alt="English"
            className="w-5 h-4 object-cover rounded-sm"
          />
          <span>English</span>
          <span className="text-xs">▾</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
