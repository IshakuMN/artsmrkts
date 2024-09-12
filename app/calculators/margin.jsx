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

export default function Margin() {
  const resultVariables = ["Requested Margin"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const header = "How to use the Margin Calculator";
  const description =
    "The Margin Calculator is used to determine the amount of margin required to open the specific position. It helps to see if you need to reduce the actual lot size, or to configure the leverage, with accordance to your current trading account balance. You need to fulfill previously listed values and click Calculate to see the required margin amount.";

  return (
    <div>
      <CalculatorContainer selectedCalculator={"Margin Calculators"}>
        {" "}
        <div className="rounded-[44px] border">
          <div className="relative mb-12 flex items-center justify-between rounded-t-[44px] bg-[#F4F4F4] px-6 py-8">
            <CurrencyPair />
            <AccountCurrency />

            <Inputs title={"Trade Size (in Units)"} placeholder={10000} />
            <Inputs title={"Leverage"} placeholder={10000} />
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
      <div className="mx-auto p-2">
        <h1 className="mb-8 text-center text-[44px]">
          Forex margin calculation formula and examples
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Example 1 - Forex */}
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold text-[#0F2777]">
              Example:
            </h2>
            <p className="mb-4 text-gray-700">
              Trading 3 lots of EUR/USD using 1:200 leverage with an account
              denominated in USD.
            </p>

            <div className="mb-4 flex gap-x-6">
              <p className="flex flex-col text-gray-700">
                <span className="font-light">Trade size: </span>{" "}
                <span className="text-3xl">300,000</span>
              </p>
              <p className="flex flex-col text-gray-700">
                <span className="font-light">
                  Account currency exchange rate:{" "}
                </span>{" "}
                <span className="text-3xl"> 1.13798</span>
              </p>
            </div>

            <p className="text-gray-70 mb-4 font-semibold">
              <span className="">Required Margin: </span> 300,000 / 200 *
              1.13798 = $1706.97
            </p>

            <p className="border-t pb-2 pt-4 text-gray-600">
              For forex, the margin calculation works as follows:
            </p>
            <p className="font-semibold text-[#0F2777]">
              Required Margin = Trade Size / Leverage * account currency
              exchange rate (if different from the base currency of the pair
              traded)
            </p>
          </div>

          {/* Example 2 - Gold */}
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold text-[#0F2777]">
              Example:
            </h2>
            <p className="mb-4 text-gray-700">
              Trading 1 lot (100 Oz) of GOLD using 1:200 leverage with an
              account denominated in USD.
            </p>

            <div className="mb-4 flex gap-6">
              <p className="flex flex-col text-gray-700">
                <span className="font-light">Trade size: </span>{" "}
                <span className="text-3xl"> 1.13798</span>
              </p>
              <p className="flex flex-col text-gray-700">
                <span className="font-light">Market price: </span>{" "}
                <span className="text-3xl">1235.90</span>
              </p>
            </div>

            <p className="mb-4 font-semibold text-gray-700">
              <span className="">Required Margin: </span> 100 / 200 * 1235.90 =
              $617.95
            </p>

            <p className="border-t pb-2 pt-4 text-gray-600">
              For metals, the margin calculation works as follows:
            </p>
            <p className="font-semibold text-[#0F2777]">
              Required Margin = Trade Size (Oz) / Leverage * Market Price
            </p>
          </div>
        </div>
      </div>
      <NeedHelp />
    </div>
  );
}
