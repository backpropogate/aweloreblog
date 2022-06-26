import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black pt-20 overflow-hidden w-full pb-7'>
        <div className='flex justify-around mb-10'>
        <div className='flex flex-col justify-evenly gap-1 '>
            <h1 className='text-white font-bold'>Helpful links</h1>
            <p className='text-white '>Home</p>
            <p className='text-white'>Eccomerce</p>
            <p className='text-white '>Technology</p>
            <p className='text-white '>Marketing</p>
        </div>
        <div className='flex flex-col justify-evenly  gap-1'>
            <h1 className='text-white font-bold'>Important links</h1>
            <p className='text-white '>Contact</p>
            <p className='text-white'>Privacy Policy</p>
            <p className='text-white '>Terms of Service</p>
            
        </div>
        </div>
        <div className='flex justify-center mt-5'>
            <a href="" className='text-white'><img className='w-36' src="/whitelogo.png" alt="" /> </a>
        </div>
        </footer>
  )
}

export default Footer