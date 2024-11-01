"use client"; // Adicione esta linha

import React, { useState } from 'react';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export const DogBreed = () => {
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

    const handleFetchDogPhoto = (breed: string) => {
      setSelectedBreed(breed);
      console.log(breed)
    };
    
    return (
        <div>
            <div className='flex flex-col gap-20 justify-center md:flex md:flex-col md:gap-8 lg:flex lg:flex-row  m-10'>
                <LeftSide  selectedBreed={selectedBreed} onFetchDogPhoto={handleFetchDogPhoto} />
                <RightSide selectedBreed={selectedBreed} />
            </div>
        </div>
    );
};
