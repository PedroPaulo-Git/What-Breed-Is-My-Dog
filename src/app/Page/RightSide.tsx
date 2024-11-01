import React from 'react'
import { DogPhoto } from '../components/DogPhoto/DogPhoto'

interface RightSideProps {
    selectedBreed: string | null; // Define o tipo da prop
  }
export const RightSide: React.FC<RightSideProps> = ({ selectedBreed })=> {
  return (
    <div>
        <DogPhoto selectedBreed={selectedBreed}/>
    </div>
  )
}
