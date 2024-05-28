import React from 'react';
import {TestDataCompany} from "../Table/testData";

type Props = {}

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
    {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "This is the Company name"
    },
    {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "This is the Company name"
    },
    /*{
        label: "DCF",
        render: (company: Company) => company.dcf,
    },
    { 
        label: "Beta", 
        render: (company: Company) => company.beta 
    },*/
]

const RatioList = (props: Props) => {
    const renderCells = config.map((row) => {
        return (
            <li className='p-3 sm:py-4'>
                <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium  text-blue2 truncate'>
                            {row.label}                          
                        </p>
                        <p className='text-sm text.gray-100 truncate'>
                            {row.subTitle && row.subTitle} 
                        </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-blue2'>
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <ul className="divide-y divide-blue2">{renderCells}</ul>
    </div>
  )
}

export default RatioList