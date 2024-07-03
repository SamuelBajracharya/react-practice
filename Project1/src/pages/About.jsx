import React from 'react'
import Navbar from '/src/components/Navbar'
import { MdOutlineMail,MdMessage } from "react-icons/md";
import { LuLock } from "react-icons/lu";


const About = () => {
  return (
    <>
    <Navbar />
    <div className='p-5'>
      <div 
      className='pt-10 text-[36px] font-semibold flex justify-center '>
        <h1 
        className='border-b-[2.5px] pb-5 border-b-neutral-300 w-[99%] tracking-tight'>
          About</h1>
      </div>
      <div 
      className='py-10 flex flex-col items-center'>
        <h2
        className='text-[35px] md:text-6xl font-semibold tracking-tight py-2 leading-[1]'>
          We're food lovers who believe that home cooked food is the best
        </h2>
        <div
        className='flex flex-col items-center text-[18px] md:text-[22px] px-5'>
          <img 
          className='my-10 w-full max-w-[1080px] md:h-[350px] object-cover overflow-hidden'
          src="/src/assets/homemade.png" alt='about page'/>
          <p>The aroma of freshly baked sourdough bread fills the air, its golden crust crackling as it cools, inviting you to slice through its chewy interior. A crisp, tangy apple and walnut salad with a light honey mustard dressing offers a refreshing contrast. For dessert, a warm apple pie with a flaky, golden-brown crust and cinnamon-spiced apple slices tempts with its sweet aroma.</p>
        </div>
        <div className=' flex flex-col-reverse lg:flex-row py-10 lg:py-32 justify-between gap-10'>
          <div className='lg:w-[45%] items-center text-[18px] md:text-[22px]'>
            <h2 className='text-[35px] md:text-6xl font-semibold tracking-tight pb-5'>
              Simple, Easy Recipes for All
            </h2>
            <p>We believe everyone can whip up something delicious with just a sprinkle of guidance and a spoonful of fun. Whether you’re a kitchen newbie or a seasoned pro, we’re here to make sure your culinary adventures are stress-free and tasty. So, grab your apron, turn up the music, and let’s create some mouthwatering magic together!</p>
          </div>
          <div className='w-[90vw] lg:w-[55%] lg:h-[410px] overflow-hidden'>
            <img
            src='/src/assets/easyrecipe.jpg' alt='easy recipes'/>
          </div>
        </div>
      </div>

      <div>
        <h2 
        className='text-[36px] font-semibold border-b-[2.5px] pb-5 border-b-neutral-300 w-[99%] tracking-tight'>
        Contact Us</h2>
        <div>
          <form className='flex flex-col md:w-[450px] mx-auto my-16 border rounded-sm px-2 py-5 shadow-lg items-center'>
            <div 
            className='flex gap-2 items-center border-b-2 my-4 w-[350px] mx-auto'>
              <LuLock 
              className='size-6 text-gray-500'/>
              <input 
              className='outline-none rounded-sm w-[300px] h-10 px-1 pb-1' 
              type="text"
              name='nameholder'
              placeholder='Name'/><br/>
            </div>
            <div 
            className='flex gap-2 border-b-2 my-4 items-center w-[350px] mx-auto'>
              <MdOutlineMail 
              className='size-6 text-gray-500'/>
              <input 
              className='outline-none rounded-sm w-[300px] h-10 px-1 pb-1' 
              type="text"
              name='emailholder'
              placeholder='Email'/><br/>
            </div>
            <div 
            className='flex gap-2 border-b-2 my-4 w-[350px] mx-auto'>
            <MdMessage className='my-1 size-7 text-gray-500'/>
            <textarea className='outline-none rounded-sm w-[390px] h-28 resize-none p-1 mb-5'
            name='message'
            placeholder='Enter message'></textarea>
            </div>
            <button className='w-24 h-9 rounded-md bg-orange-600 text-white mx-auto hover:shadow-md hover:bg-orange-700 my-5' 
            type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default About