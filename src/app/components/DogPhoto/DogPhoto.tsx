"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";


interface DogPhotoProps {
    selectedBreed: string | null;
  }

export const DogPhoto: React.FC<DogPhotoProps> = ({ selectedBreed }) => {
    const [dogPhoto, setDogPhoto] = useState<string | null>(null);


useEffect(() => {

    const fetchDogPhoto = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/breeds/image'); 
        if(response){
           
            setDogPhoto(response.data.message);
            console.log(dogPhoto)
        }
        console.log(response)
        console.log(dogPhoto)
      
      } catch (error) {
        console.error('Erro ao buscar raças:', error);
      }
    };
    
    fetchDogPhoto();
    }, [selectedBreed]);
  return (
    <div>
   {dogPhoto && <Image src={dogPhoto} alt={`Foto de um ${selectedBreed}`} width={300} height={200} />}
   </div>
  )
}
