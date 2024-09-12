import React from "react";
import {
  AccountCurrency,
  CurrencyPair,
  Inputs,
  Leverage,
  Results,
  CalculatorContainer,
  SwitchButton,
  CalDescription,
  NeedHelp,
} from "./components";

export default function Profit() {
  const resultVariables = ["Profit in Account Currency"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const description =
    "This calculator can help you to see the amount of profit received with a specific trading strategy. To use it, you should select needed currency pair, your trading account currency, time period the order was opened for, your position size, long or short order type, and your opening and closing prices. When it's done, hit Calculate button to see the result.";
  return (
    <div className="">
      <CalculatorContainer selectedCalculator={"Profit Calculator"}>
        <div className="grid-col-1 relative mb-12 grid grid-cols-1 gap-4 rounded-t-[44px] bg-[#F4F4F4] px-6 pb-20 pt-8 sm:grid-cols-4">
          {" "}
          <CurrencyPair />
          <AccountCurrency />
          <Inputs title={"Period in days"} placeholder={0} />
          <Inputs title={"Position Size"} placeholder={10.0} />
          <Inputs title={"Open Price"} placeholder={1.10429} />
          <Inputs title={"Open Price"} placeholder={1.10415} />
          <SwitchButton className="mt-8" />
          <div className="mt-4 flex items-center gap-x-4">
            <span className="flex flex-col">
              <span className="font-light"> Swap Long</span>{" "}
              <span className="font-semibold">0.00</span>
            </span>
            <span className="flex flex-col">
              <span className="font-light">Swap Short</span>{" "}
              <span className="font-semibold">0.00</span>
            </span>
          </div>
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

      <CalDescription
        description={description}
        header={"Forex profit calculator"}
        className="flex justify-between space-x-10"
      >
        <div className="w-full">
          {" "}
          <h3 className="">This is how the Profit Calculator works</h3>
          <p className="mt-2 text-[#0F2777]">
            Profit in Account Currency = ((close price – open price) * Position
            size / (or *) Currency rate) ± (swap in account currency value
            *period)
          </p>
        </div>
      </CalDescription>
      <div className="bg-white p-2">
        <h1 className="mb-4 text-[44px] text-[#0F2777]">
          Profit Calculator Example
        </h1>
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead>
            <tr className="">
              <th className="p-2 text-start">Account Currency</th>
              <th className="p-2 text-start">Currency</th>
              <th className="p-2 text-start">Period</th>
              <th className="p-2 text-start">Position Size</th>
              <th className="p-2 text-start">Type</th>
              <th className="p-2 text-start">Open Price</th>
              <th className="p-2 text-start">Close Price</th>
              <th className="p-2 text-start">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Example 1</td>
              <td className="p-2">EURUSD</td>
              <td className="p-2">0 Days</td>
              <td className="p-2">10,000</td>
              <td className="p-2">Sell/Short</td>
              <td className="p-2">1.35777</td>
              <td className="p-2">1.35111</td>
              <td className="p-2">€49.29*</td>
            </tr>
            <tr>
              <td className="p-2">Example 1</td>
              <td className="p-2">EURGBP</td>
              <td className="p-2">0 Days</td>
              <td className="p-2">10,000</td>
              <td className="p-2">Buy/Long</td>
              <td className="p-2">0.73044</td>
              <td className="p-2">0.73025</td>
              <td className="p-2">$-2.93**</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 text-xs text-stone-500">
          *((1.35111 - 1.35777) * 10000 / 1.35111 (EURUSD rate)) = 49.29
          <br />
          **((0.73044 - 0.73025) * 10000) * 1.50000 (GBPUSD rate) = -2.93
        </p>
      </div>
      <NeedHelp />
    </div>
  );
}
