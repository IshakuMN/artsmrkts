"use client";
import {useState} from "react";
import CardTools from "@/app/CardTools";
import Link from "next/link";

const Tools = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isClickedCard, setIsClickedCard] = useState("3");

    const cardTextBottom = {
        0: "The Artsmrkts Forex Affiliate Program offers flexible opportunities for Webmasters, Individual Traders, EA Developers, and Marketing firms to earn through client referrals. By joining as an Introducing Broker (IB), you can receive commissions for introducing new clients, while the Master IB Program allows you to earn additional commissions from the IBs you refer. This program is ideal for anyone looking to grow their income in the Forex market.\n",
        1: "Access all the free education you need to enhance your trading skills, whether you're a beginner or an expert. Learn from experts through interactive webinars, online courses, videos, and forex articles, and stay informed with comprehensive technical tools for identifying market sentiment.\n",
        2: "Artsmarkets protects investors' capital by carefully analyzing their transactions and monitoring open positions.\n" +
            "By staying ahead of market developments, we proactively inform our clients of potential adverse situations, minimizing the risk of losses.\n" +
            "For new investors, we manage risks both before and during their trades, ensuring that they make informed decisions. This approach helps achieve high profit margins with minimal losses.\n",
        3: "Get all the free education you need to improve your trading experience. Whether you just start, of have your own expertiece - we'll have something to offer you. Articles, edication webinars, videos, special cources, you name it - we have it all",
    };

    const titles = ["Partnership", "Education", "Account and risk management", "Analysis"];
    const images = ["partnership.svg", "education.svg", "academy.svg", "analysis.svg"];

    return (
        <section className="mx-auto flex max-w-7xl flex-col gap-20 py-32">
            <div className="flex flex-row items-center justify-between">
                <h2 className="max-w-[621px] text-[44px] font-medium leading-[52.28px]">
                    Trade Smarter with Our Trading Tools
                </h2>
                <p className="max-w-[476px] text-[16px] leading-[19.2px]">
                    Ready to reach your new level in the world of investments and earn a whole lot of money in the financial markets? Then you definately need to take a closer look at advantages that our accounts plans offer!
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <ul className="flex flex-row flex-nowrap gap-3 overflow-x-auto">
                    {Object.keys(cardTextBottom).map((key, index) => (
                        <CardTools
                            key={key}
                            id={key}
                            title={titles[key]}
                            imageSrc={images[key]}
                            isActive={isClickedCard === key}
                            isHovered={hoveredIndex === key}
                            onClick={setIsClickedCard}
                            onHover={setHoveredIndex}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </ul>
                <div className="flex flex-col gap-6 border-l-solid border-l-[3px] border-l-customOrangeSeven transition-opacity duration-500 ease-in-out pl-6 pr-2.5">
                    <p className="text-[20px] font-medium leading-[24px]">
                        {cardTextBottom[isClickedCard]}
                    </p>
                    <Link href="/">
                        <button
                            type="button"
                            className="flex cursor-pointer items-center justify-center rounded-[44px] bg-white px-[51.75px] py-3 border-[1px] border-customGrey border-solid transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                        >
                <span className="text-[14px] font-semibold leading-[16.8px] text-customBlue">
                  More information
                </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Tools;
