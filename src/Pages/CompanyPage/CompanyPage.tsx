import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfileData } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

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
//<img src={company.image} alt='image'></img>
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
    </CompanyDashboard>

    </div>
    ) : (

      <div>Company not found</div>
    )}
    </>
  )
}

export default CompanyPage