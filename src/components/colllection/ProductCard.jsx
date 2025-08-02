import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { productData as product } from '../../api/productData';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { movetosaved } from '../../ReduxStore/cart/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const ProductCard = ({ productKey, productValue, layout }) => {
    const filtervalue = useSelector((state) => state.filterbar.productvalue);
    const filtertype = useSelector((state) => state.filterbar.producttype);
    const dispatch = useDispatch()
    const [wishlist, setWishlist] = useState({})
    const [showDetails, setShowDetails] = useState(false);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);


   const filteredProducts = product.filter((item) => {
    if (!filtertype || !filtervalue) return true; 
    return item[filtertype] === filtervalue;
});
// useEffect(() => {
//     console.log(filtertype, filtervalue, filteredProducts);
// }, [filtertype, filtervalue, filteredProducts]);

    
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const currentItems = filteredProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const toggleWishlist = (id) => {
        dispatch(movetosaved({ id: id }))
        setWishlist((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const toggleDetails = () => setShowDetails(!showDetails);

    const renderStars = (rating) => (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-3.5 h-3.5 ${star <= rating
                        ? 'fill-orange-400 text-orange-400'
                        : 'fill-gray-200 text-gray-200'
                        }`}
                />
            ))}
        </div>
    );

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setPage(1);
        setitemsPerPage(10)
    }, [productKey, productValue]);

    return (
        <>
            <div className={`flex gap-4 ${layout ? 'flex-col' : 'flex-row flex-wrap justify-center'}`}>
                {currentItems.map((item, i) => (
                    <div key={i} className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 ${layout ? 'max-w-full' : 'min-w-80 max-w-[48%]'}`}>
                        <div className={`gap-4 flex ${layout ? 'flex-row' : 'flex-col items-center'}`}>
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                                <div className="min-w-24 flex items-center justify-center max-w-40 h-full bg-gradient-to-br rounded-lg relative overflow-hidden">
                                    <img src={item.images[0]} alt={item.name} className='w-full' />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className={`flex-grow min-w-0 ${layout ? '' : 'items-center justify-center flex flex-col'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 pr-2">{item.name}</h3>
                                    <button
                                        onClick={() => toggleWishlist(item.id)}
                                        className="flex-shrink-0 p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${wishlist[item.id]
                                                ? 'fill-red-500 text-red-500'
                                                : 'text-gray-400 hover:text-red-500'
                                                }`}
                                        />
                                    </button>

                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg font-semibold text-gray-900">
                                        ${item.discountedPrice.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>

                                {/* Rating and Orders */}
                                <div className={`flex items-center flex-wrap gap-4 mb-2 ${layout ? 'justify-start' : 'justify-center'}`}>
                                    <div className="flex items-center gap-1">
                                        {renderStars(item.rating)}
                                        <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-600">{item.sold} orders</span>
                                    {item.shipping && (
                                        <span className="text-sm font-medium text-green-600">Free Shipping</span>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="text-sm text-gray-600 mb-2">
                                    <p className={`${showDetails ? '' : 'line-clamp-2'}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique
                                    </p>
                                </div>

                                <NavLink to='/product'
                                    onClick={toggleDetails}
                                    className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors"
                                >
                                    {showDetails ? 'Hide details' : 'View details'}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative my-4 bottom-0 h-10 flex justify-end items-center'>
                <select
                    className='p-1 outline-none border border-gray-300 rounded-sm px-2 text-sm'
                    value={itemsPerPage}
                    onChange={(e) => {
                        setitemsPerPage(Number(e.target.value));
                        setPage(1); // reset to first page
                    }}
                >
                    {[10, 20, 30, 40, 50].map((item) => (
                        <option key={item} value={item}>
                            Show {item}
                        </option>
                    ))}
                </select>
                <Stack spacing={2}>
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </div>
        </>
    );
};

export default ProductCard;
