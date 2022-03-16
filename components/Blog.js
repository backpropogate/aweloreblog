import React, {useEffect, useState} from 'react'
import SocialButtons from './SocialButtons'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Image from 'next/image'



const Blog = () => {
    const [singlePost, SetSinglePost] = useState(null);
    
  return (
    
    <div className='mt-5 p-20'>
        <div className='mb-5'>
    <a className='bg-black text-white  py-1 px-2 rounded-full '>Eccomerce</a>
    </div>
    <h1 className=' text-2xl sm:text-3xl font-bold mb-5'>Top 10 Best Blogs Around the World That Will Inspire Your Life</h1>
    <div className='flex  gap-4 mb-3'>
        <img className=' w-16 h-16' src="/imageonly.png" alt="" />
        <div>
            <h2 className='font-bold'>Book of commerce</h2>
            <h2 className='text-gray-500 italic'>Publish date: 2022-03-11 </h2>
        </div>
    </div>
    <div>
        <img className='w-full' src="/biz.jpg" alt="" />
    </div>
    <SocialButtons/>
<section>
    Lorem ipsum dolor sit amet
     consectetur, adipisicing elit. Voluptates, animi? 
     At ea maiores eos quas quod delectus quasi commodi
      eum! Officia laudantium corporis aliquid placeat odit
       saepe nisi a voluptate?
</section>
    </div>
  )
}

export default Blog