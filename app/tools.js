"use client";
import { useState } from "react";
import CardTools from "@/app/CardTools";

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isClickedCard, setIsClickedCard] = useState("3");

  const cardText = {
    0: "Get all the free education you need to become a better trader. Whether you`re beginner or an expert, we`ll have something for you. From articles, to educational webinars, videos, and courses; you name it, we`ll have it.",
    1: "Get all the free education you need to become a better trader. Whether you`re a beginner or an expert, we`ll have something for you.",
    2: "Get all the free education you need to become a better trader. From articles, to educational webinars, videos, and courses; you name it, we`ll have it.",
    3: "Get all the free education you need to become a better trader. Whether you`re a beginner or an expert, we`ll have something for you.",
  };

  const titles = ["Academy", "Tools", "Market", "Analysis"];
  const images = ["academy.svg", "academy.svg", "academy.svg", "academy.svg"];

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-20 py-32">
      <div className="flex flex-row items-center justify-between">
        <h2 className="max-w-[621px] text-[44px] font-medium leading-[52.28px]">
          Trade Smarter with Our Trading Tools
        </h2>
        <p className="max-w-[476px] text-[16px] leading-[19.2px]">
          Are you ready to reach a new level in the world of investments and
          earn serious money in the financial markets? Then you definitely need
          to take a closer look at our tariff offers!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-row gap-3">
          {Object.keys(cardText).map((key, index) => (
            <CardTools
              key={key}
              id={key}
              title={titles[key]}
              imageSrc={images[key]} // Передаем соответствующее изображение
              isActive={isClickedCard === key}
              isHovered={hoveredIndex === key}
              onClick={setIsClickedCard}
              onHover={setHoveredIndex}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </ul>
        <p className="border-l-solid --webkit-transition-opacity --webkit-transition-duration-500 border-l-[3px] border-l-customOrangeSeven py-2.5 pl-6 pr-2.5 text-[20px] font-medium leading-[24px] transition-opacity duration-500 ease-in-out">
          {cardText[isClickedCard]}
        </p>
      </div>
    </section>
  );
};

export default Tools;
