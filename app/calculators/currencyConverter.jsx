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

export default function CurrencyConverter() {
  const resultVariables = ["value"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const header = "What is the currency converter and how to use it?";
  const description =
    "Currency converter is used to see the actual course of currency pairs.  To use it, simply specify the base and quote currency for a specific pair and click Calculate button.";
  return (
    <div>
      <CalculatorContainer selectedCalculator={"Currency Converter Calculator"}>
        {" "}
        <div className="rounded-[44px] border">
          <div className="relative mb-12 flex items-start justify-between rounded-t-[44px] bg-[#F4F4F4] px-6 pb-20 pt-8">
            <AccountCurrency
              title="Currency From"
              subtitle={false}
              placeholder="EUR"
            />
            <AccountCurrency title="Currency To" subtitle={false} />

            <Inputs title={"Amount"} placeholder={10000} />
            <div className="mt-4 max-w-60 space-x-2">
              <span className="">Current Conversion Price: (USD/USD)</span>
              <span className="font-semibold">1.109</span>
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
      <CalDescription description={description} header={header}>
        <h1 className="mb-4 mt-8 text-2xl text-[#0F2777]">
          Did you know that some currencies and currency pairs have nicknames?
        </h1>
        <div className="f gap-8">
          <div className="flex flex-col gap-2">
            <div>Australian dollar: Aussie</div>
            <div>Swiss Franc: Swissy</div>
            <div>New Zealand dollar: Kiwi</div>
            <div>Canadian dollar: Loonie</div>
            <div>Great British Pound and GBP/USD: Cable</div>
            <div>EUR/JPY: Yuppy</div>
            <div>GBP/JPY: Guppy</div>
          </div>
        </div>
      </CalDescription>
      <NeedHelp />
    </div>
  );
}
