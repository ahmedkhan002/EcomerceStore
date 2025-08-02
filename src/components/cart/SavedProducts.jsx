import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { movetocart } from '../../ReduxStore/cart/cartReducer'
import { useDispatch, useSelector } from 'react-redux';

const SavedProducts = () => {
  const save = useSelector((state) => state.cartReducer.saveditems)
  const dispatch = useDispatch()
  const [hoveredProduct, setHoveredProduct] = useState(null);


  return (
    <>
      <div className="bg-white  border rounded-sm  border-gray-200">
        <div className="sm:px-6  ">
          <div className=" rounded-lg mb-4">
            {/* Header */}
            <div className=" px-2 py-3 ">
              <h2 className="text-lg font-semibold text-gray-900">Saved for later</h2>
            </div>

            <div className="p-2">
              <div className="flex flex-wrap space-y-5 min-h-40 gap-5">
                {save == '' &&
                  <h1 className='text-gray-500 text-center w-full h-full my-auto'>No Saved Items</h1>
                }
                {save != [] && save?.map((product) => (
                  <div
                    key={product.id}
                    className="group max-md:max-w-50 w-60 gap-2 flex flex-col "
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="flex items-center max-h-50 bg-gray-200 p-2 justify-center">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        ${product.price}.00
                      </span>
                      <div>
                        <h3 className="text-xs sm:text-sm text-gray-600  group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        <h3 className="text-xs sm:text-sm text-gray-600  group-hover:text-blue-600 transition-colors">
                          {product.feature}
                        </h3>
                      </div>
                      <button onClick={() => dispatch(movetocart({ id: product.id }))} className='cursor-pointer hover:text-blue-700 transition-colors border border-gray-300 items-center gap-2 flex rounded-sm max-w-max font-semibold text-blue-500 py-1 px-2'><ShoppingCart className='size-5' /> Move to cart</button>
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
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Shop now
        </button>
      </div>
    </>
  );
};

export default SavedProducts;