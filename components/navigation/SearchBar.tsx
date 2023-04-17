import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Loupe from '../assets/svg/Loupe';

const SearchBar = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    router.push(`/search/${inputValue}`);
  };
  return (
    // <div>SearchBar</div>
    <div className="relative">
      <input
        className="rounded-[23px] pt-[15px] pb-[14px] px-6 w-[305px] sm:w-[465px] bg-white font-normal text-[13px] leading-[15.23px] text-app-gray border border-app-gray"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-success absolute right-[21px] top-[14px]"
        onClick={handleClick}
      >
        <Loupe />
      </button>
    </div>
  );
};

export default SearchBar;
