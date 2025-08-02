import React, { useMemo, useState } from 'react';
import { Minus, Plus, X, ArrowLeft } from 'lucide-react';
import americanexpress from '../assets/cart/americaneexpress.png';
import mastercard from '../assets/cart/mastercard.png';
import paypal from '../assets/cart/paypal.png';
import visa from '../assets/cart/visa.png';
import applepay from '../assets/cart/applepay.png';
import secure from '../assets/cart/secure.png';
import chat from '../assets/cart/chat.png';
import delivery from '../assets/cart/delivery.png';
import SavedProducts from '../components/cart/SavedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removefromcart, movetosaved, removeall } from '../ReduxStore/cart/cartReducer';
import { NavLink } from 'react-router';
import {productData} from '../api/productData'


const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cartitems)
  const dispatch = useDispatch()
  const paymentMethods = [
    { name: 'American Express', image: americanexpress },
    { name: 'MasterCard', image: mastercard },
    { name: 'PayPal', image: paypal },
    { name: 'Visa', image: visa },
    { name: 'Apple Pay', image: applepay }
  ]
  const support = [
    {
      title: "Secure payment",
      description: "Have you ever finally just ",
      image: secure
    },
    {
      title: "Customer support",
      description: "Have you ever finally just ",
      image: chat
    },
    {
      title: "Free delivery",
      description: "Have you ever finally just",
      image: delivery
    },
  ]

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);


  const removeItem = (id) => {
    cart.filter((item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon({
        code: couponCode,
        discount: 80.00
      });
      setCouponCode('');
    }
  };

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), [cart])
  const discount = appliedCoupon ? appliedCoupon.discount : 60;
  const tax = 14.00;
  const total = subtotal - discount + tax;

  return (
    <>
      <div className="flex max-lg:flex-col justify-between gap-6">
        {/* Cart Items */}
        <div className="w-full relative bg-white overflow-hidden border border-gray-200 p-4 rounded-lg space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="border-b border-gray-200  p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-md   font-medium text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{item.size}</p>
                  <p className="text-sm text-gray-600 mb-2">{item.seller}</p>

                  {/* Action Links */}
                  <div className="flex items-center space-x-4 font-semibold text-sm">
                    <button onClick={() => dispatch(removefromcart({id : item.id}))} className="text-red-500 hover:text-red-700 border border-gray-300 rounded-lg px-2 py-1">
                      Remove
                    </button>
                      <button onClick={() => dispatch(movetosaved({id: item.id}))} className="text-blue-500 hover:text-blue-700 border border-gray-300 rounded-lg px-2 py-1">
                        Save for later
                      </button>
                  </div>
                </div>

                {/* Price and Quantity */}
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Qty:</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                        className=" hover:bg-gray-100 p-2 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {cart.length === 0 && (
            <div className="text-center text-gray-500">
              Your cart is empty.
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex absolute bottom-5 flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 pt-4">
            <NavLink to='/collection' className="bg-blue-500 flex gap-2 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              <ArrowLeft className='inline' /> Back to shop
            </NavLink>
            {cart.length > 0 &&
              <button onClick={() => dispatch(removeall())} className="text-blue-500 cursor-pointer border border-gray-300 rounded-lg py-2 px-4 hover:text-blue-700 font-medium">
                Remove all
              </button>
            }
          </div>
        </div>

        {/* Order Summary */}
        <div className=" top-4">
          {/* Coupon Section */}
          <div className="mb-6 border border-gray-200 rounded-lg bg-white p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Have a coupon?</span>
            </div>
            <form className="flex space-x-2">
              <input
                type="text"
                value={couponCode}
                required
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Add coupon"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={applyCoupon}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Apply
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-3 mb-6 border border-gray-200 rounded-lg bg-white p-4 ">
            <div className="flex justify-between max-md:text-sm">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>


            <div className={`justify-between max-md:text-sm ${cart == '' ? 'hidden' : 'flex'}`}>
              <span className="text-gray-600">Discount:</span>
              <span className='font-medium flex items-center gap-1 text-red-500'> <Minus className="w-3 h-3" /> ${discount.toFixed(2)}</span>
            </div>


            <div className={`justify-between max-md:text-sm ${cart == '' ? 'hidden' : 'flex'}`}>
              <span className="text-gray-600">Tax:</span>
              <span className="font-medium text-green-500">+ ${tax.toFixed(2)}</span>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              {total >= 0 ? (
                <span>${total?.toFixed(2)}</span>
              ) : (
                <span className={`${0 === 0 ? 'text-green-600' : 'text-red-500'}`}>{total < 0 ? 0 : 'invalid'}</span>
              )}
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#00B517] hover:bg-[#00b518d1] text-white py-3 px-4 rounded-lg transition-colors font-semibold text-lg mb-4">
              Checkout
            </button>

            {/* Payment Methods */}
            <div className="flex justify-center space-x-2">
              {paymentMethods.map((method) => (
                <img
                  key={method.name}
                  src={method.image}
                  alt={method.name}
                  className="w-10 h-10 object-contain"
                />
              ))}
            </div>
          </div>


        </div>
      </div>
      <div className="flex min-h-20 my-8 items-center max-md:justify-center max-md:gap-6 max-sm:gap-5 gap-8">
          {support.map((item, i) => (
            <div key={i} className="flex max-sm:flex-col justify-center items-center gap-2">
              <span className='size-15 max-sm:size-10 max-lg:size-12  flex items-center justify-center bg-gray-200 rounded-full'>
              <img src={item.image} alt={item.title} className='h-6 max-md:h-4' />
              </span>
              <div>
                <p className='text-lg max-sm:text-sm md:text-base max-sm:text-center'>{item.title}</p>
                <p className='text-gray-400 max-md:text-xs max-sm:text-center'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      <div>
        {/* Saved Products Section */}
        <SavedProducts product />
      </div>
    </>
  );
};

export default Cart;