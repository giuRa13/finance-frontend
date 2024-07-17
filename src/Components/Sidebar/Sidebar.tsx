import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

interface Props {}

const Sidebar = (props: Props) => {
  return (//z-9999
    <nav className="sidebar block py-4 px-6 top-0 bottom-40 w-64  bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999">

    <div className="flex-col md-flex-row  px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden resp">

      <div className="sidebar2 flex  flex-col  opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">

        <div className="md:flex-col md:min-w-full flex flex-col list-none mt-6 sidebar2">    
          
          <Link to="company-profile" 
          className="flex items-center md:min-w-full text-blue2 text-sm uppercase font-bold block pt-1 pb-4 no-underline 
           hover:text-green focus:text-green selection:text-green active:text-green">
            <FaHome className='text-md'/>
            <h6 className='ml-3'>Company Profile</h6>
          </Link>
          <Link to="income-statement" 
          className="flex mt-4 items-center md:min-w-full text-blue2 text-sm uppercase font-bold block pt-1 pb-4 no-underline
          hover:text-green focus:text-green selection:text-green active:text-green">
            <GiCash className='text-md'/>
            <h6 className='ml-3'>Income Statement</h6>
          </Link>
          <Link to="balance-sheet" 
          className="flex mt-4 items-center md:min-w-full text-blue2 text-sm uppercase font-bold block pt-1 pb-4 no-underline
          hover:text-green focus:text-green selection:text-green active:text-green">
            <FaScaleBalanced className='text-md'/>
            <h6 className='ml-3'>Balance Sheet</h6>
          </Link>
          
          <Link to="cashflow-statement" 
          className="flex mt-4 items-center md:min-w-full text-blue2 text-sm uppercase font-bold block pt-1 pb-4 no-underline
          hover:text-green focus:text-green selection:text-green active:text-green">
            <FaArrowRightArrowLeft className='text-md'/>
            <h6 className='ml-3'>Cashflow Statement</h6>
          </Link>
          <Link to="historical-dividend" 
          className="flex mt-4 items-center md:min-w-full text-blue2 text-sm uppercase font-bold block pt-1 pb-4 no-underline
          hover:text-green focus:text-green selection:text-green active:text-green">
            <FaChartLine className='text-md'/>
            <h6 className='ml-3'>Historical Dividend</h6>
          </Link>
          </div>
            
      </div>

    </div>
  </nav>
  )
}

export default Sidebar