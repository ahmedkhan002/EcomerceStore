import React, { useState } from 'react';
import { productData } from '../../api/productData';
import { useNavigate } from 'react-router';

const RelatedProductsSection = ({productCategory}) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate()
  const product = productData.filter(item => item.subcategory === productCategory).slice(0,6)

  return (
    <>
    <div className="bg-white py-6 border rounded-xl border-gray-300">
      <div className="  sm:px-6  ">
        <div className=" rounded-lg mb-4">
          <div className=" px-2 py-3 ">
            <h2 className="text-lg font-semibold text-gray-900">Related products</h2>
          </div>

          <div className="p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {product?.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className={`${product.bgColor} rounded-lg mb-2 aspect-square flex items-center justify-center p-2 transition-transform group-hover:scale-105`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm font-semibold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
       
    </div>
    {/* Promotion Banner */}
        <div className="bg-gradient-to-r my-5 from-blue-500 to-blue-600 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between text-white ">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              Super discount on more than 100 USD
            </h3>
            <p className="text-sm sm:text-base text-blue-100">
              Have you ever finally just write dummy info
            </p>
          </div>
          <button onClick={() => navigate('/collection')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Shop now
          </button>
        </div>
    </>
  );
};

export default RelatedProductsSection;