import axios from "axios";
import { CompanyBalanceSheet, 
    CompanyCashFlow, 
    CompanyHistoricalDividend, 
    CompanyIncomeStatement, 
    CompanyKeyMetrics, 
    CompanyProfileData, 
    CompanySearch, 
    Dividend } from "./company";

export interface SearchResponse {
    data: CompanySearch[];
}

//https://financialmodelingprep.com/api/v3/search?query=AA ${process.env.REACT_APP_API_KEY}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${process.env.REACT_APP_API_KEY}&limit=10&exchange=NASDAQ,NYSE,LSE,EURONEXT`
        );
        return data;      
    } catch(error){
        if (axios.isAxiosError(error)) {
            console.log("ERROR>>> ", error.message);
            return error.message;
        } else {
            console.log("unespected error>>> ", error);
            return "Anespected Error";
        }
    }
};


export const getCompanyProfile = async (query: string) => {
    try{
        const data = await axios.get<CompanyProfileData[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}&limit=10&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};


export const getKeyMetrics = async (query: string) => {
    try{
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}&limit=10&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};


export const getIncomeStatement = async (query: string) => {
    try{
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=${process.env.REACT_APP_API_KEY}&limit=40&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};


export const getBalanceSheet = async (query: string) => {
    try{
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?apikey=${process.env.REACT_APP_API_KEY}&limit=40&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};


export const getCashFlow = async (query: string) => {
    try{
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?apikey=${process.env.REACT_APP_API_KEY}&limit=40&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};


/*export const getChartData = async (query: string) => {
    try{
        const data = await axios.get<CompanyChartData[]>(
            `https://financialmodelingprep.com/api/v3/historical-price-full/${query}?apikey=vTzirAVlYuLErLtb6lcjwcW3cybPTTBk&limit=40&exchange=NASDAQ`
        );
        return data;      
    } 
    catch(error: any){
        console.log("ERROR>>> ", error.message);     
    }
};*/


export const getHistoricalDividend = async (query: string) => {
    try {
      const data = await axios.get<CompanyHistoricalDividend>(
        `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };