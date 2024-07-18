import React, { useEffect, useState } from 'react'
import {  CompanyProfileData } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';
import LiveChart from '../Chart/LiveChart';
import { Link } from 'react-router-dom';
import StockComment from '../StockComment/StockComment';

interface Props {}

/*const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
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
    subTitle:
    "Return on assets is the measure of how effective a company is using its assets",
},
{
  label: "Book Value Per Share TTM",
  render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM,
  subTitle:
    "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
},
{
  label: "Divdend Yield TTM",
  render: (company: CompanyKeyMetrics) => company.dividendYieldTTM,
  subTitle: "Shows how much a company pays each year relative to stock price",
},
{
  label: "Capex Per Share TTM",
  render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
  subTitle:
    "Capex is used by a company to aquire, upgrade, and maintain physical assets",
},
{
  label: "Graham Number",
  render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
  subTitle:
    "This is the upperbouind of the price range that a defensive investor should pay for a stock",
},
{
  label: "PE Ratio",
  render: (company: CompanyKeyMetrics) => company.peRatioTTM,
  subTitle:
    "This is the upperbouind of the price range that a defensive investor should pay for a stock",
},
];*/

/*const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Share Holders Equity per Share",
    render: (company: CompanyKeyMetrics) => company.shareholdersEquityPerShareTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];*/

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyProfileData) => 
      new Intl.NumberFormat('en-IN', 
      { style: 'currency', currency: 'USD' }).format(company.mktCap),
  },
  {
    label: "Isin",
    render: (company: CompanyProfileData) => company.isin,
  },
  {
    label: "Exchange",
    render: (company: CompanyProfileData) => company.exchange,
  },
  {
    label: "Industry",
    render: (company: CompanyProfileData) => company.industry,
  },
  {
    label: "Sector",
    render: (company: CompanyProfileData) => company.sector,
  },
  {
    label: "City",
    render: (company: CompanyProfileData) => company.city,
  },
  {
    label: "State",
    render: (company: CompanyProfileData) => company.state,
  },
  {
    label: "Full Time Employee",
    render: (company: CompanyProfileData) => company.fullTimeEmployees,
  },
  {
    label: "Website",
    render: (company: CompanyProfileData) => <Link className='text-blue2 hover:text-green underline' to={company.website} target={"_blank"}>{company.website}</Link>,
  },
];


/*const CompanyProfile = (props: Props) => {

  const ticker = useOutletContext<string>(); 
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
      console.log(value?.data[0]);
    };
    getCompanyKeyMetrics();
  }, []);*/
  const CompanyProfile = (props: Props) => {

    const ticker = useOutletContext<string>(); 
    const [companyData, setCompanyData] = useState<CompanyProfileData>();
  
    useEffect(() => {
      const getProfileData = async () => {
        const value = await getCompanyProfile(ticker);
        setCompanyData(value?.data[0]);
        console.log(value?.data[0]);
      };
      getProfileData();
    }, []);

  return <>
  {companyData ? (
    <>
      <LiveChart symbol={ticker}/>
      <RatioList data={companyData} config={tableConfig}/>
      <StockComment stockSymbol={ticker}/>
      
    </>
  ) : (

    <>
      <Spinner/>
    </>
  )}
  </>
}

export default CompanyProfile