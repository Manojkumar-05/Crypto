import { useEffect } from "react";
import homeStore from "../stores/homeStore";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import convertToIndianFormat from "../compoenets/seperateWithComma";

const Home = () => {
  const store = homeStore();
  useEffect(() => {
    store.fetchCoins();
  }, []);
  console.log(store.coins.slice(0, 10));
  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center p-16">
      <div>
        <TextField
          id="outlined-basic"
          color="secondary"
          label="Search.."
          variant="filled"
          value={store.query}
          onChange={store.setQuery}
          className="w-[900px] h-10 "
        />

        <div className="flex flex-col mt-6">
          {store.coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center p-4 m-3 shadow-xl hover:shadow-2xl transition-shadow ease-in-out duration-200"
            >
              <img
                src={coin.image}
                className="h-10 rounded-full"
                alt={coin.name}
              />
              <div className="flex flex-grow justify-between items-center ml-2">
                <Link to={`/${coin.id}`} className="flex items-center gap-2">
                  {coin.name}
                </Link>
                {coin.priceBtc && (
                  <span className="ml-2 text-right">
                    ₹{convertToIndianFormat((coin.priceBtc * 2207763).toFixed(2))}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
