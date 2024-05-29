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
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
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