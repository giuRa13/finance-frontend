import React, { SyntheticEvent } from 'react';
import imageSvg from '../../Assets/image.svg';
import waveSvg from '../../Assets/wave.svg';
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
    <div className=' flex flex-col items-center justify-between w-full p-6 mt-2
    bg-lightgrey rounded-lg md:flex-row card hover:opacity-65' key={id} id={id}>
           
            <Link to={`/company/${searchResult.symbol}/company-profile`} className="font-bold text-center md:text-left">
              {searchResult.name} ({searchResult.symbol})
            </Link>
            
            <p className="text-veryDarkBlue">$ {searchResult.currency}</p>
        
        <p className="font-bold text-veryDarkBlue">{searchResult.stockExchange} - {searchResult.exchangeShortName}</p>
        
        <AddPortfolio 
          onPortfolioCreate={onPortfolioCreate} 
          symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card