import React from 'react'
import { abilities } from '../constants'

const FeatureCard = () => {
  return (
 
    <div className='w-full px-5 md:px-20 mt-24' >
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                abilities.map((ability, index) => (
                    <div className='card-border rounded-xl p-8 flex flex-col gap-4' key={index}>
                        <div className='w-[46px] flex items-center justify-center rounded-full'> 
                           <img src={ability.imgPath} alt={ability.title} />
                        </div>
                       <h3 className='text-white text-2xl font-semibold mt-2'>{ability.title}</h3>
                       <p className='text-white-50 text-lg'>
                        {ability.desc}
                       </p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default FeatureCard