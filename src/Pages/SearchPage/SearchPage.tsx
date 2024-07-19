import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Components/Search/Search';
import CardList from '../../Components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';

interface Props  {}

const SearchPage = (props: Props) => {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
  };

  useEffect(() => {

    getPortfolio();

  }, []);

  const getPortfolio = () => {
    portfolioGetAPI()
    .then((res) => {
      if(res?.data) {
        setPortfolioValues(res?.data);
      }
    }).catch((e) => {
      toast.warning("Could not get Portfolio Values!")
    });
  };


  const  onPortfolioCreate = (e: any) => {
    /*e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;

    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);*/
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
    .then((res) => {
      if(res?.status === 204){
        toast.success("Stock added to Portfolio!")
        getPortfolio();
      }
    }).catch((e) => {
      toast.warning("Could not create Portfolio item!")
    })
 };

 
  const onPortfolioDelete = (e: any) => {
    /*e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    })
    setPortfolioValues(removed);*/
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
    .then((res) => {
      if(res?.status === 200) {
        toast.success("Stock deleted from Portfolio");
        getPortfolio();
      }
    })
  };


  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") { 
      setServerError(result)
    } 
    else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
      console.log(result.data);
    }
    //console.log(searchResult);
  };


  
  return (
    <>

      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search}
        handleSearchChange={handleSearchChange}/>

      <ListPortfolio 
        portfolioValues={portfolioValues!} 
        onPortfolioDelete={onPortfolioDelete}/>

      <CardList 
        searchResult={searchResult} 
        onPortfolioCreate={onPortfolioCreate}/>

      {serverError && <div>Unable to Connect to API</div>}

    </>
  )
}

export default SearchPage