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

export default function StopLoss() {
  const description = "";
  return (
    <div>
      {" "}
      <CalculatorContainer selectedCalculator={"Stop Loss/Take Profit Levels"}>
        <StopLossLevels />
      </CalculatorContainer>
      <CalDescription description={description} />
      <CalculatorContainer selectedCalculator={"Stop Loss/Take Profit Amount"}>
        <StopLossAmount />
      </CalculatorContainer>
      <NeedHelp />
    </div>
  );
}

export const StopLossLevels = () => {
  const resultVariables = [
    "Stop Loss at",
    "Take Profit at",
    "Stop Loss, Pips",
    "Take Profit, Pips",
    "Pip Value",
  ];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);

  const description =
    "Use this Stop Loss/Take Profit Calculator to determine what price levels to use for your Stop Loss/Take Profit orders, how many pips are involved in each, and what the value of each pip is. To do this, simply select the currency pair you are trading, enter your account currency, your position size, and the opening price. Select whether your trade is long or short and then enter how much you are willing to risk before your Stop Loss/Take Profit order is activated. Press ‘Calculate’ and the Stop Loss/Take Profit Calculator will do the rest.";

  return (
    <div className="rounded-[44px] border">
      <div className="grid-col-1 relative mb-12 grid grid-cols-1 gap-4 rounded-t-[44px] bg-[#F4F4F4] px-6 pb-20 pt-8 sm:grid-cols-4">
        {" "}
        <CurrencyPair />
        <AccountCurrency />
        <Inputs
          title={"Position Size"}
          subtitle={"Minimum price Fluctuation"}
          subtitleValue={0.00001}
          placeholder={10000}
        />
        <Inputs title={"Open Price"} placeholder={10000} />
        <Inputs title={"Amount to risk for SL"} placeholder={100.0} />
        <Inputs title={"Amount to risk for TP"} placeholder={100.0} />
        <SwitchButton className="mt-8" />
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
      <CalDescription description={description} />
    </div>
  );
};

export const StopLossAmount = () => {
  const resultVariables = ["Take Profit at", "Pip Value"];

  const results = ["0.77133", "11,019", "1", "-0.81", "0.21"];

  const [showResults, setShowResults] = React.useState(false);
  const description =
    "Use this Stop Loss/Take Profit Calculator to find out exactly how much you potentially stand to lose or gain if your respective stop loss/take profit levels are hit. Simply select the currency pair you are trading, enter your account currency and your position size. Select whether your trade is long or short and then enter your desired stop loss/take profit levels. Press ‘Calculate’ and the Stop Loss/Take Profit Calculator will work out your potential losses and gains denominated in your account currency.";

  return (
    <div className="rounded-[44px] border">
      <div className="grid-col-1 relative mb-12 grid grid-cols-1 gap-4 rounded-t-[44px] bg-[#F4F4F4] px-6 pb-20 pt-8 sm:grid-cols-4">
        {" "}
        <CurrencyPair />
        <AccountCurrency />
        <Inputs
          title={"Position Size"}
          subtitle={"Minimum price Fluctuation"}
          subtitleValue={0.00001}
          placeholder={10000}
        />
        <SwitchButton className="mt-8" />
        <Inputs title={"Stop Loss at"} placeholder={1.1023} />
        <Inputs title={"Take Profit at"} placeholder={1.1245} />
        <div className="mt-5">
          <p className="sm:whitespace-nowrap">
            Current Conversion Price: ( EUR/USD)
          </p>
          <p className="font-semibold">1.1134</p>
        </div>
        {/* <Inputs title={"Amount to risk for TP"} placeholder={100.0} /> */}
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
      <CalDescription description={description} />
    </div>
  );
};
