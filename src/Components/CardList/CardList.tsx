import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList : React.FC<Props>  = ({searchResult,onPortfolioCreate}: Props) : React.JSX.Element => {
  return <>
  {searchResult.length > 0 ? (
    searchResult.map((result) => {
      return <div className='relative flex flex-col items-center justify-center'> 
        <Card id={result.symbol} key={uuidv4()} 
        searchResult={result}
        onPortfolioCreate={onPortfolioCreate}/>
        </div>
    })
  ) : (

    <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
      No results!
    </p>
    
  )}</>;
 
}

export default CardList