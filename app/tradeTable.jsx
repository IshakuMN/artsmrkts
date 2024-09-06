"use client";
import React, { useState, useEffect } from "react";

const TradeTable = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("/api/forex-data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };
    fetchPrices();
  }, []);

  return (
    <div className="table-container mx-auto my-8 max-w-7xl">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[44px] font-medium">Stable and reliable pricing</h1>
        <div className="flex space-x-2">
          <button className="w-[225px] rounded-full border py-2 font-semibold hover:bg-[#F6F6F6] active:bg-[#E8E8E9]">
            Sign up
          </button>
          <button className="w-[225px] rounded-full bg-customBlueFon py-2 font-semibold text-white hover:bg-[#182654] active:bg-[#001240]">
            Try free demo
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead className="border-b-2 font-medium">
          <tr>
            <th className="w-fit p-4 pl-20 text-start">Instrument</th>
            <th className="pl-4 text-start">Bid</th>
            <th className="pl-4 text-start">Ask</th>
            <th className="pl-4 text-start">Spread</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index} className="hover:bg-blue-100">
              <td className="rounded-l-[34px]">
                <div className="my-2 flex items-center space-x-4 px-4 py-1">
                  <img src={price.img} alt={price.name} className="h-16 w-20" />
                  <div>
                    <h3 className="font-bold">{price.name}</h3>
                    <p className="text-gray-500">{price.description}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                {price.bid !== "_" ? price.bid.toFixed(2) : "_"}
              </td>
              <td className="p-4">
                {price.ask !== "_" ? price.ask.toFixed(2) : "_"}
              </td>
              <td className="rounded-r-[34px] p-4">
                {price.spread.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeTable;
