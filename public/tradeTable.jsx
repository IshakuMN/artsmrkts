"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const instruments = [
  {
    symbol: "C:XAUUSD",
    name: "XAUUSD",
    description: "Gold vs US Dollar",
    img: "/gold.png",
  },
  {
    symbol: "C:EURUSD",
    name: "EURUSD",
    description: "Euro vs US Dollar",
    img: "/euro.png",
  },
  {
    symbol: "AAPL",
    name: "APPL",
    description: "Apple Inc.",
    img: "/apple.png",
  },
  {
    symbol: "BRN",
    name: "BRENT",
    description: "Brent Crude Oil",
    img: "/oil.png",
  },
  {
    symbol: "X:BTCUSD",
    name: "Bitcoin",
    description: "Bitcoin vs US Dollar",
    img: "/bitcoin.png",
  },
];

const TradeTable = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate() - 1).padStart(2, "0")}`;
        console.log("Fetching prices for date:", formattedDate);

        const responses = await Promise.all(
          instruments.map((instrument) =>
            axios.get(
              `https://api.polygon.io/v2/aggs/ticker/${instrument.symbol}/range/1/day/${formattedDate}/${formattedDate}?apiKey=VW0iNVW61DehUZ_0B7TWkudreEmOb_UP`,
            ),
          ),
        );
        const updatedPrices = responses.map((response, index) => {
          const data = response.data.results[0];
          return {
            name: instruments[index].name,
            description: instruments[index].description,
            img: instruments[index].img,
            bid: data.c,
            ask: data.c - 0.03,
            spread: 0.03,
          };
        });
        setPrices(updatedPrices);
        console.log("Fetched prices: ", updatedPrices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };
    fetchPrices();
  }, []);

  return (
    <div className="table-container mx-auto my-8 max-w-7xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Stable and reliable pricing</h1>
        <div className="flex space-x-2">
          <button className="rounded-full border px-16 py-1">Register</button>
          <button className="rounded-full bg-blue-900 px-16 py-1 text-white">
            Try free demo
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="w-fit p-4 pl-20 text-start">Instrument</th>
            <th className="pl-4 text-start">Bid</th>
            <th className="pl-4 text-start">Ask</th>
            <th className="pl-4 text-start">Spread</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index} className="rounded-l-lg hover:bg-blue-100">
              <td className="rounded-l-2xl">
                <div className="flex items-center space-x-4 px-4 py-3">
                  <img src={price.img} alt={price.name} className="h-16 w-20" />
                  <div>
                    <h3 className="font-bold">{price.name}</h3>
                    <p className="text-gray-500">{price.description}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">{price.bid.toFixed(2)}</td>
              <td className="p-4">{price.ask.toFixed(2)}</td>
              <td className="rounded-r-2xl p-4">{price.spread.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeTable;
