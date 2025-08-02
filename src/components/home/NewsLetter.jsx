import React from 'react'
import {Mail} from 'lucide-react'

const NewsLetter = () => {
  return (
    <section className='mt-4 flex sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[8vw] flex-col justify-center bg-[#ededed] items-center gap-4 px-2 py-8'>
        <h1 className='text-2xl font-semibold text-center'>Subscribe on our newsletter</h1>
        <p className='text-gray-600 text-center'>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form className='flex max-sm:flex-col justify-center items-center max-h-max gap-2 '>
            <span className='bg-white flex items-center gap-2 p-1 rounded-md'>
            <Mail  className='inline text-gray-400'/>
            <input type="email" required placeholder='Email' className='text-gray-500 outline-none max-w-100 py-1' />
            </span>     
            <input type="submit" value='Subscribe' className='bg-blue-500 max-w-max text-white font-semibold px-3 py-2 rounded-md' />
        </form>
        
    </section>
  )
}

export default NewsLetter
