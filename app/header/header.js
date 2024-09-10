"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuItem from "@/app/header/menuItem";

const Header = () => {
    const [inputValueTrading, setInputValueTrading] = useState("");
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [isHoveredSearch, setIsHoveredSearch] = useState(false);
    const [isHoveredSearchTwo, setIsHoveredSearchTwo] = useState(false);
    const [isSearchFind, setIsSearchFind] = useState(false);

    const data = [
        "Forex",
        "Commodities",
        "Indices",
        "Stocks",
        "Cryptocurrencies",
    ];

    const filteredData = data.filter((item) =>
        item.toLowerCase().includes(inputValueTrading.toLowerCase())
    );

    const handleClickMenuItem = (item) => {
        setActiveMenuItem(item === activeMenuItem ? null : item);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClickClose = () => {
        setIsSearchFind(!isSearchFind);
    };

    return (
        <>
        <header className="relative z-50 bg-white">
            <div className="bg-customHeaderFont px-4 py-[9px] text-center text-[14px] leading-[16.8px] text-white">
                <p>
                    <span className="font-semibold">Trade Responsibly.</span> CFDs are
                    complex instruments with a high risk of losing money rapidly due to
                    leverage.
                    <span className="font-semibold">
            {" "}
                        75% of retail accounts lose money when trading.
          </span>
                </p>
                <p>
                    <span className="font-semibold">CFDs with this provider.</span> You
                    should consider whether you understand how CFDs work and whether you
                    can afford to take the high risk of losing your money.
                </p>
            </div>
            <div className="mx-auto flex max-h-[83px] max-w-screen-xl flex-row items-center justify-between py-6">
                <div className="flex flex-row items-center gap-4">
                    <Link
                        href="/"
                        rel="noopener noreferrer"
                        className="box-shadow-logo flex h-[35px] w-[35px] items-center justify-center rounded-lg border-[0.5px] border-solid border-customGreyOne bg-customWhiteOne"
                    >
                        <Image
                            src="/logo.svg"
                            alt="artsmrkts company logo"
                            width={25}
                            height={17}
                            className="max-h-full max-w-full object-contain"
                        />
                    </Link>

                    <div className="flex flex-row items-center gap-3 px-4 py-2">
                        <div className="flex flex-row items-center">
                            <div className="mr-1 px-1">
                                <Image
                                    src="/earth.svg"
                                    alt="planet earth"
                                    width={16}
                                    height={16}
                                    className="h-4 w-4 object-contain"
                                />
                            </div>
                            <span className="text-[16px] leading-[19.2px]">EN</span>
                        </div>
                        <div className="flex h-2.5 w-2.5 items-center justify-center">
                            <Image
                                src="/arrow.svg"
                                alt="arrow"
                                width={7}
                                height={4}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                {isSearchFind ? (
                    <div className="relative mx-8 w-3/5">
                        <form
                            className="flex flex-row gap-2 rounded-[20px] border-[1px] border-customGrey bg-white px-4 py-2 hover:customGreyTwo hover:box-shadow-search"
                            onSubmit={handleSubmit}
                            onMouseEnter={() => setIsHoveredSearchTwo(true)}
                            onMouseLeave={() => setIsHoveredSearchTwo(false)}
                        >
                            <Image
                                src={isHoveredSearchTwo ? "/search2.svg" : "/search1.svg"} // Меняем картинку при hover
                                alt="search"
                                width={14}
                                height={14}
                                className="object-contain"
                            />
                            <input
                                value={inputValueTrading}
                                onChange={(e) => setInputValueTrading(e.target.value)}
                                placeholder="trading"
                                type="text"
                                name="trading"
                                id="trading"
                                className="w-full text-[16px] capitalize leading-[19.2px] outline-0 bg-white"
                            />
                            <Image
                                src="/close.svg"
                                alt="close"
                                width={8}
                                height={8}
                                className="cursor-pointer object-contain"
                                onClick={handleClickClose}
                            />
                        </form>

                        {isSearchFind && inputValueTrading && (
                            <div className="box-shadow absolute left-0 top-[43px] z-10 flex w-full flex-col rounded-lg bg-white">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item, index) => (
                                        <div
                                            key={index}
                                            className="border-bottom px-4 py-1 hover:text-customOrange active:text-customRedText"
                                        >
                      <span className="text-[14px] capitalize leading-[16.8px]">
                        <span className="text-customOrange">
                          {inputValueTrading}
                        </span>
                          {item.slice(inputValueTrading.length)}
                      </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-2.5 text-center">
                    <span className="text-[16px] leading-[19.2px] text-customGreyThree">
                      Not found
                    </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-row">
                        <MenuItem
                            label="Company"
                            isActive={activeMenuItem === "Company"}
                            handleClick={() => handleClickMenuItem("Company")}
                            links={{
                                "About Artsmrkts": [
                                    { href: "/why-artsmrkts", text: "Why Artsmrkts" },
                                    { href: "/license-regulations", text: "License & Regulations" },
                                    { href: "/client-protection", text: "Client Fund Protection" },
                                    { href: "/contact-us", text: "Contact us" },
                                ],
                                "User Support": [{ href: "/help-center", text: "Help center" }],
                                Promotions: [
                                    { href: "/welcome-bonus", text: "Welcome bonus" },
                                    { href: "/re-deposit-bonus", text: "Re-deposit bonus" },
                                    { href: "/refer-bonus", text: "Refer bonus" },
                                ],
                                "Work with Us": [
                                    { href: "/career", text: "Career in Artsmrkts" },
                                ],
                            }}
                        />
                        <MenuItem
                            label="Markets & Tools"
                            isActive={activeMenuItem === "Markets & Tools"}
                            handleClick={() => handleClickMenuItem("Markets & Tools")}
                            links={{
                                Markets: [
                                    { href: "/markets/forex", text: "Forex" },
                                    { href: "/markets/commodities", text: "Commodities" },
                                    { href: "/markets/stocks", text: "Stocks (soon)" },
                                    { href: "/markets/indices", text: "Indices" },
                                ],
                                Tools: [
                                    { href: "/trading-hours", text: "Trading hours" },
                                    { href: "/calculator", text: "Calculator" },
                                ],
                                Press: [
                                    { href: "/market-news", text: "Market News" },
                                    {
                                        href: "/economic-calendar",
                                        text: "Economic Calendar",
                                    },
                                ],
                            }}
                        />
                        <MenuItem
                            label="Education"
                            isActive={activeMenuItem === "Education"}
                            handleClick={() => handleClickMenuItem("Education")}
                            links={{
                                "Educational Materials ": [
                                    { href: "/basics-trading", text: "Basics of Trading" },
                                    { href: "/technical-analysis", text: "Technical analysis" },
                                    { href: "/articles", text: "Articles" },
                                    { href: "/forex-glossary", text: "Forex Glossary" },
                                ],
                                Analytics: [
                                    { href: "/market-news", text: "Market overview" },
                                    { href: "/caily-forecast", text: "Daily Forecast" },
                                ],
                                "Live Sessions & Videos": [
                                    { href: "/webinar", text: "Webinar" },
                                    { href: "/educational-videos", text: "Educational Videos" },
                                ],
                            }}
                        />
                        <MenuItem
                            label="Trading"
                            isActive={activeMenuItem === "Trading"}
                            handleClick={() => handleClickMenuItem("Trading")}
                            links={{
                                "Trade with Artsmrkts": [
                                    { href: "/trading-account-types", text: "Trading Account Types" },
                                    { href: "/open-trading-account", text: "Open Trading Account" },
                                ],
                                "Treading Platforms": [
                                    { href: "/mt4", text: "MT4" },
                                ],
                                "Copytrading (soon)": [],
                            }}
                        />
                        <MenuItem
                            label="Partnership"
                            isActive={activeMenuItem === "Partnership"}
                            handleClick={() => handleClickMenuItem("Partnership")}
                            links={{
                                "Introduction broker (IB)": [
                                    {
                                        href: "/introduction-broker",
                                        text: "Introduction broker (IB)",
                                    },
                                    { href: "/affilates", text: "Affilates" },
                                ],
                            }}
                        />
                    </div>
                )}
                {!isSearchFind && (
                    <div
                        className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[20px] bg-customBlue hover:bg-customBlueTwo"
                        onMouseEnter={() => setIsHoveredSearch(true)}
                        onMouseLeave={() => setIsHoveredSearch(false)}
                        onClick={() => {
                            setIsSearchFind(!isSearchFind);
                            setActiveMenuItem(null)
                        }}
                    >
                        <Image
                            src={isHoveredSearch ? "/searchOrange.svg" : "/search.svg"}
                            alt="search"
                            width={14}
                            height={14}
                            className="object-contain"
                        />
                    </div>
                )}
                <div className="flex flex-row gap-2">
                    <Link href="/sign-up">
                        <button
                            type="button"
                            className="flex w-[88px] cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey"
                        >
              <span className="text-[14px] leading-[16.8px] text-customBlue">
                Sign up
              </span>
                        </button>
                    </Link>
                    <Link href="/sign-in">
                        <button
                            type="button"
                            className="flex w-[88px] cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-4 py-2 hover:bg-customBlue active:bg-customBlueTwo"
                        >
              <span className="text-[14px] leading-[16.8px] text-white">
                Sign in
              </span>
                        </button>
                    </Link>
                </div>
            </div>

        </header>
            {activeMenuItem && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
                    onClick={() => setActiveMenuItem(null)}
                ></div>
            )}
        </>
    );
};

export default Header;
