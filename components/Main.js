import React from 'react'
import Link from 'next/link'



const Main = ({posts, categories, authors}) => {
    
  return (
    <div>
       
        <h1 className='font-bold text-center mt-10 mb-10 text-2xl sm:text-4xl latestArticles'>Latest Articles</h1>
        <div className='flex p-5 gap-10'>
            <Link  href="/blog">
            <div className='rounded-md cursor-pointer hover:opacity-60'>
            <img className=" rounded-md"src="/biz.jpg" alt="" /> 
            <h2 className='font-bold'>5 ways to blah blah</h2>
            <p className='text-gray-500 italic'>Published: March, 2021</p>
            </div>
            </Link>
            <div className='rounded-md cursor-pointer hover:opacity-60'>
            <img className='rounded-md' src="/biz.jpg" alt="" /> 
            <h2 className='font-bold'>5 ways to blah blah</h2>
            <p className='text-gray-500 italic'>Published: March, 2021</p>
            </div>
        </div>
        <div className='w-full rounded-md p-5 cursor-pointer hover:opacity-60'>
        <img className='rounded-md mb-5' src="/biz.jpg" alt="" /> 
        <h2 className='font-bold text-2xl'>5 ways to blah blah</h2>
        <p className='text-gray-500 italic text-md'>Published: March, 2021</p>

        </div>
    </div>
  )
}

export default Main