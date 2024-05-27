import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioDelete}>
            <input hidden={true} value={portfolioValue} readOnly={true}/>
            <button className="block w-full py-3 text-black font-bold duration-200 
            border-2 rounded-lg bg-red2 hover:opacity-70">
              X
            </button>
        </form>
    </div>
  )
}

export default DeletePortfolio