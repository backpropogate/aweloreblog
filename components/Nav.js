import React from 'react'
import Marquee from './Marquee'
import Link from 'next/link'

const Nav = () => {
  return (
    <header>
    <Marquee/>
    <nav className=' w-full h-16 sm:h-24 flex justify-around sm:justify-around items-center py-9 shadow-md overflow-hidden'>
      <Link href="/">< img className=' cursor-pointer hover:opacity-70 w-20 sm:w-40' src="/logo2.png" alt="" /></Link>
      <ul className=' hidden sm:flex gap-5 font-bold '>
        <Link href='/allblogs' ><li className="cursor-pointer hover:opacity-50">Eccomerce</li></Link>
        
        <Link href='/allblogs'><li className="cursor-pointer hover:opacity-50">Marketing</li></Link>
        <Link href='/allblogs'><li className="cursor-pointer hover:opacity-50">Technology</li></Link>
        <Link href='/allblogs'><li className="cursor-pointer hover:opacity-50">Contact</li></Link>
      </ul>
      <a href="" className='hamburger'><svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9375 13.8125H43.0625M8.9375 39.8125H43.0625H8.9375ZM8.9375 26.8125H43.0625H8.9375Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</a>

    </nav>
    </header>
  )
}

export default Nav