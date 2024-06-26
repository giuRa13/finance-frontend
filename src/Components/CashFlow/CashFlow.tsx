import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCashFlow } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

type Props = {}

const configs = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.operatingCashFlow),
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.netCashUsedForInvestingActivites),
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.netCashUsedProvidedByFinancingActivities),
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.cashAtEndOfPeriod),
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.capitalExpenditure),
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.commonStockIssued),
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.freeCashFlow),
    },
  ];

const CashFlow = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();

    useEffect(() => {
      const fetchCashFlow = async () => {
        const result = await getCashFlow(ticker!);
        setCashFlowData(result!.data);
      };
      fetchCashFlow();
    }, []);

  return (
    <>
    {cashFlowData ? (
        <>
            <Table data={cashFlowData} config={configs}/>
        </>
    ) : (
        <>
          <Spinner/>
        </>
    )}
    </>
  )
}

export default CashFlow