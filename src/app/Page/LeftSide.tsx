import React from 'react'
import { Header } from '../components/Header'

export const LeftSide = () => {
  return (
    <div>
      <Header/>
        <div className='flex flex-col gap-10'>
            <span className='flex items-center'>
            <span className='h-1  bg-gray-500 w-10 left pr-16'></span>
            <p className=''>What Breed Is Your Dog?</p>
            </span>
            <h1 className='text-6xl font-semibold'>
            Discover Your Dog's Breed!
            </h1>
        </div>
    </div>
  )
}
