"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <footer className="bg-custom-gradient-two">
      <div className="mx-auto max-w-[1240px] pb-[91px] pt-[100px]">
        <div className="mb-16 flex flex-row gap-2.5">
          <div
            className=" flex h-[61px] w-[61px] items-center justify-center"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={41}
              height={28}
              className="object-contain"
            />
          </div>

          <p className="w-40 text-[20px] font-bold leading-[24px] text-customBlackOne">
            The best forex broker
          </p>
        </div>
        <div className="mb-[101px]">
          <div className="flex flex-row gap-11">
            <div className="flex flex-1 flex-col justify-between gap-2">
              <div className="flex flex-row gap-4 h-[243px]">
                <div className="flex w-[111px] flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Company
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/why-artsmrkts"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Why Artsmrkts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/license-regulations"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      License & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clients-protection"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Clients fund protection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/welcome-bonus"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Welcome Bonus
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/re-deposit-bonus"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Re-deposit bonus
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/refer-bonus"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Referral Bonus
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/career"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Career in Artsmrkts
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex w-[111px] flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Trading
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/trading-account-types"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading Account Types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-trading-account"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Open Trading Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mt4"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      MT4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Contact specifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading hours
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-row gap-4 h-[243px]">
                <div className="flex w-[111px] flex-col">
                  <p className="w-[111px] pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Markets & Tools
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/forex"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Forex
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/commodities"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Commodities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/stocks"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Stocks (soon)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trading-hours"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading hours
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/calculator"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/market-news"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Market News
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/economic-calendar"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Economic Calendar
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex w-[111px] flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Partnership
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/introduction-broker"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Introduction broker (IB)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/affilates"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Affilates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/master-ib"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Master IB
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-row gap-4 h-[243px]">
                <div className="flex w-[111px] flex-col">
                  <p className="w-[111px] pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Education
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/basics-trading"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Basics of Trading
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technical-analysis"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Technical analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/articles"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/forex-glossary"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Forex Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/market-news"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Market overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/daily-forecast"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Daily Forecast
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/webinar"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Webinar
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/educational-videos"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Educational Videos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-11">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <Image
                  src="/apple.svg"
                  alt="apple"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-[16px] leading-[19.2px] text-customBlackFour">
                  Apple Store
                </span>
              </Link>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <Image
                  src="/google.svg"
                  alt="google"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-[16px] leading-[19.2px] text-customBlackFour">
                  Google Play
                </span>
              </Link>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <Image
                  src="/android.svg"
                  alt="android"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="whitespace-nowrap text-[16px] leading-[19.2px] text-customBlackFour">
                  Android APK
                </span>
              </Link>
            </div>
            <div className="my-auto pt-[60px]">
              <Image
                src="/qrcodetwo.svg"
                alt="qrcodetwo"
                width={60}
                height={61}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mb-[101px] flex flex-row gap-9">
          <div className="flex w-[111px] flex-col">
            <p className="w-[111px] pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
              Legal{" "}
            </p>
            <div className="h-[1px] w-full bg-customBlueFour"></div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Artsmrkts Ltd, registration number 2023-00238, address: Syrakouson 9, Office 106, 3077, Limassol, Cyprus, is the Saint Vincent And the Grenadies company, which provides certain content and operates the business including in terms of processing payment transactions.

            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Artsmrkts Ltd Registered Office address: Fortgate Offshore Investment and Legal Services Ltd. Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Risk Warning: CFDs are complex instruments and come with a high risk of losing funds rapidly due to leverage.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              The vast majority of retail investors face losses when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your deposit. To ensure that you fully understand the risks associated with margin trading, pay attention to our Risk Disclosure.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              At Artsmrkts, most of withdrawals are processed instantly (under 1 minute). Once your funds leave our custody, it's up to your chosen payment provider to process the funds and credit your account.
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between border-t-[1px] border-customBlueFour pt-11">
          <ul className="flex flex-row gap-11">
            <li>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] text-customBlackOne"
              >
                Risk Disclosure
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] text-customBlackOne"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] text-customBlackOne"
              >
                AML Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] text-customBlackOne"
              >
                Sitemap
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row gap-2">
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "facebook"
                      ? "/facebookHover.svg"
                      : "/facebook.svg"
                  }
                  alt="facebook"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "facebook" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("facebook")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "instagram"
                      ? "/instagramHover.svg"
                      : "/instagram.svg"
                  }
                  alt="instagram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "instagram" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("instagram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={hoveredIcon === "in" ? "/inHover.svg" : "/in.svg"}
                  alt="in"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "in" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("in")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "telegram"
                      ? "/telegramHover.svg"
                      : "/telegram.svg"
                  }
                  alt="telegram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "telegram" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("telegram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={hoveredIcon === "unix" ? "/unixHover.svg" : "/unix.svg"}
                  alt="unix"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "unix" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("unix")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
