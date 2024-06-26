import React, { useEffect, useState } from 'react'
import { CompanyIncomeStatement } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getIncomeStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

interface Props {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.revenue),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD'}).format(company.costOfRevenue),
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD'}).format(company.depreciationAndAmortization),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD'}).format(company.operatingIncome),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD'}).format(company.netIncome),
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-US', 
    { style: 'percent', maximumFractionDigits: 2}).format(company.netIncomeRatio),
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-IN', 
    { style: 'currency', currency: 'USD', maximumFractionDigits: 2}).format(company.eps),
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-US', 
    { style: 'percent', maximumFractionDigits: 2}).format(company.epsdiluted),
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-US', 
    { style: 'percent', maximumFractionDigits: 2}).format(company.grossProfitRatio),
  },
  {
    label: "Opearting Income Ratio",
    render: (company: CompanyIncomeStatement) => new Intl.NumberFormat('en-US', 
    { style: 'percent', maximumFractionDigits: 2}).format(company.operatingIncomeRatio),
  },

];

const IncomeStatement = (props: Props) => {

  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>()

  useEffect(() => {
    const incomeStatementFetch = async () => {
      const result = await getIncomeStatement(ticker);
      setIncomeStatement(result!.data);
      console.log(result!.data);
    }
    incomeStatementFetch();
  }, []);


  return <>
  {incomeStatement ? (
    <>
      <Table data={incomeStatement} config={configs}/>
    </>
  ) : (
    <>
      <Spinner/>
    </>
  )} 
  </>
  
}

export default IncomeStatement