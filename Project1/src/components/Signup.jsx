import React from 'react'
import Navbar from '/src/components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { LuLock,LuUser2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";



const Signup = () => {
    const history = useNavigate()
  return (
    <>
    <Navbar />
    <div>
      <div
      className='flex flex-col w-full md:w-[450px] mx-auto my-16 border rounded-sm h-[500px] p-5 shadow-lg text-[14px]'>
        <div 
        className='flex justify-end py-2'>
          <button type='button' onClick={() => {
            history(-1)
          }}>
            <IoClose className='size-6'/>
          </button>
        </div>
        <h3 
        className='text-[28px] font-bold md:mx-7'>
          SIGN UP
        </h3>
        <div 
        className='flex gap-2 border-b-2 my-4 items-center md:w-[350px] mx-auto'>
          <LuUser2
          className='size-6 text-gray-500'/>
          <input 
          className='outline-none rounded-sm w-[250px] md:w-[300px] h-10 px-1 pb-1' 
          type="text"
          name='nameholder'
          placeholder='Name'/><br/>
        </div>
        <div 
        className='flex gap-2 border-b-2 my-4 items-center md:w-[350px] mx-auto'>
          <MdOutlineMail 
          className='size-6 text-gray-500'/>
          <input 
          className='outline-none rounded-sm w-[250px] md:w-[300px] h-10 px-1 pb-1' 
          type="text"
          name='emailholder'
          placeholder='Email'/><br/>
        </div>
        <div 
        className='flex gap-2 items-center border-b-2 my-4 md:w-[350px] mx-auto'>
          <LuLock 
          className='size-6 text-gray-500'/>
          <input 
          className='outline-none rounded-sm w-[250px] md:w-[300px] h-10 px-1 pb-1' 
          type="text"
          name='passholder'
          placeholder='Password'/><br/>
        </div>
        <div className='md:px-8 text=[12px] md:text-[16px]'>
            <p>
                By creating an account, you agree to our
            </p>
            <p className='font-semibold text-orange-600'>Terms & conditions</p>
        </div>
        <button 
        className='w-[120px] py-2 rounded-md bg-orange-600 text-[16px] text-white mx-auto hover:shadow-md hover:bg-orange-700 my-6' 
        type='submit'>
          Sign up</button>
        <div className='flex flex-col justify-center px-8 items-center'>
          <Link to='/login'>
            Already have an account?
            <span className='font-semibold text-orange-600'> Log in</span>
            </Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup