import React, { SyntheticEvent } from 'react';
import imageSvg from '../../Assets/image.svg';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : React.JSX.Element => {
  return (
    <div className='card'>
        <img src={imageSvg} alt='company logo'/>
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>$ {searchResult.currency}</p>
        </div>
        <p className='info'>{searchResult.stockExchange} - {searchResult.exchangeShortName}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card