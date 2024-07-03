import React from 'react'
import { LuFacebook,LuInstagram, LuYoutube } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div 
    className=' bg-neutral-100 lg:h-[400px] pt-16 '>
        <div
            className='w-[100vw] md:w-[80%] mx-auto px-5 py-10 flex flex-col lg:flex-row gap-20 text-[13px]  text-neutral-500'>
            <div 
            className='lg:w-[50%]'>
                <img className='w-28'
                src="/src/assets/logo.png" alt="logo" />
                <p
                className='w-full lg:w-[300px] text-[15px] py-5'
                >"Homecooked meals: where health meets happiness! Get fresh, eat right, and enjoy the tasty benefits of cooking at home. Choose homemade, feel great!"</p>
            </div>
            <div className='flex gap-16 md:gap-28'>
                <div className='flex flex-col space-y-2'>
                    <p className='text-black font-medium'>
                    Tastebite</p>
                    <p>About Us</p>
                    <p>Catagory</p>
                    <p>Contact</p>
                    <p>Feedback</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-black font-medium'>Legal</p>
                    <p>Terms</p>
                    <p>Conditions</p>
                    <p>Cookies</p>
                    <p>Copyright</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-black font-medium'>Follow</p>
                    <p>Facebook</p>
                    <p>X</p>
                    <p>Instagram</p>
                    <p>YouTube</p>
                </div>
            </div>
        </div>
        <hr className='w-[78%] mx-auto border-b'/>
        <div className='flex flex-row justify-between md:w-[80%] mx-auto px-5 py-5'>
            <p
            className=' text-[12px] text-neutral-500'>
            2024 Tastebite - All rights reserved</p>
            <div className='flex flex-row gap-5 text-neutral-500'>
                <button 
                className='size-8 rounded-full hover:shadow-md'>
                <a href='https://www.facebook.com/samuel.bajracharya.55/'>
                <LuFacebook className='ml-2' />
                </a></button>
                <button
                className='size-8 rounded-full hover:shadow-md'
                ><a href=''>
                <RiTwitterXFill className='ml-2' />    
                </a></button>
                <button
                className= 'size-8 rounded-full hover:shadow-md'>
                <a href='https://www.instagram.com/smuff_inoue/'>
                <LuInstagram className='ml-2' />
                </a></button>
                <button
                className='size-8 rounded-full hover:shadow-md'>
                <a href='https://www.youtube.com/channel/UCeio6aqi5EFADJQMlEcGG4g'>
                <LuYoutube className='size-5 ml-2' />
                </a></button>
            </div>
        </div>
    </div>
  )
}

export default Footer