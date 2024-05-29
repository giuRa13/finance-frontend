import React, { ChangeEvent, useState, SyntheticEvent} from 'react';
import searchSvg from '../../Assets/search.svg';

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props) : React.JSX.Element => {

  return (
    <>
    <section className="relative">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full items-center md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 border-green rounded-lg placeholder-black 
            bg-lightgrey focus:outline-none"
            id="search-input"
            placeholder='Search...'
            value={search}
            onChange={handleSearchChange}
          ></input>
          <img src={searchSvg} alt='search' className=' justify-center absolute right-3' />
        </form>
      </div>
    </section>
    </>
  )
}

export default Search 