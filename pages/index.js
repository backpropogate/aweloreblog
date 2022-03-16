import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Main from '../components/Main'
import React, { useState } from 'react'
import groq from 'groq'
import client from '../client'


export async function getServerSideProps() {
    const query = groq `
    {
      "post" :*[_type == 'post'],
      "category": *[_type == 'category'],
      "author": *[_type == 'author']
  
    }
    `;
  
    const data = await client.fetch(query);
    
    return {
      props: {
        post: data.post,
        category: data.category,
        author: data.author,
      },
      
    }
  }

  


const Home = (post) => {

 
  
  console.log(post)
  
  return (
    <>
    <Layout>
      <Main />
    </Layout>
    
    </>
  )
}


export default Home
