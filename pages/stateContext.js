import React, { useState } from 'react'
import sanity from '../client'
import groq from 'groq'
import client from '../client'
import MyApp from './_app'
import Home from './index'

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
export const Context = React.createContext()


const stateContext = (props, post, category, author  ) => {
    
const [data, setData] = useState()
  return (
    <Context.Provider value={post} >
    {props.children}
    </Context.Provider>
  )
}

export default stateContext