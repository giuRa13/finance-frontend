import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [
{
  label: "Market Cap",
  render: (company: any) => company.marketCapTTM,
},
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Design Page</h1>
        <h2>this is Wave Finance's Desingn Page</h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  )
}

export default DesignPage