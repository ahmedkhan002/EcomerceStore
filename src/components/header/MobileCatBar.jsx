import React from 'react'

const MobileCatBar = () => {
    let isDown = false;
    let startX;
    let scrollLeft;
    return (
        <div className='hidden max-lg:block my-2 overflow-hidden mx-5'>
            <div
                className="flex gap-3 justify-center max-lg:justify-start text-blue-400 overflow-x-auto cursor-grab active:cursor-grabbing"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
                onMouseDown={(e) => {
                    isDown = true;
                    startX = e.pageX - e.currentTarget.offsetLeft;
                    scrollLeft = e.currentTarget.scrollLeft;
                }}
                onMouseMove={(e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - e.currentTarget.offsetLeft;
                    const walk = (x - startX) * 2;
                    e.currentTarget.scrollLeft = scrollLeft - walk;
                }}
                onMouseUp={() => isDown = false}
                onMouseLeave={() => isDown = false}
            >
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>All Categories</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Tech Items</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Clothes</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Furniture</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Electronics</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Home & Garden</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Sports</button>
                <button className='px-3 py-2 bg-gray-100 rounded-xl cursor-pointer hover:text-white hover:bg-blue-400 transition-all text-nowrap font-semibold pointer-events-none select-none'>Books</button>
            </div>

            <style >{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    )
}

export default MobileCatBar
