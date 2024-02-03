import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'


const Header = () => {
  const user = false;
  return (
    <div className=' h-12 flex justify-between  items-center px-4 text-red-500 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href={'/'}>Homepage</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/'}>Contact</Link>

      </div>
      <div className='text-xl md:font-bold md:text-center   flex-1'>
        <Link href="/"> Massimo </Link> 
      </div>
      <div className='md:hidden'>
        <Menu/>
      </div>
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className=' flex gap-2 px-1 bg-orange-300 items-center cursor-pointer rounded-md md:absolute top-3 r-2 lg:static' > 
          <Image src={'/phone.png'} alt='' width={20} height={20}/>
          <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href={'/'}>Login</Link>
        ) :(
          <Link href={'/'}>Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  )
}

export default Header