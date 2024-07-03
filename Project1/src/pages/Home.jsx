import React from 'react'
import Navbar from '/src/components/Navbar'
import { AiOutlineRise } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='p-5'>
      <div 
      className='flex flex-col lg:flex-row bg-blue-100 md:m-7 pb-10 lg:p-0 gap-6 lg:gap-2'>
        <div 
        className='lg:h-[430px] lg:w-[60%] overflow-hidden object-fill'>
          <img className='h-full'
          src="/src/assets/cheese.jpeg" alt="special" />
        </div>
        <div className='flex flex-col justify-center mx-auto px-10'>
          <div 
          className='flex gap-2 items-center text-[13px]'>
            <AiOutlineRise 
             className='size-6'/>
            80% would make this again
          </div>
          <h2 
          className='text-[32px] md:text-[42px] tracking-tight font-bold lg:w-60 leading-tight py-2'>
            Mighty Super Cheesecake</h2>
          <p className='lg:w-60 text-normal md:text-[18px]'>Dive into a slice of creamy, dreamy American cheesecake bliss, with its tangy richness and buttery graham cracker crust.</p>
        </div>
      </div>
      <div
      className='pt-16 text-[32px] font-semibold'>
        <h2 
        className=' pb-3 w-[99%] tracking-tight'>
          Super Delicious</h2>
          <div 
          className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            <Populars />
            <Populars />
            <Populars />
            
          </div>
      </div>
      <div
      className='pt-16 text-[32px] font-semibold'>
        <h2 
        className=' pb-3 w-[99%] tracking-tight'>
          Sweet Tooth</h2>
          <div 
          className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            <Populars />
            <Populars />
            <Populars />
          </div>
      </div>
      <div
      className='py-12 text-[32px] font-semibold'>
        <h2
        className=' pb-3 w-[99%] tracking-tight'>
          Popular Categories</h2>
        <div className='grid grid-cols-3 md:grid-cols-6'>
          <PopularCateg />
          <PopularCateg />
          <PopularCateg />
          <PopularCateg />
          <PopularCateg />
          <PopularCateg />
        </div>
      </div>
    </div>
    </>
  )
}

function Populars(){
  return(
    <>
      <div className='w-full text-[20px] py-4'>
        <Link to='/recipes/cake'>
          <div className='w-full h-[80%] overflow-hidden object-cover rounded-md'>
            <img className='h-full'
            src="src/assets/recipe.jpg" alt="" />
          </div>
        </Link>
        <div 
        className='flex gap-1 text-orange-500 items-center py-2'>
          <FaStar className='size-[12px]' />
          <FaStar className='size-[12px]' />
          <FaStar className='size-[12px]' />
          <FaStar className='size-[12px]' />
          <FaStar className='size-[12px]' />
        </div>
        <Link to='/recipes/cake'>
        This is a delicious recipe</Link>
      </div>
    
    </>
  )
}

function PopularCateg(){
  return(
    <div
    className='flex flex-col justify-center items-center my-5'>
      <Link to='/category/desserts'>
        <div 
        className='size-[100px] lg:size-[140px] bg-gray-200 rounded-full active:border-4 hover:shadow-md border-gray-500 transition-all duration-75'>
        </div>
      </Link>
      <Link to='/category/:categories'
      className='font-semibold text-[14px] lg:text-[18px] py-1'>
        Category
      </Link>
    </div>
  )
}
export default Home