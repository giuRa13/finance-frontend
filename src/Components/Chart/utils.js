
export const formatStockData = (stockData) => {

    const formattedData = [];

    if (stockData['historical']) {
        Object.entries(
            stockData['historical']
            
        ).map(
            ([key, value]) => {
                formattedData.push({
                    x: value.date,
                    y: [
                        value.open,
                        value.high,
                        value.low,
                        value.close,
                    ]
                })
            }
        )
    }
    //console.log(stockData['historical'][])
    return formattedData;
};