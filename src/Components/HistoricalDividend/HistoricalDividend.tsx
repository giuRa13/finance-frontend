import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getHistoricalDividend } from "../../api";
import { Dividend } from "../../company";
import SimpleLineChart from "../LineChart/SimpleLineChart";

type Props = {};

const HistoricalDividend = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [dividend, setDividend] = useState<Dividend[]>();
  useState<boolean>(false);
  useEffect(() => {
    const fetchHistoricalDividend = async () => {
      const value = await getHistoricalDividend(ticker);
      setDividend(
        value?.data.historical.slice(0, 18).sort(function (a, b) {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c.getTime() - d.getTime();
        })
      );
    };
    fetchHistoricalDividend();
  }, []);
  return (
    <>
      {dividend && dividend.length > 0 && dividend !== undefined ? (
        <SimpleLineChart data={dividend} xAxis="label" dataKey="dividend" />
      ) : (
        <h1 className="ml-3">Oops!...Dividend Data not Available for this Company at the moment...</h1>
      )}
    </>
  );
};

export default HistoricalDividend;