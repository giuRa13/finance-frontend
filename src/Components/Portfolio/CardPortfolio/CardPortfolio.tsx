import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="flex flex-col w-[20%] p-6 mb-2 space-y-4 text-center 
     rounded-lg shadow-lg md:w-1/3">
      <Link to={`/company/${portfolioValue.symbol}/company-profile`} 
      className="pt-6">
        <h2 className='font-semibold'>{portfolioValue.companyName} ({portfolioValue.symbol})</h2>
        <h3>MarketCap:{portfolioValue.marketCap}</h3>
        <h3>$ {portfolioValue.purchase}</h3>
      </Link>
      <DeletePortfolio 
        onPortfolioDelete={onPortfolioDelete} 
        portfolioValue={portfolioValue.symbol}/>
    </div>
  )
}

export default CardPortfolio