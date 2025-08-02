import React from 'react'
import bluetshirt from '../../assets/home/recommendeditems/tshertblue.png'

const RecomItems = () => {
    const products = [
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
        {
            img: bluetshirt,
            price: 10.30,
            title: 'T-shirts with multiple colors, for men'
        },
    ]
   
    return (
        <section className='my-2 '>
            <h1 className='text-2xl font-semibold my-2'>Recommended Items</h1>

            <div className='flex flex-wrap gap-y-8 gap-4 justify-around my-8'>
                {products.map((Items, index) =>( 
                    <div key={index} className='flex flex-col p-2 gap-3 max-sm:max-w-40 lg:max-w-60 bg-white border border-gray-200'>
                        <img src={Items.img} alt={Items.title} className='max-w-50 max-sm:max-w-20 mx-auto' />
                        <p className='font-semibold'>${Items.price}</p>
                        <p className='text-gray-600'>{Items.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecomItems
