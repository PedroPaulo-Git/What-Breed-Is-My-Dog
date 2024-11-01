import React from 'react'
import { Header } from '../components/Header'
import { ButtonSearch } from '../components/ButtonSearch'

export const LeftSide = () => {
  return (
    <div className='ml-60'>
      <Header/>
        <div className='flex flex-col gap-8 mt-20 '>
            <span className='flex items-center text-gray-500'>
            <span className='h-[0.1rem]  bg-gray-400 w-10 left pr-12 mr-5'></span>
            <p className=''>What Breed Is Your Dog?</p>
            </span>
            <h1 className='lg:text-7xl font-semibold lg:max-w-[50rem]'>
            Discover Your Dog's Breed!
            </h1>
            <p className='text-gray-500 lg:max-w-[40rem]'>Explore a Diverse Collection of Beautiful Photos Featuring the Breed You Think Most Accurately Represents Your Dog’s Unique Look and Personality!</p>
            <ButtonSearch/>
        </div>
    </div>
  )
}
