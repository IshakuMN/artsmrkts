"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CardMarketTrends from "@/app/CardMarketTrends";

const MarketTrends = () => {
  const [isHoveredMarket, setIsHoveredMarket] = useState(false);
  const [isActiveMarket, setIsActiveMarket] = useState(false);
  const [isHoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: "cubes",
      imageSrc: "cubes.svg",
      badge: "hot news",
      title: "Bitcoin's Struggle:",
      description: "Is a Crypto Winter Looming?",
    },
    {
      id: "stock",
      imageSrc: "stock.svg",
      title: "US Stock Soar on Strong Jobs Data and Tech Rally",
      description: "The US stock market kicked off the second half of",
    },
    {
      id: "gold",
      imageSrc: "gold.svg",
      title: "Best time to Trade Gold",
      description: "Srategies and Insights for 2024",
    },
    {
      id: "money",
      imageSrc: "money.svg",
      title: "US Stock Soar on Strong Jobs Data and Tech Rally",
      description: "The US stock market kicked off the second half of.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl">
      <h2 className="mb-14 text-[44px] font-medium leading-[52.8px] text-customBlueThree">
        Keep up with market trends
      </h2>
      <div className="flex flex-row gap-5">
        {cardsData.map((card) => (
          <CardMarketTrends
            key={card.id}
            {...card}
            isHoveredCard={isHoveredCard}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>
      <Link
        href="/"
        rel="noopener noreferrer"
        className="ml-auto mt-8 flex w-max flex-row items-center gap-2"
        onMouseEnter={() => setIsHoveredMarket(true)}
        onMouseLeave={() => setIsHoveredMarket(false)}
        onClick={() => setIsActiveMarket(!isActiveMarket)}
      >
        <p
          className={`text-[20px] font-medium leading-[24px] ${
            isActiveMarket
              ? "text-customBlackFour"
              : isHoveredMarket
                ? "text-customBlueTwo"
                : "text-customBlue"
          }`}
        >
          View all market news
        </p>
        {isActiveMarket ? (
          <Image
            src="arrowthree.svg"
            alt="arrow"
            width={40}
            height={2}
            className="object-contain"
          />
        ) : (
          <Image
            src={isHoveredMarket ? "arrowtwo.svg" : "arrowone.svg"}
            alt="arrow"
            width={isHoveredMarket ? 72 : 40}
            height={2}
            className="object-contain transition-all duration-300 ease-in-out"
          />
        )}
      </Link>
    </section>
  );
};

export default MarketTrends;
