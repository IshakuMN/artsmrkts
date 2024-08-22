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
          <Link href="/" rel="noopener noreferrer">
            <Image
              src="logo.svg"
              alt="logo"
              width={67}
              height={46}
              className="object-contain"
            />
          </Link>
          <p className="w-40 text-[20px] font-semibold leading-[24px] text-customBlackOne">
            The best forex broker
          </p>
        </div>
        <div className="mb-[101px]">
          <div className="flex flex-row gap-11">
            <div className="flex flex-1 flex-col justify-between gap-8">
              <div className="flex flex-row gap-4">
                <div className="flex w-[111px] flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Company
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading account types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Deposit and withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      VPS hosting
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
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Markets & Tools
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading account types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Deposit and withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      VPS hosting
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
            <div className="flex flex-1 flex-col justify-between gap-8">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Trading
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading account types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Deposit and withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      VPS hosting
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
                      Margin requirements & Leverage rules
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
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Markets
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading account types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Deposit and withdrawal
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
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
                    Platform
                  </p>
                  <div className="h-[1px] w-full bg-customBlueFour"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Trading account types
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      Deposit and withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className="text-[14px] leading-[16.8px] text-customBlackOne"
                    >
                      VPS hosting
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
                      Margin requirements & Leverage rules
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
            <div className="flex flex-col gap-11">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <Image
                  src="apple.svg"
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
                  src="google.svg"
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
                  src="android.svg"
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
                src="qrcodetwo.svg"
                alt="qrcodetwo"
                width={60}
                height={61}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mb-[101px] flex flex-row gap-9">
          <div className="flex w-[88px] flex-col">
            <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
              Legal{" "}
            </p>
            <div className="h-[1px] w-full bg-customBlueFour"></div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Just Global Markets Ltd., registration number 8427198-1, address:
              Office 10, Floor 2, Vairam Building, Providence Industrial Estate,
              Providence, Mahe, Seychelles, a company regulated by the
              Seychelles Financial Services Authority (FSA) under a Securities
              Dealer License number SD088.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Just Global Markets (MU) Limited, registration number 194590 GBC,
              address: The Cyberati Lounge, C/o Credentia International
              Management Ltd, Ground Floor, The Catalyst, Silicon Avenue, 40
              Cybercity, 72201 Ebène, Republic of Mauritius, an Investment
              Dealer (Full Service Dealer, Excluding Underwriting) regulated by
              the Financial Services Commission (FSC) in Mauritius under a
              License number GB22200881.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              GMFT Services Ltd, registration number HE 424491, address:
              Syrakouson 9, Office 106, 3077, Limassol, Cyprus, is the EU
              merchant company, which provides certain content and operates the
              business including in terms of processing payment transactions.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Risk Warning: CFDs are complex instruments and come with a high
              risk of losing funds rapidly due to leverage.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              The vast majority of retail investors face losses when trading
              CFDs. You should consider whether you understand how CFDs work and
              whether you can afford to take the high risk of losing your
              deposit. To ensure that you fully understand the risks associated
              with margin trading, pay attention to our Risk Disclosure.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              Restricted Jurisdictions: JustMarkets does not offer and does not
              provide services to residents and citizens of certain
              jurisdictions, including Australia, Canada, the EU and EEA, Japan,
              the United Kingdom, the United States of America, and countries
              sanctioned by the EU.
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne">
              ¹At JustMarkets, most of withdrawals are processed instantly
              (under 1 minute). Once your funds leave our custody, it's up to
              your chosen payment provider to process the funds and credit your
              account.
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
                      ? "facebookHover.svg"
                      : "facebook.svg"
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
                      ? "instagramHover.svg"
                      : "instagram.svg"
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
                  src={hoveredIcon === "in" ? "inHover.svg" : "in.svg"}
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
                      ? "telegramHover.svg"
                      : "telegram.svg"
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
                  src={hoveredIcon === "unix" ? "unixHover.svg" : "unix.svg"}
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
