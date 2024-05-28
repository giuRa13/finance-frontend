import React from 'react';
import {testIncomeStatementData} from "./testData";
import { render } from '@testing-library/react';

const data = testIncomeStatementData;

type Props = {}

type Company = (typeof data)[0];

const configs = [
    {
        label: "Year",
        render: (company: Company) => company.acceptedDate
    },
    {
        label: "Cost of Revenue",
        render: (company: Company) => company.costOfRevenue
    },
]

const Table = (props: Props) => {
    const renderRows = data.map((company) => {
        return (
            <tr key={company.cik}>
                {configs.map((val:any) => {
                    return (
                        <td className='p-4 whitespace-nowrap text-sm text-gray-100
                        font-normal'>
                            {val.render(company)}
                        </td>
                    );
            })}
                <td className='p-4 whitespace-nowrap text-sm text-gray-100
                font-normal'>                  
                </td>
            </tr>
        );
    });

const renderHeader = configs.map((configs:any)=> {
    return (
        <th key={configs.label}
        className='p-4 text-left text-xs font-medium text-blue2 uppercase tracking-wider'
        >
            {configs.label}
        </th>
    )
})



  return (
    <div className='shadow rounded-lg p-4 sm:p-6 xl:p-8'>
        <table className='min-w-full divide-y divide=blue2 m-5'>
            <thead className="bg-gray-50 w-full">
                {renderHeader}
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    </div>
  )
}


export default Table