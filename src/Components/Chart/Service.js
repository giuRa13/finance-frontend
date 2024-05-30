
export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=vTzirAVlYuLErLtb6lcjwcW3cybPTTBk&limit=40&exchange=NASDAQ`)

    const data = await response.json();
    return data;
}