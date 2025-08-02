import React from 'react'
import bgcover from '../../assets/home/supplierform/bgcover.png'

const ReqSupplier = () => {
  return (
    <section
      className="relative w-full bg-cover my-4 rounded-lg overflow-hidden bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgcover})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF80] z-0" />

      <div className="relative z-10 flex lg:flex-row md:flex-col sm:flex-col max-h-fit lg:items-start md:justify-center md:items-center justify-between max-w-7xl mx-auto py-10 px-4 gap-6">
        {/* Left text block */}
        <div className="text-white md:text-center lg:text-start max-w-lg">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
            An easy way to send <br /> requests to all suppliers
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right form block */}
        <div className="bg-white px-6 py-8 rounded-lg shadow-md w-full max-w-md max-md:hidden md:block lg:block">
          <h2 className="text-gray-900 text-base font-semibold mb-4">Send quote to suppliers</h2>
          <input
            type="text"
            placeholder="What item you need?"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <textarea
            placeholder="Type more details"
            rows="3"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Quantity"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <select className="w-[100px] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Box</option>
            </select>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md w-full">
            Send inquiry
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReqSupplier
