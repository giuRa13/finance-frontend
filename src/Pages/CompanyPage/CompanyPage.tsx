import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfileData } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import SimpleTile from '../../Components/Tile/SimpleTile';
import Spinner from '../../Components/Spinner/Spinner';

interface Props {}

const CompanyPage = (props: Props) => {

  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfileData>();


  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
      console.log(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
    {company? (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

    <Sidebar/>

    <CompanyDashboard ticker={ticker!}>
      <Tile title="Company name" 
        subTitle={company.companyName} 
        symbol={company.symbol} 
        logo={company.image}/>

      <SimpleTile title='Price' 
        subTitle={ new Intl.NumberFormat('en-IN', 
        { style: 'currency', currency: 'USD' }).format(company.price) }/>

      <SimpleTile title='Sector' subTitle={company.sector}/>
      <SimpleTile title='Country' subTitle={company.country}/>

      <p className='shadow-lg rounded-lg text-medium text-grey p-3 mt-1 m-4'>
        {company.description}
      </p>

    </CompanyDashboard>

    

    </div>
    ) : (

      <Spinner/>
    )}
    </>
  )
}

export default CompanyPage