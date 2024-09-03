"use client";
import React, { useEffect } from "react";

const Ticker = () => {
  useEffect(() => {
    if (document.querySelector(".tradingview-widget-container__widget script"))
      return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

    script.onload = () => {
      console.log("TradingView widget script loaded successfully.");
    };

    script.onerror = () => {
      console.error("Error loading TradingView widget script.");
    };

    const scriptContent = `
    {
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500 Index"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100 Cash CFD"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    }`;

    script.innerHTML = scriptContent;
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default Ticker;

// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const currencyPairs = [
//   { base: "EUR", quote: "USD" },
//   { base: "USD", quote: "JPY" },
//   { base: "GBP", quote: "USD" },
//   { base: "AUD", quote: "USD" },
//   { base: "USD", quote: "CAD" },
//   { base: "USD", quote: "CNY" },
//   { base: "USD", quote: "CHF" },
//   { base: "USD", quote: "HKD" },
//   { base: "EUR", quote: "GBP" },
//   { base: "USD", quote: "KRW" },
// ];

// const TradeScroll = () => {
//   const [rates, setRates] = useState({});

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         const response = await axios.get(
//           "https://open.er-api.com/v6/latest/USD",
//         );
//         setRates(response.data.rates);
//         console.log("Fetched forex rates:", response.data);
//       } catch (error) {
//         console.error("Error fetching forex rates:", error);
//       }
//     };

//     fetchRates();
//     // const interval = setInterval(fetchRates, 60000); // Update every minute

//     // return () => clearInterval(interval);
//   }, []);

//   const calculateRate = (base, quote) => {
//     if (base === "USD") return rates[quote];
//     if (quote === "USD") return 1 / rates[base];
//     return rates[quote] / rates[base];
//   };

//   return (
//     <div className="forex-ticker-container mt-4">
//       <div className="forex-ticker">
//         {[...currencyPairs, ...currencyPairs].map(({ base, quote }, index) => {
//           const rate = calculateRate(base, quote);
//           const bidRate = rate ? rate.toFixed(3) : "-";
//           const askRate = rate ? (rate + 0.03).toFixed(3) : "-";
//           const formatRate = (rate) => {
//             if (rate === "-") return rate;
//             const [integerPart, decimalPart] = rate.split(".");
//             return (
//               <>
//                 <div className="font-light">{integerPart}.</div>
//                 <div className="flex">
//                   <div className="text-2xl font-extralight">
//                     {decimalPart.slice(0, 2)}
//                   </div>
//                   <div className="pt-0.5 text-sm font-light">
//                     {decimalPart.slice(2)}
//                   </div>
//                 </div>
//               </>
//             );
//           };

//           return (
//             <div
//               key={`${base}${quote}-${index}`}
//               className="m-2 flex space-x-4 rounded-lg px-5 py-2 shadow-md hover:shadow-xl"
//             >
//               <div className="flex flex-col justify-between">
//                 <span className="text-2xl font-semibold">
//                   {base}
//                   {quote}
//                 </span>
//                 <div className="flex flex-col">
//                   <span className="font-light">Bid</span>
//                   <span
//                     className={`flex items-baseline ${
//                       index % 2 === 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {formatRate(bidRate)}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between">
//                 <div className="flex">
//                   <div className="pr-1 pt-1">Spread</div>
//                   <div
//                     className={`text-3xl font-extralight ${
//                       index % 2 === 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {" "}
//                     0.03
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-light">Ask</span>
//                   <span
//                     className={`flex items-baseline ${
//                       index % 2 === 0 ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {formatRate(askRate)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <style jsx>{`
//         .forex-ticker-container {
//           overflow: hidden;
//           background: white;
//           padding: 10px 0;
//         }
//         .forex-ticker {
//           display: flex;
//           animation: scroll 30s linear infinite;
//           white-space: nowrap;
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TradeScroll;
