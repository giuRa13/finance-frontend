import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

type Props = {}

const config = [
    {
      label: <div className="font-bold">Total Assets</div>,
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.totalAssets),
    },
    {
      label: "Current Assets",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.totalCurrentAssets),
    },
    {
      label: "Total Cash",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.cashAndCashEquivalents),
    },
    {
      label: "Property & equipment",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.propertyPlantEquipmentNet),
    },
    {
      label: "Intangible Assets",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.intangibleAssets),
    },
    {
      label: "Long Term Debt",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.longTermDebt),
    },
    {
      label: "Total Debt",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.otherCurrentLiabilities),
    },
    {
      label: <div className="font-bold">Total Liabilites</div>,
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.totalLiabilities),
    },
    {
      label: "Current Liabilities",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.totalCurrentLiabilities),
    },
    {
      label: "Long-Term Debt",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.longTermDebt),
    },
    {
      label: "Long-Term Income Taxes",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.otherLiabilities),
    },
    {
      label: "Stakeholder's Equity",
      render: (company: CompanyBalanceSheet) => new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.totalStockholdersEquity),
    },
    {
      label: "Retained Earnings",
      render: (company: CompanyBalanceSheet) =>new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD', maximumSignificantDigits: 3 }).format(company.retainedEarnings),
    },
  ];

const BalanceSheet = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        const getData = async () => {
            const value = await getBalanceSheet(ticker!);
            setBalanceSheet(value?.data[0]);
        } 
        getData(); 
    }, []);

  return (
    <>
    {balanceSheet ? (
        <>
             <RatioList config={config} data={balanceSheet} />
        </>
    ) : (
        <>
          <Spinner/>
        </>
    )}
    </>
  )
}

export default BalanceSheet