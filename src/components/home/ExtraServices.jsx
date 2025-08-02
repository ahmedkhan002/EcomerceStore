import React from 'react'

import card1 from '../../assets/home/extraservices/card1.png'
import card2 from '../../assets/home/extraservices/card2.png'
import card3 from '../../assets/home/extraservices/card3.png'
import card4 from '../../assets/home/extraservices/card4.png'
import search from '../../assets/home/extraservices/search.png'
import archive from '../../assets/home/extraservices/Archive.png'
import sent from '../../assets/home/extraservices/sent.png'
import shield from '../../assets/home/extraservices/shield.png'



const ExtraServices = () => {

    const card = [
        {
            img: card1,
            icon: search,
            title: 'Source from Industry Hubs'
        },
        {
            img: card2,
            icon: archive,
            title: 'Customize Your Products'
        },
        {
            img: card3,
            icon: sent,
            title: 'Fast, reliable shipping by ocean or air'
        },
        {
            img: card4,
            icon: shield,
            title: 'Product monitoring and inspection'
        }
    ]

    return (
        <section className='my-4'>
            <h1 className='text-2xl font-semibold mb-6'>Our extra services</h1>
            <div className="p-4 flex flex-wrap justify-around gap-10 bg-white rounded-xl">
                {card.map((item, i) => (
                    <div key={i} className="bg-white group border border-gray-200 hover:shadow-2xl transition-all cursor-pointer rounded-md h-60 w-80 shadow-md overflow-hidden relative group">
                        {/* Image */}
                        <div className='relative w-full'>
                            <div className='w-full h-40 overflow-hidden '>
                                <img
                                    src={item.img}
                                    alt="Service"
                                    className="h-full w-full object-center scale- group-hover:scale-110 duration-400"
                                />
                            </div>

                            <div className='w-full border top-0 h-full opacity-30 group-hover:opacity-0 duration-300 absolute bg-black'></div>

                            {/* Overlapping icon */}

                            <div className="absolute z-20 right-4 -bottom-5 overflow-hidden bg-blue-100 border border-blue-300 rounded-full p-4">
                                <img src={item.icon} className="size-4 text-blue-600" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-2 px-4 w-2/3">
                            <h3 className="text-md  font-medium ">{item.title}</h3>
                        </div>
                    </div>
                ))}


            </div>

        </section>
    )
}

export default ExtraServices
