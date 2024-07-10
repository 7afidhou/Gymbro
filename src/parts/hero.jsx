import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <div className='picture h-screen w-full bg-no-repeat font-Anton '>
      <div className='h-full w- bg-gray-600/50'>
        <nav className='flex justify-between items-center px-6  md:px-12'>
          <a className=' text-2xl md:text-4xl p-4 cursor-pointer'>GymBro</a>
          <div className='flex text-xl md:text-3xl gap-4 md:gap-12 text-white'>
            <Link>getting started</Link>
            <Link>about</Link>
          </div>
        </nav>
      <div className='flex '>
      <p className='text-6xl md:text-9xl text-white py-16 flex flex-col gap-20 pl-12'><p className='text-black'>Power</p> Headquarters</p>

      </div>
      </div>
      
      
    </div>
  )
}
