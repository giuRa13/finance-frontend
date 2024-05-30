import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockData } from './Service';
import { formatStockData } from './utils';
import ReactApexChart from 'react-apexcharts';

const LiveChart = ({symbol}) => {

    const [stockData, setStockData] = useState({});

    useEffect(() => {
        fetchStockData(symbol)
        .then(data => setStockData(data)
        //.then(data => console.log(data))
        
    )         
       
    }, []);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    const candleStickOptions = {
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#26a69a',
                    downward: '#ef5350',
                },
                wick: {
                    useFillColor: true
                }
            }
        },
        chart: {
            type: "candlestick",
            heigth: 1000,
            id: "candles"          
        },
        title: {
            text: "CandleStick Chart",
            align: "left",
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };



  return (
    
    <div id="chart">
        <ReactApexChart
        series={
            [
                {
                    data: seriesData
                }
            ]
        }
        options={candleStickOptions}
        type="candlestick"
        />
    </div>

  )
}

export default LiveChart