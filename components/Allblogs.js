import React, {useEffect, useState} from 'react'
import SocialButtons from './SocialButtons'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Link from 'next/link'

const Allblogs = () => {
    const [postData, setPost] = useState();
   
    
    useEffect(() => {
        client.fetch(
            `*[_type == "post"]{
                title,
                slug,
                author,
                mainImage{
                    asset->{
                        _id,
                        url,
                    },
                    alt
                },
            }`
        )
        .then((data) => {
            setPost(data)} )  
        .catch(console.error)
    },[])
    
   
  return (
      <>
      <main className=' min-h-screen p-12'>
          <section className='container mx-auto'>
              <h1 className='text-5xl flex justify-center'>All Articles</h1>
              <h2 className='text-lg text-gray-600 flex justify-center mb-12'>We have published various blog articles, feel free to read them all</h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {postData && postData.map((post, index ) =>(
                    
                  <article>
                        
                        <Link as={`/post/${post.slug.current}`} href="/post/[slug]">
                      <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-black cursor-pointer hover:opacity-70' key={index}>
                          <img src={post.mainImage.asset.url} alt=""
                          className='w-full h-full rounded-r object-cover absolute' 
                          />
                          <span className=' relative h-full flex justify-end items-end pr-4 pb-4'>
                              <h3 className='text-white text-lg font-bold px-3 py-4 bg-black bg-opacity-75 rounded'>{post.title}</h3>
                          </span>
                      </span>
                      </Link>
                  </article>
                  ))}
              </div>

          </section>

      </main> 
      </>
  )
                  }

export default Allblogs