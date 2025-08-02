import React, { useState } from 'react';

const RelatedProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const relatedProducts = [
    {
      id: 1,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$41.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIxNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzRCNTU2MyIvPgo8L3N2Zz4K',
      bgColor: 'bg-gray-100'
    },
    {
      id: 2,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$42.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjI1IiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjE1IiBmaWxsPSIjNEI1NTYzIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjgiIGZpbGw9IiM2QjczODAiLz4KPC9zdmc+',
      bgColor: 'bg-gray-100'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$49.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNSAyNUM0NS40NzA2IDI1IDUwIDI5LjUyOTQgNTAgNTBDNTAgNTUuNTIyOCA0NS40NzA2IDUwIDQwIDUwSDMwQzI1IDUwIDI1IDQ1IDI1IDQwVjI1WiIgZmlsbD0iIzM3NDE1MSIvPgo8cGF0aCBkPSJNMzAgMzBIMzkuNUMzOS41IDMwIDQ1IDMwIDQ1IDM1LjVDNDUgNDEgMzkuNSA0MSAzNiA0MUgzMFYzMFoiIGZpbGw9IiM0QjU1NjMiLz4KPC9zdmc+',
      bgColor: 'bg-gray-100'
    },
    {
      id: 4,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$41.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIyNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyNSIgeT0iMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzRCNTU2MyIvPgo8L3N2Zz4K',
      bgColor: 'bg-gray-100'
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$49.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIyMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzRCNTU2MyIvPgo8L3N2Zz4K',
      bgColor: 'bg-gray-100'
    },
    {
      id: 6,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00',
      originalPrice: '$49.00',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIyMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iI0VGNDQ0NCIvPgo8cmVjdCB4PSIyMCIgeT0iMjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI0Y5NzMxNiIvPgo8L3N2Zz4K',
      bgColor: 'bg-gray-100'
    }
  ];

  return (
    <>
    <div className="bg-white py-6 border rounded-xl border-gray-300">
      <div className="  sm:px-6  ">
        {/* Related Products Section */}
        <div className=" rounded-lg mb-4">
          {/* Header */}
          <div className=" px-2 py-3 ">
            <h2 className="text-lg font-semibold text-gray-900">Related products</h2>
          </div>

          {/* Products Grid */}
          <div className="p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className={`${product.bgColor} rounded-lg mb-2 aspect-square flex items-center justify-center p-2 transition-transform group-hover:scale-105`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Shop now
          </button>
        </div>
    </>
  );
};

export default RelatedProductsSection;