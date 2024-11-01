import React from "react";
import { DogPhoto } from "../components/DogPhoto/DogPhoto";

interface RightSideProps {
  selectedBreed: string | null;
   // Define o tipo da prop
}
export const RightSide: React.FC<RightSideProps> = ({ selectedBreed }) => {
  return (
    <div className="flex items-end mb-12 lg:mb-0 lg:ml-auto lg:mr-20 px-4">
      <DogPhoto selectedBreed={selectedBreed} />
    </div>
  );
};
