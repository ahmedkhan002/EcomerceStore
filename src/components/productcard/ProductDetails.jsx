import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'shipping', label: 'Shipping' },
        { id: 'about', label: 'About seller' }
    ];

    const productSpecs = [
        { label: 'Model', value: '#8786567', isHighlighted: true },
        { label: 'Style', value: 'Classic style' },
        { label: 'Certificate', value: 'ISO-898921212' },
        { label: 'Size', value: '34mm x 450mm x 19mm' },
        { label: 'Memory', value: '36GB RAM' }
    ];

    const features = [
        'Some great feature name here',
        'Lorem ipsum dolor sit amet, consectetur',
        'Duis aute irure dolor in reprehenderit',
        'Some great feature name here'
    ];

    const suggestedProducts = [
        {
            id: 1,
            name: 'Men Blazers Sets Business Formal',
            price: '$7.00',
            originalPrice: '$95.00',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIxMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyMCIgeT0iMTUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzRCNTU2MyIvPgo8L3N2Zz4K'
        },
        {
            id: 2,
            name: 'Men Shirt Sleeve Polo Contrast',
            price: '$5.00',
            originalPrice: '$25.00',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzM3NDE1MSIvPgo8L3N2Zz4K'
        },
        {
            id: 3,
            name: 'Apple Watch Series Space Gray',
            price: '$7.00',
            originalPrice: '$39.00',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIxNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iI0VGNDQ0NCIvPgo8L3N2Zz4K'
        },
        {
            id: 4,
            name: 'Basketball Crew Socks Long Stuff',
            price: '$7.00',
            originalPrice: '$25.00',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIyMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iIzM5OTNERiIvPgo8L3N2Zz4K'
        },
        {
            id: 5,
            name: 'New Summer Men\'s Casual T-Shirts',
            price: '$7.00',
            originalPrice: '$95.00',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1IiB5PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzYzNjZGMSIvPgo8L3N2Zz4K'
        }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="space-y-6">
                        {/* Description Text */}
                        <div className="text-sm text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                nistris nunc consectetur quis nostrud labore. Ut enim ad minim veniam, reprehenderit in voluptate velit esse cillum dolore nis fugiat
                                ipsum tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="mb-4">
                                Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>

                        {/* Product Specifications */}
                        <div className="">
                            {productSpecs.map((spec, index) => (
                                <div key={index} className="flex items-center border border-gray-200  w-1/2">
                                    <span className="text-sm text-gray-600 w-1/2 bg-gray-100 py-2 flex-shrink-0 px-2">{spec.label}</span>
                                    <div className="w-1/2 px-2">
                                        {spec.isHighlighted ? (
                                            <div className="inline-block py-1">
                                                <span className="text-sm font-medium ">{spec.value}</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-gray-800">{spec.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'reviews':
                return (
                    <div className="py-8 text-center text-gray-500">
                        <p>No reviews yet. Be the first to review this product!</p>
                    </div>
                );
            case 'shipping':
                return (
                    <div className="py-8 text-center text-gray-500">
                        <p>Shipping information will be displayed here.</p>
                    </div>
                );
            case 'about':
                return (
                    <div className="py-8 text-center text-gray-500">
                        <p>Seller information will be displayed here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className=" min-h-screen my-4 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="xl:col-span-2 bg-white border border-gray-300 rounded-xl">
                        <div className=" rounded-lg overflow-hidden">
                            {/* Tab Navigation */}
                            <div className="flex border-b border-gray-300 ">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-3 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-colors ${activeTab === tab.id
                                                ? 'bg-white text-blue-600 border-b-2 border-b-gray-600'
                                                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="p-6">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - You may like */}
                    <div className="xl:col-span-1 h-max bg-white border border-gray-300 rounded-xl">
                        <div className=" p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">You may like</h3>
                            <div className="space-y-4">
                                {suggestedProducts.map((product) => (
                                    <div key={product.id} className="flex items-center space-x-3 p-2 hover:bg-white rounded-lg transition-colors cursor-pointer">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                                                {product.name}
                                            </h4>
                                            <div className="flex items-center space-x-2">
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
        </section>
    );
};

export default ProductDetails;