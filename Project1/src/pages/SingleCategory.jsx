import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '/src/components/Navbar'
import { Link } from 'react-router-dom'


const SingleCategory = () => {
    const categorySelect = useParams();
  return (
    <>
    <Navbar />
    <div className='p-5'>
        <div className='absolute left-0'>
            <img src="/src/assets/banner.jpeg" alt="banner" 
            className='w-[100vw] object-cover h-[160px] md:h-[245px]' />
        </div>
        <div className='h-[160px] md:h-[245px]'>
        </div>
        <div>
            <div
            className='pt-20 text-[38px] font-semibold flex items-center gap-4'>
                <h1 
                className='pb-2 tracking-tight capitalize '>
                {categorySelect.categories}</h1>
                <span
                className='text-[16px] font-normal text-gray-800'>(93 Recipes)</span>
            </div>
            <p className='md:w-[60%]'>
            Dessert recipes are sweet treasures, transforming simple ingredients into delights like velvety cheesecakes and fudgy brownies. Each recipe is a step-by-step adventure in creating pure bliss!
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-6 py-16'>
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
            <CategoryRecipe />
        </div>
    </div>
    </>
  )
}

function CategoryRecipe(){
    return(
        <>
            <div
            className='flex flex-col h-[220px] rounded-lg mb-10'>
                <Link 
                to='/recipes/cake'
                className='h-[73%] bg-pink-200 overflow-hidden rounded-lg hover:shadow-md'>
                </Link>
                <Link  to='/recipes/cake'
                className='font-semibold text-[18px] py-2'>
                This is a delicious recipe did you know</Link>
            </div>
        </>
    )
}

export default SingleCategory