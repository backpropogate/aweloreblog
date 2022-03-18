import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import client from '../client'



const Main = ({posts, categories, authors}) => {
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
    <div>
       
        <h1 className='font-bold text-center mt-10 mb-10 text-2xl sm:text-4xl latestArticles'>Latest Articles</h1>
        
       <div className='grid grid-cols-2 sm:grid-cols-3'>
        {postData && postData.map((post, index ) =>(
          <Link as={`/post/${post.slug.current}`} href="/post/[slug]" key={index}>
        <div className='w-full rounded-md p-5 cursor-pointer hover:opacity-60'>
        <img className='rounded-md mb-5' src={post.mainImage.asset.url} alt="" /> 
        <h2 className='font-bold text-2xl'>{post.title}</h2>
        <p className='text-gray-500 italic text-md'>Published: March, 2021</p>
      
        </div>
        </Link>
          ))}
          </div>
      
    </div>
  )
}

export default Main