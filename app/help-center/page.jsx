"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import PopularArticles from "./popularArticles";
import ContactUs from "../contactUs";
import FeaturedArticles from "./featuredArticles";
import MoreCategories from "../moreCategories";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  const [selectedFAQ, setSelectedFAQ] = useState("");
  const faqRef = useRef(null);

  const handleFAQClick = (faq) => {
    setSelectedFAQ(faq);
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero selectedFAQ={selectedFAQ} onFAQClick={handleFAQClick} />
      <FAQ ref={faqRef} selectedFAQ={selectedFAQ} />
      <MoreCategories />
      {/* <PopularArticles /> */}
      <FeaturedArticles />
      <ContactUs />
    </div>
  );
};

export default Page;

const Hero = ({ selectedFAQ, onFAQClick }) => {
  const [inputValueTrading, setInputValueTrading] = useState("");
  const FAQ = [
    "Leverage",
    "Bonus",
    "Deposit",
    "Withdrawal",
    "Account",
    "Trading",
    "Platform",
    "Technical",
    "General",
    "Other",
  ];

  return (
    <div className="rounded-b-[80px] bg-[#FAFAFB] py-14">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="">
          <h1 className="text-[44px] font-medium">How can we help you?</h1>
          <form className="my-10 flex h-[50px] w-[700px] flex-row gap-2 rounded-[20px] border-[1px] border-customGrey bg-white px-4 py-2">
            <Image
              src="searchOrangeTwo.svg"
              alt="search"
              width={14}
              height={14}
              className="object-contain"
            />
            <input
              value={inputValueTrading}
              onChange={(e) => setInputValueTrading(e.target.value)}
              placeholder="Bonus"
              type="text"
              name="trading"
              id="trading"
              className="h-full w-full bg-white text-[16px] capitalize leading-[19.2px] outline-0"
            />
            <Image
              src="close.svg"
              alt="close"
              width={8}
              height={8}
              className="cursor-pointer object-contain"
            />
          </form>
          <div className="max-w-[700px]">
            <h2 className="mb-4 text-lg font-medium">Popular queries:</h2>
            <div className="flex flex-wrap">
              {FAQ.map((faq, index) => (
                <span
                  key={index}
                  className={`m-1.5 cursor-pointer rounded-full px-3 py-1.5 ${
                    selectedFAQ === faq
                      ? "bg-[#FF5E24] text-white"
                      : "bg-[#EBEBEB]"
                  }`}
                  onClick={() => onFAQClick(faq)}
                >
                  {faq}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 3 }}
            className="absolute right-28 top-16 z-30"
          >
            <Image
              src="/puzzleRed.png"
              width={172}
              height={150}
              alt="puzzleRed"
            />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-28px" }}
            transition={{ duration: 3 }}
            className="absolute bottom-16 left-32 z-10"
          >
            <Image
              src="/puzzleBgRed.svg"
              width={250}
              height={250}
              alt="puzzleBgRed"
            />
          </motion.div>
          <Image
            src="/puzzleGray.png"
            width={500}
            height={430}
            alt="puzzle"
            className="relative z-20"
          />
        </div>
      </div>
    </div>
  );
};

const FAQ = React.forwardRef(({ selectedFAQ }, ref) => {
  const faqItems = [
    {
      question: "What is leverage in Forex trading?",
      answer:
        "Leverage in Forex trading is a tool that allows traders to control larger positions with a smaller amount of capital. It amplifies both potential profits and losses.",
    },
    {
      question: "How do Forex bonuses work?",
      answer:
        "Forex bonuses are promotional offers provided by brokers to attract new clients or reward existing ones. They can come in various forms, such as deposit bonuses, no-deposit bonuses, or cashback offers.",
    },
    {
      question: "What are the common deposit methods in Forex?",
      answer:
        "Common deposit methods in Forex trading include bank wire transfers, credit/debit cards, e-wallets like PayPal or Skrill, and sometimes cryptocurrency transfers.",
    },
  ];

  return (
    <div ref={ref} className="mx-auto max-w-7xl">
      <h2 className="my-4 mt-16 text-[32px] font-medium">
        Frequently asked questions on the topic: Forex
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={
          selectedFAQ === "Leverage"
            ? "item-1"
            : selectedFAQ === "Bonus"
              ? "item-2"
              : selectedFAQ === "Deposit"
                ? "item-3"
                : null
        }
      >
        {faqItems.map((item, index) => (
          <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="bg-[#F6F7F9] px-10 py-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
});

FAQ.displayName = "FAQ";
