"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonSearch } from '../ButtonSearch'
interface SelectBreedsProps {
    onFetchDogPhoto: (breed: string) => void;
  }

export const SelectBreeds: React.FC<SelectBreedsProps> =  ({onFetchDogPhoto }) => {
 
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  useEffect(() => {

    const fetchBreeds = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/breeds");
        if (response) {
          const breedsArray = Object.keys(response.data.message);
          setBreeds(breedsArray);
          console.log(breedsArray);
        }
        console.log(response.data);
        console.log(breeds);
      } catch (error) {
        console.error("Erro ao buscar raças:", error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(event.target.value); // Atualiza a raça selecionada
  };

  const handleSearchClick = () => {
    onFetchDogPhoto(selectedBreed); // Chama a função para buscar a foto da raça selecionada
  };
  return (
    <div>
      <label htmlFor="breed-select">Choose Breed :</label>
      <select
        id="breed-select"
        className="text-[#a0501b]"
        value={selectedBreed}
        onChange={handleSelectChange}
      >
        {/* <option value="">--Por favor, escolha uma opção--</option> */}
        {breeds.map((breed, index) => (
          <option className="text-[#a0501b]" key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      {selectedBreed && <p>Você selecionou: {selectedBreed}</p>}
      <ButtonSearch handleFetchDogPhoto={handleSearchClick} /> 
    </div>
  );
};
