import React from 'react'
import Navbar from '/src/components/Navbar'

import { Link } from 'react-router-dom'

const Catagory = () => {
  return (
    <>
    <Navbar />
    <div className='p-5'>
      <div 
      className='pt-10 text-[58px] font-semibold flex justify-center '>
        <h1 
        className='border-b-[2.5px] pb-5 border-b-neutral-300 w-[99%] tracking-tight'>
        Categories</h1>
      </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8 py-16'>
      <Catagories />
      <Catagories />
      <Catagories />
      <Catagories />
      <Catagories />
      <Catagories />
      <Catagories />
      <Catagories />
    </div>
    </div>
    </>
  )
}

function Catagories(){
  return(
    <>
      <div
      className='flex flex-col justify-center items-center'>
        <Link to='/category/desserts'>
          <div 
          className='size-[150px] lg:size-[170px] xl:size-[220px] bg-gray-200 rounded-full active:border-4 hover:shadow-md border-gray-500 transition-all duration-75'>
          </div>
        </Link>
        <Link to='/category/:categories'
        className='font-semibold text-[18px]'>
          Category
        </Link>
      </div>
    </>
  )
}
export default Catagory