import React from 'react'
import { useRouter } from 'next/router'
import sanity  from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import SocialButtons from '../../components/SocialButtons';
import Layout from '../../components/Layout';
export const  getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {
            current,
        },
    }`;
    const posts = await sanity.fetch(query);
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
     cat,
     mainImage ,
     publishedAt,
     body,
   }`;
   const post = await sanity.fetch(query, {
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
   const builder = imageUrlBuilder(sanity);
   function urlFor(source) {
       return builder.image(source)
   }
 const Single = ({ post }) => {
     console.log(post)
     
   return (
       <Layout>
     <div className='mt-5 p-20'>
     <div className='mb-5'>
    
 <a className='bg-black text-white  py-1 px-2 rounded-full '  >{post.cat}</a>

 </div>
 <h1 className=' text-2xl sm:text-3xl font-bold mb-5'>{post.title}</h1>
 <div className='flex  gap-4 mb-3 items-center'>
     <img className=' w-16 h-16' src="/imageonly.png" alt="" />
     <div>
         <h2 className='font-bold'>{post.author.name}</h2>
         
     </div>
 </div>
 <div>
     <img className='w-full' src={urlFor(post.mainImage.asset).url()} alt="" />
 </div>
 <SocialButtons/>
 <section className=' sectionTitles '>
 <PortableText value={post.body} />
 </section>
 </div>
 </Layout>
   )
 }
 
 export default Single