"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FinancialFlagIcon from "financial-flag-icons";
import CurrencyFlag from "react-currency-flags";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const CurrencyPair = () => {
  const currencyPairs = [
    "audcad",
    "audchf",

    "audjpy",
    "audnzd",

    "audusd",
    "cadchf",
    "cadjpy",
    "chfjpy",

    "euraud",
    "eurcad",
    "eurchf",

    "eurdkk",
    "eurgbp",

    "eurhuf",
    "eurjpy",

    "eurnok",
    "eurnzd",
    "eurpln",

    "eurtry",
    "eurusd",

    "gbpaud",
    "gbpcad",
    "gbpchf",
    "gbpjpy",
    "gbpnzd",
    "gbpusd",
    "nzdusd",
    "usdcad",
    "usdchf",

    "usddkk",
    "usdhkd",
    "usdhuf",
    "usdjpy",
    "usdmxn",

    "usdpln",
    "usdsek",
    "usdsgd",
    "usdtry",
    "usdzar",
  ];
  return (
    <div>
      <Select className="">
        <span className="text-stone-500">Currency Pair</span>
        <SelectTrigger className="h-[56px] w-[278px] rounded-xl">
          <FinancialFlagIcon className="h-8 w-8" icon="eurusd" /> EURUSD
        </SelectTrigger>
        <SelectContent>
          {currencyPairs.map((item) => (
            <SelectItem key={item} value={item} className="">
              <div className="flex items-center gap-x-2">
                {" "}
                <FinancialFlagIcon className="h-7 w-7" icon={item} />
                <span>{item.toUpperCase()}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
        <div className="flex gap-x-4">
          <div className="flex flex-col">
            <span className="text-stone-500">Swap Long:</span>
            <span className="font-semibold">-7.9</span>
          </div>
          <div className="flex flex-col">
            <span className="text-stone-500">Swap Short:</span>
            <span className="font-semibold">1.85</span>
          </div>
        </div>
      </Select>
    </div>
  );
};

export const AccountCurrency = ({
  title = "Account Currency",
  subtitle = true,
  placeholder = "USD",
}) => {
  const accountCurrencies = ["USD", "EUR", "GBP", "AUD", "CAD", "CHF", "JPY"];
  return (
    <div>
      <Select>
        <span className="text-stone-500">{title}</span>

        <SelectTrigger className="h-[56px] w-[278px] rounded-xl">
          <CurrencyFlag currency={placeholder} width={30} /> {placeholder}
        </SelectTrigger>
        <SelectContent className="">
          {accountCurrencies.map((item) => (
            <SelectItem key={item} value={item} className="">
              <div className="flex items-center gap-x-2">
                {" "}
                <CurrencyFlag currency={item} size="sm" />
                <span>{item}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
        {subtitle && (
          <div className="flex flex-col">
            <span className="text-stone-500">Avg. Spread on MT4</span>
            <span className="font-semibold">1.44</span>
          </div>
        )}
      </Select>
    </div>
  );
};

export const Leverage = () => {
  const leverages = [
    "1:1",
    "1:10",
    "1:20",
    "1:30",
    "1:50",
    "1:100",
    "1:200",
    "1:300",
    "1:400",
    "1:500",
  ];
  return (
    <div>
      {" "}
      <Select>
        <span className="text-stone-500">Leverage *for margin</span>

        <SelectTrigger className="h-[56px] w-[278px] rounded-xl">
          <span>1:1</span>
        </SelectTrigger>
        <SelectContent>
          {leverages.map((item) => (
            <SelectItem key={item} value={item} className="">
              {item}
            </SelectItem>
          ))}
        </SelectContent>
        <div className="flex flex-col">
          <span className="text-stone-500">Avg. Spread on MT4</span>
          <span className="font-semibold">0.8</span>
        </div>
      </Select>
    </div>
  );
};

export const Inputs = ({ title, placeholder, subtitle, subtitleValue }) => {
  const [value, setValue] = useState(placeholder);
  return (
    <div className="flex flex-col">
      <span className="text-stone-500">{title}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-[56px] w-[278px] rounded-xl border bg-white px-4"
      />
      <div className="flex flex-col">
        <span className="text-stone-500">{subtitle}</span>
        <span className="font-semibold">{subtitleValue}</span>
      </div>
    </div>
  );
};

export const Results = ({ title, value }) => {
  return (
    <div className="w-full">
      <h3 className="w-full text-center"> {title}</h3>
      <div className="rounded-b-2xl border-t border-stone-200 bg-[#FAFAFB] py-5 text-center text-2xl font-semibold">
        {value}
      </div>
    </div>
  );
};

export const SwitchButton = ({ className }) => {
  const [active, setActive] = useState("Buy/Long");

  return (
    <div
      className={`flex h-fit w-fit items-center rounded-full bg-white ${className}`}
    >
      <button
        onClick={() => setActive("Buy/Long")}
        className={`rounded-full px-6 py-2 ${active === "Buy/Long" ? "bg-black text-white" : ""}`}
      >
        Buy / Long
      </button>
      <button
        onClick={() => setActive("Sell/Short")}
        className={`rounded-full px-6 py-2 ${active === "Sell/Short" ? "bg-black text-white" : ""}`}
      >
        Sell / Short
      </button>
    </div>
  );
};

export const CalculatorContainer = ({ children, selectedCalculator }) => {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(true);

  const toggleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
  };
  return (
    <div
      className="rounded-t-[44px] border border-b-stone-50 px-8 pb-20 pt-6"
      style={{
        boxShadow:
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex justify-between pb-6 pt-4">
        <span className="text-3xl">{selectedCalculator}</span>
        <button
          className="rounded-full border p-2"
          onClick={toggleCalculatorVisibility}
        >
          {isCalculatorVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>

      {isCalculatorVisible && children}
    </div>
  );
};

export const CalDescription = ({
  description,
  header,
  children,
  className,
}) => {
  return (
    <div className="mb-10 mt-5 rounded-xl bg-[#FAFAFB] p-11">
      <h3 className="py-2 text-xl font-medium">{header}</h3>
      <div className={`${className}`}>
        {" "}
        <p className="w-full">{description}</p>
        {children}
      </div>
    </div>
  );
};

export const NeedHelp = () => {
  return (
    <div className="my-12 flex items-center justify-between rounded-[44px] bg-[#F5F8FF] px-14 py-8">
      <h3 className="text-3xl">Need Help? Visit our Help Section</h3>{" "}
      <button className="rounded-full bg-white px-11 py-3 text-lg font-semibold text-[#851000]">
        Go to help center
      </button>
    </div>
  );
};
