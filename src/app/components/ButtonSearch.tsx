import React from "react";

interface ButtonSearchProps {
    handleFetchDogPhoto: () => void; // Define o tipo da função
  }
  
  export const ButtonSearch: React.FC<ButtonSearchProps> = ({
    handleFetchDogPhoto,
  }) => {
    return (
      <div>
        <a
          onClick={handleFetchDogPhoto}
        className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-white"
       
      >
        <span className="absolute rounded-lg inset-0 translate-x-0.5 translate-y-0.5 bg-[#EC9D59] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <span className="relative rounded-lg block border border-current bg-[#A0501B] px-10 py-3">
          {" "}
          Search{" "}
        </span>
      </a>
    </div>
  );
};
