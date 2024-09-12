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

export default function Swap() {
  const resultVariables = ["Swap Long", "Swap Short"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const header = "How to use the Swap Calculator";
  const description =
    "The Swap Calculator is used to identify the amount of swap taken or given for the specific order. To use it you should specify the corresponding currency pair, your trading account currency, Leverage used, and your position size. Then click on calculate, the calculator will show you the swaps for both long and short orders.";
  return (
    <div>
      <CalculatorContainer selectedCalculator={"Swap Calculators"}>
        {" "}
        <div className="rounded-[44px] border">
          <div className="relative mb-12 flex items-center justify-between rounded-t-[44px] bg-[#F4F4F4] px-6 py-8">
            <CurrencyPair />
            <AccountCurrency />

            <Inputs title={"Trade Size (in Units)"} placeholder={10000} />

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
      <div className="flex flex-col justify-center gap-8 p-8 md:flex-row">
        {/* Example 1 */}
        <div className="w-full rounded-2xl border bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-xl font-medium text-[#0F2777]">Example:</h2>
          <p className="mb-2">
            Trading 1 lot of EUR/USD (short) with an account denominated in EUR
          </p>
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-stone-400">1 lot</p>
              <p className="text-semibold text-3xl">100,000</p>
            </div>
            <div>
              <p className="text-stone-400">Pip value</p>
              <p className="text-3xl">$10</p>
            </div>
            <div>
              <p className="text-stone-400">Swap rate</p>
              <p className="text-3xl">0.54</p>
            </div>
          </div>
          <p className="font-medium">Swap fee: (10 * 0.54 * 1) / 10 = $0.54</p>
          <p className="mt-4 border-t pb-2 pt-4 text-gray-600">
            For Forex, the Swap Calculator works as follows:
          </p>
          <p className="font-semibold text-[#0F2777]">
            Swap = (Pip Value * Swap Rate * Number of Nights) / 10
          </p>
        </div>

        {/* Example 2 */}
        <div className="w-full rounded-2xl border bg-white p-6 md:w-1/2">
          <h2 className="mb-4 text-xl font-medium text-[#0F2777]">Example:</h2>
          <p className="mb-2">
            Trading 1 lot (1,000 barrels) of Brent with an account denominated
            in USD
          </p>
          <div className="mb-4 flex justify-between">
            <div>
              <p className="text-stone-400">Swap rate</p>
              <p className="text-3xl">-18.84</p>
            </div>
            <div>
              <p className="text-stone-400">Number of nights</p>
              <p className="text-3xl">1</p>
            </div>
          </div>
          <p className="font-medium">Swap fee: 1 * -18.84 * 1 = $-18.84</p>
          <p className="mt-4 border-t pb-2 pt-4 text-gray-600">
            For spot energy, the Swap Calculator works as follows:
          </p>
          <p className="font-semibold text-[#0F2777]">
            Swap = Lot Size * Swap Rate * Number of Nights
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Note: FxPro calculates swap once for each day of the week that a
            position is rolled over. However, to account for weekends, a triple
            charge will take place on Wednesday for FX & metals, and on Friday
            for other instruments.
          </p>
        </div>
      </div>
      <NeedHelp />
    </div>
  );
}
