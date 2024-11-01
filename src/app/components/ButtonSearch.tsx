import React from 'react'

interface ButtonSearchProps {
    handleFetchDogPhoto: () => void; // Define o tipo da função
  }

export const ButtonSearch : React.FC<ButtonSearchProps> =  ({ handleFetchDogPhoto }) => {
  return (
    <div>
        <a
         onClick={handleFetchDogPhoto}
  className="group relative inline-block text-sm font-medium text-[#EC9D59] focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  <span
    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#EC9D59] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span className="relative block border border-current bg-[#a0501b] px-10 py-3"> Search </span>
</a>
    </div>
  )
}
