import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquare, Check, Heart, HeartIcon } from 'lucide-react';
import basket from '../assets/prductcards/basket.png'
import message from '../assets/prductcards/message.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import user from '../assets/home/user.png'
import ProductDetails from '../components/productcard/ProductDetails';
import RelatedProductsSection from '../components/productcard/RelatedProductsSection';
import { useDispatch, useSelector } from 'react-redux';
import { movetosaved } from '../ReduxStore/cart/cartReducer';

const ProductCard = () => {
    const product = useSelector(state => state.cartReducer.viewitem)
    const saveitem = useSelector(state => state.cartReducer.saveditems)
    const dispatch = useDispatch()
    const row = [
        {
            name: 'Price:',
            value: 'Negotiable'
        },
        {
            name: 'Type:',
            value: 'Classic shoes'
        },
        {
            name: 'Material:',
            value: 'Plastic material'
        },
        {
            name: 'Design:',
            value: 'NegotiabModern nicee'
        },
        {
            name: 'Customization:',
            value: 'Customized logo and design custom packages'
        },
        {
            name: 'Protection:',
            value: 'Refund Policy'
        },
        {
            name: 'Warranty:',
            value: '2 years full warranty'
        },
    ]
    const isSaved = (id) => saveitem.some(item => item.id === id);
    const toggleWishlist = (id) => {
        dispatch(movetosaved({ id }));
    };
    return (
        <>
            <section className=" w-full bg-white border border-gray-300 p-4 rounded-xl flex flex-col lg:flex-row gap-6">
                {/* Left Side - Images */}
                <div className="flex flex-col gap-4">
                    {/* Main Image */}
                    <div className=" min-h-[240px] min-w-[270px] max-w-[350px] max-lg:mx-auto border border-gray-300 overflow-hidden">
                        <img
                            src={product?.images[0]}
                            alt="Mens T-shirt"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex flex-wrap gap-2 items-center justify-start">
                        {product?.images?.map((src, i) => (
                            <div
                                key={i}
                                className="size-20 border border-gray-300 rounded-md overflow-hidden cursor-pointer hover:ring-2 ring-blue-400"
                            >
                                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Details */}
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className='text-green-500'><Check className="w-4 h-4 inline text-green-500 flex-shrink-0" /> In stock</h1>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {product?.name}
                    </h2>
                    <div className="flex items-center gap-2 w-full text-sm text-yellow-500">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Star key={item} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />))}
                            9
                        </div>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500 cursor-pointer"><img src={message} className='inline h-5 w-5' alt="" /> {product?.reviews}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-500"><img src={basket} className='inline w-5 mb-1' alt="" /> {product?.sold}</span>
                    </div>

                    {/* Price Table */}
                    <div className="grid grid-cols-3 w-full ">
                        <div className="bg-orange-100 px-2 py-3 text-center">
                            <div className="text-lg font-semibold text-orange-500">$98.00</div>
                            <div className="text-xs text-gray-600">50-100 pcs</div>
                        </div>
                        <div className="bg-orange-100 px-2 py-3  text-center">
                            <div className="text-lg font-semibold text-orange-500">$90.00</div>
                            <div className="text-xs text-gray-600">100-700 pcs</div>
                        </div>
                        <div className="bg-orange-100 px-2 py-3  text-center">
                            <div className="text-lg font-semibold text-orange-500">$78.00</div>
                            <div className="text-xs text-gray-600">700+ pcs</div>
                        </div>
                    </div>

                    <TableContainer sx={{ boxShadow: 'none' }} component={Paper}>
                        <Table sx={{ minWidth: 65 }} aria-label="simple table">
                            <TableBody>
                                {row.map((row) => (
                                    <TableRow
                                        key={row.name}
                                    >
                                        <TableCell component="th" scope="row" sx={{ color: 'gray' }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
                {/* Supplier Card */}
                <div className=" w-1/4 p-4 max-lg:hidden rounded-md space-y-4 mt-2 bg-gray-50">
                    <div className='flex gap-2 pb-4 border-b border-gray-400'>
                        <span className='bg-[#bcd9fa] overflow-hidden size-10 '>
                            <img src={user} className='mt-1 mx-auto object-center' alt="user" />
                        </span>
                        <p className='text-nowrap'><span className=' block'>Supplier</span> Guanjoi Trading LLC</p>
                    </div>
                    <div className="text-sm text-gray-500">Germany, Berlin</div>
                    <div className="text-xs text-green-600 font-medium">Verified Seller</div>
                    <div className="text-xs text-gray-500">Worldwide shipping</div>
                    <div className="mt-5 flex flex-col gap-2">
                        <button className="bg-blue-500 rounded-md py-1.5 text-white">Send Inquiry</button>
                        <button variant="outline" className='text-blue-600 border border-gray-200 py-1.5 rounded-md'>Seller's profile</button>
                    </div>
                    <button
                        onClick={() => toggleWishlist(product?.id)}
                        className="flex-shrink-0 flex flex-row gap-2 justify-center items-center p-1 w-full cursor-pointer text-blue-600 hover:text-red-500 rounded-full transition-colors"
                    >
                     <Heart className={isSaved(product?.id) ? "text-red-500 size-5 fill-red-500" : "text-blue-600 size-5"} />
                        <p className={isSaved(product?.id) ? "text-red-500" : "text-blue-600"}>Save for later</p>
                    </button>

                </div>
            </section>
            <ProductDetails />
            <RelatedProductsSection />
        </>
    );
};

export default ProductCard;
