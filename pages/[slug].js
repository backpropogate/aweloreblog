import React from 'react'
import client from '../client';
import sanity from '../client'
import SocialButtons from '../components/SocialButtons';



export const  getStaticPaths = async () => {
   const query = `*[_type == "post]{
       _id,
       slug {
           current
       }
   }`;
   const posts = await client.fetch(query);
   const paths = posts.map((post) => ({
       params: {
           slug:post.slug.current
       }
   }))
    
    return {
      paths,
      fallback: "blocking",
    }
  }
  export const getStaticProps = async({ params }) => {
  const query = `
  *[_type == "post" && slug.current == $slug] [0]  {
    _id,
    title,
    slug,
    author-> {
        name,
    },
    categories,
    mainImage,
    publishedAt,
    body,
  }`;
  const post = await client.fetch(query, {
      slug: params?.slug,
  });
  
  if(!post) {
      return {
          notFound: true,
      };
  }

  return {
      props: {
          post,
      }
  }
  }
const Single = ({ post }) => {
    console.log(post)
    
  return (
    <div className='mt-5 p-20'>
    <div className='mb-5'>
       
<a className='bg-black text-white  py-1 px-2 rounded-full ' >Ecom</a>
        
</div>
<h1 className=' text-2xl sm:text-3xl font-bold mb-5'>{post.title}</h1>
<div className='flex  gap-4 mb-3'>
    <img className=' w-16 h-16' src="/imageonly.png" alt="" />
    <div>
        <h2 className='font-bold'>{post.author}</h2>
        <h2 className='text-gray-500 italic'>{post.publishedAt} </h2>
    </div>
</div>
<div>
    <img className='w-full' src={post.mainImage.asset.url} alt="" />
</div>
<SocialButtons/>
<section>
{body}
</section>
</div>
  )
}

export default Single