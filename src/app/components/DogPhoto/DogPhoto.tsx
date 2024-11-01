"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface DogPhotoProps {
  selectedBreed: string | null;
}

export const DogPhoto: React.FC<DogPhotoProps> = ({ selectedBreed }) => {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null);

  const fetchDogPhoto = async () => {
    if (selectedBreed) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/breeds/image/${selectedBreed}/random`
        );
        if (response.data.message) {
          setDogPhoto(response.data.message);
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem do cão:", error);
      }
    } else {
      console.log("something wrong ", selectedBreed, dogPhoto);
    }
  };

  useEffect(() => {
    fetchDogPhoto();
  }, [selectedBreed]); // Atualiza sempre que selectedBreed mudar

  return (
    <div>
      {selectedBreed ? (
        <div className="border-2 p-4  ">
          <div className="w-[22rem] h-[30rem] relative">
            <div>
              {dogPhoto && (
                <Image
                  src={dogPhoto}
                  alt={`Foto de um ${selectedBreed}`}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain h-full"
                />
              )}
            </div>
          </div>
          <button className="my-2" onClick={fetchDogPhoto}>
            Buscar nova foto
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
