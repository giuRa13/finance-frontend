import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

//https://financialmodelingprep.com/api/v3/search?query=AA ${process.env.REACT_APP_API_KEY}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=vTzirAVlYuLErLtb6lcjwcW3cybPTTBk&limit=10&exchange=NASDAQ`
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