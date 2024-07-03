import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)
  const [profiler, setProfiler] = useState(false)
  const [login, setLogin] = useState(true)
  return (
    <>
    <div 
    className='relative flex justify-between m-2 py-4 px-2 items-center'>
      <div 
      className='flex items-center w-36 cursor-pointer'>
        <Link to="/"><img src='/src/assets/logo.png'/></Link>
      </div>
      <nav className= "hidden sm:flex gap-11 items-center">
        <Link to="/" 
        className='p-2 hover:font-medium'>Home</Link>
        <Link to="/recipes" 
        className='p-2 hover:font-medium'>Recipes</Link>
        <Link to="/category" 
        className='p-2 hover:font-medium'>Category</Link>
        <Link to="/about" 
        className='p-2 hover:font-medium'>About</Link>
      </nav>
      <div className='flex gap-5'>
        <button className='size-8 rounded-full text-center hover:shadow-md'>
        <HiOutlineMagnifyingGlass className='size-7 pl-1'/>
        </button>
        <button onClick={()=>{
          setProfiler(!profiler)
        }}
        className={login ? 'block size-8 bg-slate-400 rounded-full hover:shadow-md' : 'hidden'}>
          P
        </button>
        <button
        className={login ? 'hidden' : 'block border-2 border-black px-2 rounded-md text-[14px] hover:bg-gray-100'}>
          <Link to='/login'>
          Log in</Link>
        </button>
        <button 
        onClick={() =>{
          setHamburger(!hamburger)
        }}
        className='size-8 rounded-full sm:hidden hover:shadow-md'>
        <RxHamburgerMenu className={hamburger ? "hidden" : "block size-7 pl-1" } />
        <IoClose className={hamburger ? "block size-7 pl-1" : "hidden"} />
        </button>
      </div>
    </div>
      <div 
      className={ hamburger ? " z-40 absolute top-28 bg-white shadow-md rounded-lg md:hidden" : "hidden"}>
        <nav className= "flex flex-col gap-4 items-start w-[100vw]">
          <Link to="/" 
          className='p-2 pl-30 hover:font-medium hover:border-b-2'>Home</Link>
          <Link to="/recipes" 
          className='p-2 hover:font-medium hover:border-b-2'>Recipes</Link>
          <Link to="/category" 
          className='p-2 hover:font-medium hover:border-b-2'>Category</Link>
          <Link to="/about" 
          className='p-2 hover:font-medium hover:border-b-2'>About</Link>
        </nav>
      </div>
      <div 
      className={ profiler ? " z-50 absolute top-20 right-12 sm:right-20 bg-white shadow-md rounded-lg md:hidden" : "hidden"}>
        <div  className= "flex flex-col gap-4 items-start px-5">
          <Link to='/profiles/:user'>Profile</Link>
          <Link to='/favourites'>Favourites</Link>
          <button>Log out</button>
        </div>
      </div>
    </>
    
  )
}

export default Navbar