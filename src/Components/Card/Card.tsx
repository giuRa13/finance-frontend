import React, { SyntheticEvent } from 'react';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : React.JSX.Element => {
  return (
    <>
  <div className=' flex flex-row  justify-between w-[40%]  p-12 mt-2
    bg-lightgrey rounded-lg md:flex-row hover:bg-gray-100' key={id} id={id}>
    <div className='ml-20'>
      <Link to={`/company/${searchResult.symbol}/company-profile`} className="flex flex-col text-center md:text-left
      cursor-pointer">
           <h3 className='flex flex-row justify-between font-bold'>
              <p>{searchResult.name}</p>                 
              <p>({searchResult.symbol})</p>
           </h3>

            <h2 className='flex  mt-2'>
              Currency: {searchResult.currency}
            </h2>
            <h3 className='flex flex-row justify-between mt-2 font-bold'>
              <p>{searchResult.stockExchange}</p> - 
              <p>{searchResult.exchangeShortName}</p>
            </h3>         
            </Link>   
      </div>
      <div className='items-center my-auto mr-20'>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
      </div>
    </div>
    </>
    
  )
}

export default Card