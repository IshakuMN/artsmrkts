"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CardMarketTrends from "@/app/CardMarketTrends";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarketTrends = () => {
  const [isHoveredMarket, setIsHoveredMarket] = useState(false);
  const [isActiveMarket, setIsActiveMarket] = useState(false);
  const [isHoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Определение ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Устанавливаем изначальное состояние
    window.addEventListener("resize", handleResize); // Добавляем слушатель на изменение размера окна

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // Отображает 1 карточку полностью и частично следующую
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
  };

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
      description: "Strategies and Insights for 2024",
    },
    {
      id: "money",
      imageSrc: "money.svg",
      title: "US Stock Soar on Strong Jobs Data and Tech Rally",
      description: "The US stock market kicked off the second half of.",
    },
  ];

  return (
      <section className="min-w-80 mx-auto max-w-screen-xl max-sm:px-4 max-sm:pt-11 overflow-hidden">
        <h2 className="mb-14 text-[44px] font-medium leading-[52.8px] text-customBlueThree max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:mb-6">
          Keep up with market trends
        </h2>

        {/* Условный рендеринг: слайдер для мобильных устройств и обычные карточки для больших экранов */}
        <div className={`${isMobile ? "" : "flex gap-5"}`}>
          {isMobile ? (
              <Slider {...sliderSettings}>
                {cardsData.map((card) => (
                    <div key={card.id} className="p-3"> {/* Добавил padding для карты */}
                      <CardMarketTrends
                          {...card}
                          isHoveredCard={isHoveredCard}
                          onMouseEnter={setHoveredCard}
                          onMouseLeave={() => setHoveredCard(null)}
                      />
                    </div>
                ))}
              </Slider>
          ) : (
              cardsData.map((card) => (
                  <CardMarketTrends
                      key={card.id}
                      {...card}
                      isHoveredCard={isHoveredCard}
                      onMouseEnter={setHoveredCard}
                      onMouseLeave={() => setHoveredCard(null)}
                  />
              ))
          )}
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
