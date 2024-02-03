import Image from 'next/image'
import React from 'react'
import {featuredProducts} from '@/data'

const Featured = () => {
  return (
    <div className=' w-screen overflow-scroll text-red-500'>
        {/* wrapper */}
        <div className='w-max flex'> 
            {/* singleitem */}
            {featuredProducts.map((item)=>(
            <div 
            key={item.id}
             className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-200 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] '>
                {/* image */}
               {item.img && ( <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 '>
                    <Image src={item.img} alt='' fill className='object-contain'/>
                </div>)}
                {/* text */}
                <div className='flex-1 flex flex-col items-center justify-center gap-4 text-center'>
                    <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                    <p className='m-2 p-1 border border-gray-400 rounded-md 2xl:p-8'>{item.desc}</p>
                    <span className=' text-xl font-bold'>${item.price}</span>
                    <button className=' bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                </div>
            </div>
           ) )}
        </div>
    </div>
  )
}

export default Featured