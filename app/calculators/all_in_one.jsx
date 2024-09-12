import React from "react";
import {
  AccountCurrency,
  CalculatorContainer,
  CurrencyPair,
  Inputs,
  Leverage,
  NeedHelp,
  Results,
} from "./components";

const All_in_one = () => {
  const resultVariables = [
    "cTrader Commission",
    "Requested Margin",
    "Pip Value",
    "Swap Long",
    "Swap Short",
  ];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  return (
    <div className="">
      <CalculatorContainer selectedCalculator={"All in One"}>
        {" "}
        <div className="relative mb-12 flex items-center justify-between rounded-t-[44px] bg-[#F4F4F4] px-6 py-8">
          <CurrencyPair />
          <AccountCurrency />
          <Leverage />
          <Inputs
            title={"Position Size"}
            subtitle={"Minimum price Fluctuation"}
            subtitleValue={0.00001}
            placeholder={10000}
          />
          <div className="absolute -bottom-4 left-1/2 w-[308px] -translate-x-1/2 transform">
            <button
              onClick={() => setShowResults(true)}
              className="w-full rounded-full bg-[#0F2777] py-2 text-center font-semibold text-white"
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="mb-6 flex gap-6 px-4">
          {!showResults &&
            resultVariables.map((item) => (
              <Results key={item} title={item} value="0.00" />
            ))}
          {showResults &&
            resultVariables.map((item, index) => (
              <Results key={item} title={item} value={results[index]} />
            ))}
        </div>
      </CalculatorContainer>
      <NeedHelp />
    </div>
  );
};

export default All_in_one;
