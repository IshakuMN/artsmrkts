import React from "react";
import {
  AccountCurrency,
  CalculatorContainer,
  CurrencyPair,
  Inputs,
  Leverage,
  Results,
  CalDescription,
  NeedHelp,
} from "./components";

export default function Pip() {
  const resultVariables = ["Pip value"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const header = "What is a pip calculator?";
  const description =
    "Calculating pip value is crucial for opening any position on the financial market. It helps you to understand the worth of the pip of the position you decide to open in accordance to your trading account currency.";
  return (
    <div>
      <CalculatorContainer selectedCalculator={"Pip Calculators"}>
        {" "}
        <div className="rounded-[44px] border">
          <div className="relative mb-12 flex items-start justify-between rounded-t-[44px] bg-[#F4F4F4] px-6 py-8">
            <CurrencyPair />
            <AccountCurrency />

            <Inputs title={"Trade Size (in Units)"} placeholder={10000} />
            <div className="mt-4 max-w-60 space-x-2">
              <span className="">Current Conversion Price: (USD/USD)</span>
              <span className="font-semibold">1</span>
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
        </div>
      </CalculatorContainer>
      <CalDescription description={description} header={header} />
      <h1 className="mb-4 text-[44px]">How to use the pip calculator</h1>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {/* Example 1 */}
        <div className="w-full rounded-2xl border bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-xl font-medium text-[#0F2777]">Example:</h2>
          <p className="mb-2">Trading 1 lot of EUR/USD for EUR account </p>
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-stone-400">One pip in decimals</p>
              <p className="text-semibold text-3xl">0.0001</p>
            </div>
            <div>
              <p className="text-stone-400">Trade size</p>
              <p className="text-3xl">100,000</p>
            </div>
            <div>
              <p className="text-stone-400">Exchange Rate</p>
              <p className="text-3xl">0.51137</p>
            </div>
          </div>
          <p className="font-medium">{`0.0001 * 100,000 = 10 => 10 / 1.13798 = 8.78750`}</p>

          <p className="mt-4 border-t pb-2 pt-4 text-gray-600">
            For Forex, the Pip Calculator works as follows:
          </p>
          <p className="font-semibold text-[#0F2777]">
            Pip Value = (Pip in decimal places * Trade Size) / Market Price
          </p>
        </div>

        {/* Example 2 */}
        <div className="w-full rounded-2xl border bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-xl font-medium text-[#0F2777]">Example:</h2>
          <p className="mb-2">Trading 1 lot of GOLD for USD account</p>
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-3xl">-18.84</p>
              <p className="text-stone-400">Each tick is worth $1</p>
            </div>
          </div>

          <p className="mt-4 border-t pb-2 pt-4 text-gray-600">
            For metals, you calculate tick value instead of pip value, and the
            Pip Calculator works as follows:
          </p>
          <p className="font-semibold text-[#0F2777]">
            Tick Value = Tick in decimals (0.01) * Number of Oz
          </p>
        </div>
      </div>
      <NeedHelp />
    </div>
  );
}
