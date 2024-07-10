import React from 'react'
import links from './links'
import { Link } from 'react-router-dom'


export default function Muscles() {
  return (
    <div className='h-fit w-full bg-zinc-950 font-Anton '>
      <p className='text-white text-center text-6xl pt-6'>Pick your workout</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-8 gap-10'>
      {links.map((muscle)=> 
        
        <div className='h-48 w-64 bg-cover relative overflow-hidden' style={{ backgroundImage: `url(${muscle.link})` }}>
         
         <div className='absolute bg-black/60 opacity-0 hover:opacity-100 w-full duration-300  h-full flex flex-col items-center justify-center gap-12'>
         <p className='text-white text-center text-4xl'>{muscle.name}</p>
         <Link to={`/${muscle.name}`} className='bg-white text-black p-2 text-2xl ' >Show exercises</Link>
         </div>

      </div>)}
      </div>
    </div>
  )
}
