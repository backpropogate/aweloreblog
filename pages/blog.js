import React from 'react'
import Blog from '../components/Blog'
import Layout from '../components/Layout'
import groq from 'groq'
import client from '../client'

    
  

const blog = () => {
   
    
  return (
    <>
    <Layout>
    <Blog />
    </Layout>
    
    </>
  )
}

export default blog