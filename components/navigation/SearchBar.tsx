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
        className="rounded-[23px] py-3 px-6 w-[305px] sm:w-[465px] bg-white"
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
