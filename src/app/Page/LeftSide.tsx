import React from 'react';
import { Header } from '../components/Header'
import { SelectBreeds } from '../components/SelectBreeds/SelectBreeds';
interface LeftSideProps {
    selectedBreed: string | null; // Define o tipo da prop
    onFetchDogPhoto: (breed: string) => void; // Adicione esta linha
}
export const LeftSide: React.FC<LeftSideProps> = ({ onFetchDogPhoto }) => {

  return (
    <div className='mx-8 sm:mx-12 '>
      <Header/>
        <div className='flex flex-col gap-8 lg:mt-20 mt-12'>
            <span className='flex items-center text-gray-500'>
            <span className='h-[0.1rem]  bg-gray-400 w-10 left pr-12 mr-5'></span>
            <p className=''>What Breed Is Your Dog?</p>
            
            </span>
            <h1 className='text-5xl max-w-[30rem] lg:text-7xl font-semibold lg:max-w-[50rem]'>
            Discover Your Dog's Breed!
            </h1>
            <p className='max-w-[30rem] text-gray-500 lg:max-w-[40rem]'>Explore a Diverse Collection of Beautiful Photos Featuring the Breed You Think Most Accurately Represents Your Dog’s Unique Look and Personality!</p>
            
            <div className='flex flex-col gap-8 mt-8' >
            <SelectBreeds onFetchDogPhoto={onFetchDogPhoto}  />
            
            </div>

        </div>
    </div>
  )
}
