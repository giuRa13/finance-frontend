import React from 'react'

type Props = {
    title: string;
    subTitle: string;
    logo: string;
    symbol: string,
}

const Tile = ({title, subTitle, logo, symbol}: Props) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blue2 uppercase font-bold text-xs">
                            {title}
                        </h5>
                        <div className='flex items-center'>
                            <span className="font-bold text-md justify-start">{subTitle}</span>
                            <span className="font-bold uppercase justify-start">({symbol})</span>
                            <img src={logo} alt='image'
                            className='w-[15%] h-[15%] ml-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tile