"use client";

import React, { useState } from "react";

import AllInOneCalculator from "./all_in_one.jsx";
import { GoDotFill } from "react-icons/go";

import StopLoss from "./stopLoss.jsx";
import Margin from "./margin.jsx";
import Profit from "./profit.jsx";
import Swap from "./swap.jsx";
import Pip from "./pip.jsx";
import CurrencyConverter from "./currencyConverter.jsx";
import { CalculatorContainer } from "./components.jsx";
import {
  AccountCurrency,
  CurrencyPair,
  Inputs,
  Leverage,
  Results,
} from "./components.jsx";

const calculatorOptions = [
  "All In One",
  "Stop Loss / Take Profit Levels",
  "Profit",
  "Margin Calculator",
  "Swap Calculator",
  "Pip Calculator",
  "Currency Converter",
];

export default function Calculators() {
  const [selectedCalculator, setSelectedCalculator] = useState("All In One");

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case "All In One":
        return <AllInOneCalculator />;
      case "Stop Loss / Take Profit Levels":
        return <StopLoss />;
      case "Profit":
        return <Profit />;
      case "Margin Calculator":
        return <Margin />;
      case "Swap Calculator":
        return <Swap />;
      case "Pip Calculator":
        return <Pip />;
      case "Currency Converter":
        return <CurrencyConverter />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#FAFAFB] px-[80px] py-6">
        {calculatorOptions.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedCalculator(item)}
            className="flex items-center px-4"
          >
            {selectedCalculator === item ? (
              <GoDotFill className="text-red-600" />
            ) : (
              <></>
            )}{" "}
            <span
              className={
                selectedCalculator === item ? "font-semibold" : "text-stone-500"
              }
            >
              {item}
            </span>
          </button>
        ))}
      </div>
      <div className="mx-auto mb-8 mt-10 max-w-7xl space-y-2 px-5">
        <div className="mb-12 max-w-[790px]">
          <h1 className="text-[54px] font-medium">FX Calculators</h1>
          {selectedCalculator === "All In One" ? (
            <p>
              The universal Forex calculator automatically calculates the
              required margin, commission for trading and a value of 1 point for
              any position.
            </p>
          ) : (
            <p>
              Calculator tool is used to determine the values of parameters of a
              specific trade, such as margin, commission, lot size, and helps to
              manage the risks.
            </p>
          )}
        </div>

        {renderCalculator()}
      </div>
    </div>
  );
}
