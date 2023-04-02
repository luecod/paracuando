import React from 'react';
import Loupe from '../assets/svg/Loupe';

const SearchBar = () => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    // <div>SearchBar</div>
    <form onSubmit={submit} className="relative">
      <input
        className="rounded-[23px] pt-[15px] pb-[14px] px-6 w-[305px] sm:w-[465px] bg-white font-normal text-[13px] leading-[15.23px] text-app-gray border border-app-gray"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <button className="btn btn-success absolute right-[21px] top-[14px]">
        <Loupe />
      </button>
    </form>
  );
};

export default SearchBar;
