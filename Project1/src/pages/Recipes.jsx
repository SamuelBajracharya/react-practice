import React from 'react'
import Navbar from '/src/components/Navbar'
import { Link } from 'react-router-dom'

const Recipes = () => {
  return (
    <>
    <Navbar />
    <div className='p-5'>
      <div 
      className='pt-10 text-[50px] font-semibold flex justify-center '>
        <h1 
        className='border-b-[2.5px] pb-5 border-b-neutral-300 w-[99%] tracking-tight'>
        Recipes</h1>
      </div>
      <div>
        <h2 className='text-[26px] text-center md:text-left font-semibold py-10 pt-20'>Hand-Picked Collection</h2>
        <div  
        className='flex flex-col items-center md:flex-row md:overflow-x-scroll scrollbar-hide md:max-h-72 gap-6 mb-10 '>
          <Collection />
          <Collection />
          <Collection />
          <Collection />
          <Collection />
        </div>
      </div>
      <div>
        <h2 className='text-[26px] font-semibold py-10'>Latest Recipes</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6 '>
              <RecipeList />
              <RecipeList />
              <RecipeList />
              <RecipeList />
              <RecipeList />
              <RecipeList />
              <RecipeList />
              <RecipeList />
        </div>
      </div>
      <div className='flex justify-center my-10'>
        <button 
        className='border-[1.5px] border-black rounded-sm p-2 font-medium hover:bg-gray-100 w-[150px]'>
        Load more</button>
      </div>
    </div>
    </>
  )
}


function Collection(){
  return(
    <div className=' w-[350px] md:min-w-[350px] h-72 rounded-md inline-block cursor-pointer'>
      <div className='h-[70%] overflow-hidden object-cover rounded-md'>
        <img src="src/assets/special.jpeg" alt="" />
      </div>
      <div className='flex justify-between text-[18px] items-center p-2 my-3 font-semibold'>
        <Link to='/recipes/cake'>This is a hand-picked recipe</Link>
        <Link to='/recipes/cake'
        className='border-2 border-black rounded-sm text-[12px] p-1 font-normal hover:bg-gray-100'>
        View Recipe</Link>
      </div>
    </div>
  )
}

function RecipeList(){
  return(
    <>
      <div
      className='flex flex-col h-[220px] rounded-lg mb-10 cursor-pointer'>
        <Link 
        to='/recipes/cake'
        className='h-[73%] bg-yellow-200 overflow-hidden rounded-lg hover:shadow-md'>
        </Link>
        <Link  to='/recipes/cake'
        className='font-semibold text-[18px] py-2'>
        This is a delicious recipe did you know</Link>
      </div>
  </>
  )
}

export default Recipes