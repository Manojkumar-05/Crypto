import axios from "axios";
import { create } from "zustand";
import debounce from "../heplers/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",

  setQuery: e => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce(async () => {
    const {query, trending} = homeStore.getState();

    if(query.length > 2){

      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
      console.log(res.data);
      
      const coins = res.data.coins.map((coin) => {
      return {
        name: coin.name,
        image: coin.large, 
        id: coin.id,
        priceBtc: coin.price_btc,
      };
    });
    set({ coins });
  }else{
    set({ coins: trending });
  }
  }, 400), 

  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    
    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
      };
    });
    console.log(coins)
    set({ coins, trending : coins  });
  },
}));

export default homeStore;
