import React from 'react'
import Navbar from '/src/components/Navbar'

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className='w-[700px] mx-auto my-20'>
      <h1 className=' font-semibold text-center text-zinc-400 text-9xl'>404 Not Found</h1>
    </div>
    </>
  )
}

export default NotFound