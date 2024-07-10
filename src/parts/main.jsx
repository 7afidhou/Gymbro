import React from 'react'
import Muscles from './muscles'
import Hero from './hero'
export default function Main() {
  return (
    <div className='flex flex-col'>
    <Hero />
    < Muscles />
    <div className='h-10 bg-zinc-950'></div>
    </div>
  )
}
