import { create } from "zustand";
import axios from "axios";

const showStore = create((set) => ({
  graphData: [],
  Data: [],

  fetchData: async (id) => {
    const currDate = Date.now();
    const oneYr = currDate / 1000 - 31556926;
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=inr&from=${oneYr}&to=${currDate}`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-IN");
      return {
        Date: date,
        Price: Math.ceil(p),
      };
    });

    const {data} = dataRes
    const Data = data
    // console.log(Data);
    // console.log(graphRes);
    set({ graphData, Data });
    // console.log(res.data);
  },
}));

export default showStore;
