import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'
const index = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item)=>(<Link className=' w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50'
      key={item.id}
      href={`/product/${item.id}`}
      >
       
       {item.img &&( 
       <div className='h-[80%] relative'>  
       <Image src={item.img} alt='' fill className='object-contain'/>
       </div>
       )
       }
       
       <div className='flex justify-between items-center font-bold'>
        <h1 className='uppercase p-2 text-2xl' >{item.title}</h1>
        <h2 className='text-xl group-hover:hidden'>${item.price}</h2>
        <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
       </div>
      </Link>))}
    </div>
  )
}

export default index