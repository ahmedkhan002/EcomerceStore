import React from 'react'

import AE from '../../assets/header/flags/AE.png'
import AU from '../../assets/header/flags/AU.png'
import USA from '../../assets/header/flags/US.png'
import RU from '../../assets/header/flags/RU.png'
import IT from '../../assets/header/flags/IT.png'
import DK from '../../assets/header/flags/DK.png'
import FR from '../../assets/header/flags/FR.png'
import DE from '../../assets/header/flags/DE.png'
import CN from '../../assets/header/flags/CN.png'
import GB from '../../assets/header/flags/GB.png'

const Suppliers = () => {
    const regions = [
        {
            flag: AE,
            name: 'Arabic Emirates',
            disc: 'shopname.ae'
        },
        {
            flag: AU,
            name: 'Australia',
            disc: 'shopname.ae'
        },
        {
            flag: USA,
            name: 'United States',
            disc: 'shopname.ae'
        },
        {
            flag: RU,
            name: 'Russia',
            disc: 'shopname.ae'
        },
        {
            flag: IT,
            name: 'Italy',
            disc: 'shopname.ae'
        },
        {
            flag: DK,
            name: 'Denmark',
            disc: 'shopname.ae'
        },
        {
            flag: FR,
            name: 'France',
            disc: 'shopname.ae'
        },
        {
            flag: DE,
            name: 'Jermony',
            disc: 'shopname.ae'
        },
        {
            flag: CN,
            name: 'China',
            disc: 'shopname.ae'
        },
        {
            flag: GB,
            name: 'Great Britain',
            disc: 'shopname.ae'
        },

    ]
    return (
        <section className='my-4'>
            <h1 className='text-2xl font-semibold mb-6'>Suppliers by region</h1>
            <div className=' flex gap-x-15 space-y-5 flex-wrap'>
                {regions.map((item, i) => (
                    <div key={i} className='flex w-40 max-sm:w-30 items-center gap-2'>
                        <img src={item.flag} alt={item.name} className='h-6' />
                        <div className='flex flex-col'>
                            <h1>{item.name}</h1>
                            <p className='text-sm text-gray-600'>{item.disc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Suppliers
