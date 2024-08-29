"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuItem from "@/app/header/menuItem";

const Header = () => {
  const [inputValueTrading, setInputValueTrading] = useState("");
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [isSearchFind, setIsSearchFind] = useState(false);

  const data = [
    "Forex",
    "Commodities",
    "Indices",
    "Stocks",
    "Cryptocurrencies",
  ];

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(inputValueTrading.toLowerCase()),
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
    <header>
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
      <div className="mx-auto flex max-h-[83px] max-w-[1240px] flex-row items-center justify-between py-6">
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="box-shadow-logo flex h-[35px] w-[35px] items-center justify-center rounded-lg border-[0.5px] border-solid border-customGreyOne bg-customWhiteOne"
          >
            <Image
              src="logo.svg"
              alt="artsmarket company logo"
              width={25}
              height={17}
              className="max-h-full max-w-full object-contain"
            />
          </Link>

          <div className="flex flex-row items-center gap-3 px-4 py-2">
            <div className="flex flex-row items-center">
              <div className="mr-1 px-1">
                <Image
                  src="earth.svg"
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
                src="arrow.svg"
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
              className="flex flex-row gap-2 rounded-[20px] border-[1px] border-customGrey bg-customGreyTwo px-4 py-2"
              onSubmit={handleSubmit}
            >
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
                placeholder="trading"
                type="text"
                name="trading"
                id="trading"
                className="w-full bg-customGreyTwo text-[16px] capitalize leading-[19.2px] outline-0"
              />
              <Image
                src="close.svg"
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
              links={[
                { href: "/why-artsmrkts", text: "Why Artsmarkets" },
                { href: "/regulations", text: "Regulations" },
                { href: "/client-protection", text: "Client Fund Protection" },
                { href: "/legal-documents", text: "legal documents" },
                { href: "/contact-us", text: "Contact us" },
                { href: "/career", text: "Career in Artsmrkts" },
                { href: "/help-center", text: "Help center" },
                { href: "/welcome-bonus", text: "Welcome bonus" },
                { href: "/re-deposit-bonus", text: "Re-deposit bonus" },
                { href: "/refer-bonus", text: "Refer bonus" },
              ]}
            />
            <MenuItem
              label="Markets & Tools"
              isActive={activeMenuItem === "Markets & Tools"}
              handleClick={() => handleClickMenuItem("Markets & Tools")}
              links={[
                { href: "/", text: "News Room" },
                { href: "/", text: "Contact Us" },
                { href: "/", text: "License" },
                { href: "/", text: "FAQ" },
              ]}
            />
            <MenuItem
              label="Education"
              isActive={activeMenuItem === "Education"}
              handleClick={() => handleClickMenuItem("Education")}
              links={[
                { href: "/", text: "Courses" },
                { href: "/", text: "Webinars" },
                { href: "/", text: "Tutorials" },
              ]}
            />
            <MenuItem
              label="Trading"
              isActive={activeMenuItem === "Trading"}
              handleClick={() => handleClickMenuItem("Trading")}
              links={[
                { href: "/", text: "Trading Platforms" },
                { href: "/", text: "Strategies" },
                { href: "/", text: "Markets" },
              ]}
            />
            <MenuItem
              label="Partner with us"
              isActive={activeMenuItem === "Partner with us"}
              handleClick={() => handleClickMenuItem("Partner with us")}
              links={[
                { href: "/", text: "Affiliate Program" },
                { href: "/", text: "Partnerships" },
                { href: "/", text: "Contact Us" },
              ]}
            />
          </div>
        )}
        {!isSearchFind && (
          <div
            className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[20px] bg-customBlue"
            onMouseEnter={() => setIsHoveredSearch(true)}
            onMouseLeave={() => setIsHoveredSearch(false)}
            onClick={() => setIsSearchFind(!isSearchFind)}
          >
            <Image
              src={isHoveredSearch ? "searchOrange.svg" : "search.svg"}
              alt="search"
              width={14}
              height={14}
              className="object-contain"
            />
          </div>
        )}
        <div className="flex flex-row gap-2">
          <Link href="/register">
            <button
              type="button"
              className="flex w-[88px] cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey"
            >
              <span className="text-[14px] leading-[16.8px] text-customBlue">
                Register
              </span>
            </button>
          </Link>
          <Link href="/login">
            <button
              type="button"
              className="flex w-[88px] cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-4 py-2 hover:bg-customBlue active:bg-customBlueTwo"
            >
              <span className="text-[14px] leading-[16.8px] text-white">
                Login
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
