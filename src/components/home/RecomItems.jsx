import React from 'react'
import bluetshirt from '../../assets/home/recommendeditems/tshertblue.png'
import { productData } from '../../api/productData'
import { NavLink } from 'react-router'

const RecomItems = () => {
    const product = productData.slice(0,10)

    return (
        <section className='my-2 '>
            <h1 className='text-2xl font-semibold my-2'>Recommended Items</h1>

            <div className='flex flex-wrap gap-y-8 gap-4 justify-around my-8'>
                {product.map((Items, index) =>( 
                    <NavLink to='/collection' key={index} className='flex flex-col p-2 gap-3 max-sm:max-w-40 lg:max-w-60 bg-white border border-gray-200'>
                        <img src={Items.images[0]} alt={Items.name} className='h-50 w-50 max-sm:max-w-20 object-contain' />
                        <p className='font-semibold'>${Items.price}</p>
                        <p className='text-gray-600'>{Items.seller}</p>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default RecomItems
