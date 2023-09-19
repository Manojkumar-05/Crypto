import React, { useEffect } from "react";
import showStore from "../stores/showStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Triangle, Vortex } from "react-loader-spinner";
import convertToIndianFormat from "../compoenets/seperateWithComma";

const Show = () => {
  const store = showStore();
  const params = useParams();

  const { graphData, Data } = store;
  useEffect(() => {
    store.fetchData(params.id);
  }, [params.id]);

  if (!Data || !Data.name) {
    return (
      <div className="flex h-screen flex-col justify-center items-center">
        {/* <div className="font-extrabold text-5xl ">
          That didn<span className="text-red-600">'</span>t work li
          <span className="text-red-600">'</span>l bro
        </div> */}
        <Vortex
          visible={true}
          height="120"
          width="120"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "#0000AA",
            "#0000FF",
            "#3366FF",
            "#0000AA",
            "#0000FF",
            "#3366FF",
          ]}
        />
        {/* <Triangle
          height="180"
          width="180"
          color="red"
          ariaLabel="triangle-loading"
          visible={true}
        /> */}
      </div>
    );
  }
  console.log(graphData);
  console.log(Data);
  return (
    <div className=" bg-slate-300 flex flex-col justify-center  items-center p-16">
      <a href={Data.links.homepage[0]}>
        <img src={Data.image.large} className="h-32 rounded-full" />
      </a>
      <header className="flex flex-col justify-center  items-center gap-3">
        <h2 className="font-extrabold text-4xl">
          {Data.name} (<span className="font-bold">{Data.symbol}</span>)
        </h2>
        <p className="text-3xl font-extrabold">
          ₹{convertToIndianFormat(Data.market_data.current_price.inr)}
        </p>
      </header>
      <AreaChart
        width={500}
        height={400}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <div className="flex flex-wrap flex-col font-[550]">
        <div className="flex flex-grow justify-between items-center gap-32 rounded-lg  ml-2 p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200">
          <h4>Market Cap Rank</h4>
          <span>{Data.market_cap_rank}</span>
        </div>
        <div className="flex flex-grow justify-between items-center ml-2 gap-32 rounded-lg p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200">
          <h4>24h High</h4>
          <span>₹{convertToIndianFormat(Data.market_data.high_24h.inr)}</span>
        </div>
        <div className="flex flex-grow justify-between items-center ml-2 gap-32 rounded-lg p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200">
          <h4>24h Low</h4>
          <span>₹{convertToIndianFormat(Data.market_data.low_24h.inr)}</span>
        </div>
        <div className="flex flex-grow justify-between items-center ml-2 gap-32 rounded-lg p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200">
          <h4>Circulating Supply</h4>
          <span>
            ₹
            {convertToIndianFormat(
              Data.market_data.circulating_supply.toFixed(2)
            )}
          </span>
        </div>
        <div className="flex flex-grow justify-between items-center ml-2 gap-32 rounded-lg p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200">
          <h4>1 Year Change</h4>
          <span>{Data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Show;
