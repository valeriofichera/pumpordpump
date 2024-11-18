import { useEffect, useState } from "react";
import axios from "axios";

export function useTokenData({ ticker }) {
  const [tokenData, setTokenData] = useState({
    name: "Loading...",
    ticker: ticker,
    description: "Loading description...",
    mcap: "Loading...",
    created: "Loading...",
    price: "Loading...",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  });

  useEffect(() => {
    // Fetch data from CoinGecko API
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${ticker}`)
      .then((response) => {
        const data = response.data;
        setTokenData({
          name: data.name,
          ticker: data.symbol.toUpperCase(),
          description: data.description.en || "No description available.",
          mcap: `$${(data.market_data.market_cap.usd / 1e12).toFixed(2)}T`,
          created: "2009", // or fetch genesis date if needed
          price: `$${data.market_data.current_price.usd.toLocaleString()}`,
          url: data.image.small,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [ticker]);

  return { tokenData }
}