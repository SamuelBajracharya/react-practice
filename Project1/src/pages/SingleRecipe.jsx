import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '/src/components/Navbar'
import { AiOutlineRise } from "react-icons/ai";
import { LuBookmark, LuUpload, LuMessageSquare, LuPrinter, LuHeart, LuDot } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaStar, FaRegStar, FaStarHalfAlt,FaRegCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const SingleRecipe = () => {
    const recipeName = useParams();
  return (
    <>
        <Navbar />
        <div className='p-5'>
          <div className='flex justify-between py-1'>
            <div 
            className='flex gap-2 items-center text-[13px]'>
              <AiOutlineRise  className='size-6'
              />80% would make this again
            </div>
            <div 
            className='flex gap-8 items-center'>
              <LuUpload className='size-7'/>
              <LuBookmark className='size-7'/>
            </div>
          </div>
            <h1 className='text-[50px] capitalize font-bold py-2'>
            {recipeName.recipe}</h1>
            <div className='flex gap-7 text-[12px] py-3 pb-7 border-b-2'>
              <Link>Albert Einstein</Link>
              <div className='flex gap-2 items-center'>
                <MdOutlineCalendarToday 
                className='size-[15px]'/>
                Yesterday
              </div>
              <div className='flex gap-2 items-center'>
                <LuMessageSquare 
                className='size-[15px]' />
                20</div>
              <div 
              className='flex gap-1 text-orange-500 items-center'>
                <FaStar className='size-[15px]' />
                <FaStar className='size-[15px]' />
                <FaStar className='size-[15px]' />
                <FaStarHalfAlt className='size-[15px]' />
                <FaRegStar className='size-[15px]' />
              </div>
            </div>
            <div>
              <p className='lg:w-[70%] py-5'>
              Whip up a fluffy cloud of joy with this homemade cake recipe—it's so delicious, your taste buds will dance. Perfect for celebrations or just because, this cake is a slice of heaven in every bite!
              </p>
              <div
              className=' w-full lg:h-[500px] rounded-xl overflow-hidden object-cover my-3'>
                <img 
                src="/src/assets/recipe.jpg" 
                alt="recipe" />
              </div>
                <div className='flex gap-2 items-center uppercase py-5 text-[11px] text-gray-700'>
                <div 
                className=' w-[80px] border-r border-gray-700 py-[6px]'>
                  <p>Prep Time</p>
                  <p className='text-black font-medium text-[13px]'
                  >15 min</p>
                </div>
                <div 
                className=' w-[100px] border-r border-gray-700 p-[6px]'>
                  <p>Servings</p>
                  <p className='text-black font-medium text-[13px]'
                  >4 people</p>
                </div>
                <LuPrinter className='size-4 mx-5 text-black'/>
              </div>
            </div>
            <div 
            className='flex flex-col lg:flex-row gap-10'>
              <div className='lg:w-[40%] py-3'>
                <h3 className='text-[28px] font-bold'>
                  Ingredients
                </h3>
                <div>
                  <IngredientList />
                  <IngredientList />
                  <IngredientList />
                  <IngredientList />
                </div>
                <div className='md:w-[300px] bg-neutral-100 rounded-md p-1 py-10 md:my-10'>
                  <h3 className='text-[28px] font-bold'>
                    Nutrition Facts
                  </h3>
                  <div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Calories</p>
                      <p>219.9</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Total Fat</p>
                      <p>10.7 g</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Saturated Fat</p>
                      <p>2.2 g</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Cholesterol</p>
                      <p>37.4 mg</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Sodium</p>
                      <p>120.3 mg</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Potassium</p>
                      <p>32.8 mg</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Total Carbohydrate</p>
                      <p>22.3 g</p>
                    </div>
                    <div className='flex justify-between py-1 border-b border-gray-300 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Sugar</p>
                      <p>8.4 g</p>
                    </div>
                    <div className='flex justify-between py-1 mx-1 text-[15px]'>
                      <p className='text-gray-600'>Protein</p>
                      <p>7.9 g</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-[60%] py-3'> 
                <h3 className='text-[28px] font-bold'>
                  Instructions
                </h3>
                <div>
                  <InstructionList />
                  <InstructionList />
                  <InstructionList />
                  <InstructionList />
                  <InstructionList />
                  <InstructionList />
                  <InstructionList />
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row text-[14px] justify-between md:items-center py-6'>
                <h3 className='text-[28px] font-bold '>
                  Write a comment
                </h3>
                <span>
                  <Link
                  className='text-orange-500 underline' 
                  to='/login'>
                    Login</Link> to post a comment
                </span>
              </div>
              <div 
              className='display flex flex-col md:flex-row bg-neutral-100 rounded-lg justify-between items-end'>
                  <textarea placeholder='write something here...'
                  className='w-full bg-inherit md:w-[70%] resize-none h-[130px] md:h-[250px] outline-none p-8 overflow-y-scroll scrollbar-hide'></textarea>
                <button 
                className='w-[180px] p-[10px] bg-orange-500 rounded-md m-8 text-white'>
                  Post comment</button>
              </div>
            </div>
            <div className='my-4 md:my-10'>
              <h3 className='text-[40px] md:text-[60px] font-bold border-b border-gray-300 py-4'>
                Comments
              </h3>
              <div>
                <Comments />
                <Reply />
                <Reply />
              </div>
              <div className='flex items-center my-10'>
              <button className=' bg-transparent border-2 border-black py-2 w-60 mx-auto rounded-sm hover:bg-gray-100'>
                Load 25 more comments
              </button>
              </div>
            </div>
        </div>
    </>
  )
}

function IngredientList(){
  return (
    <div className='flex items-center pt-7 text-[18px] gap-3'>
      <FaRegCircle className='size-8' />
      <p>This is a ingredient for a cake, a very delicious cake</p>
    </div>
  )
}
function InstructionList(){
  return (
    <div className='flex items-center pt-7 text-[14px] md:text-[18px] gap-3'>
      <div>
      <p className='size-5 md:size-7 bg-orange-500 rounded-full text-center'>1</p>
      </div>
      <p>This is a instruction for a cake, make sure to follow all the steps to make the best cake ever. It is okay to experiment with the recipe a little but that is completely on you and can't blame the recipe.</p>
    </div>
  )
}

function Comments(){
  return (
    <div className='flex gap-4 py-4 border-b border-gray-200'>
      <div className='size-10 rounded-full overflow-hidden border border-gray-500 object-cover'>
        <img src="/src/assets/profile.jpeg" alt="profile" />
      </div>
      <div className='p-2 '>
        <Link to='/'
        className='font-semibold'>
          Profile Name</Link>
        <p className='text-[13px] text-gray-500 py-1'>45min ago</p>
        <p className='text-[18px] py-2'>
          This is a comment about how good the recipe was and how tasty the food had been.</p>
        <div className='flex gap-5 text-[12px] text-gray-600 items-center'>
          <p>
            <LuMessageSquare className='inline'/> Reply (2)
          </p>
          <p>
            <LuHeart className='inline'/> 48
          </p>
          <p>
            <BsThreeDots className='inline' /> More
          </p>
        </div>
      </div>
    </div>
  )
}
function Reply(){
  return(
    <div className='ml-16'>
      <Comments />
    </div>
  )
}

export default SingleRecipe