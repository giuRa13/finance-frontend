import React, { SyntheticEvent } from 'react';
import plusSvg from '../../../Assets/plus.svg'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <form className='flex flex-row items-center text-gray-100 font-semibold bg-blue2 p-2 rounded-md hover:opacity-70 ' 
    onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol}/>
        <img src={plusSvg} alt='plus'/>
        <button className='color-blue ml-2' type='submit'>Add</button>
    </form>
  )
}

export default AddPortfolio