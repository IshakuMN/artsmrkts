"use client";
import Link from "next/link";
import Image from "next/image";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import LottiePlayerHtml from "./lottiePlayerHtml";
import LottiePlayerHtmlRed from "./lottiePlayerHtmlRed";

const inter = Inter({ subsets: ["latin"] });
const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400"],
});

const Banner = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isBuyFigureOrange, setIsBuyFigureOrange] = useState(false);
  const [isSellFigureGreen, setIsSellFigureGreen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Проверяем, если currentPosition равен 1 или 3
    if (currentPosition === 1 || currentPosition === 3) {
      // Запускаем интервал
      const interval = setInterval(() => {
        setIsBuyFigureOrange((prev) => !prev);
        setIsSellFigureGreen((prev) => !prev);
      }, 2000);

      // Чистим интервал при размонтировании или изменении currentPosition
      return () => clearInterval(interval);
    }
  }, [currentPosition]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => (prevPosition + 1) % 5);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative rounded-b-[80px] bg-customGreyFour">
      <div className="bg-custom-gradient absolute z-10 h-full w-full rounded-b-[80px]"></div>
      <div className="mx-auto flex max-w-[1240px] flex-row gap-[123px]">
        <div className="relative z-20 mb-40 flex flex-1 flex-col pt-24">
          <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree">
            Reach your trading potential
          </h1>
          <p className="mt-5 text-[18px] leading-[21.6px] text-customBlackOne">
            Trade with the global recognized broker and get to unmatched trading
            conditions on the market
          </p>
          <div className="mt-11 flex flex-row gap-2">
            <Link href="/">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center rounded-[44px] bg-white px-[51.75px] py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
              >
                <span className="text-[20px] font-semibold leading-[24px] text-customBlue">
                  Try demo
                </span>
              </button>
            </Link>
            <Link href="/register">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center rounded-[44px] bg-customOrangeTwo px-[51.75px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
              >
                <span className="text-[20px] font-semibold leading-[24px] text-white">
                  Register now
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="f-full flex flex-1 flex-row justify-between">
          <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
            <span
              className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
            >
              323
            </span>
            <Image
              src="figure.svg"
              alt="figure"
              width={57}
              height={202}
              className="object-contain"
            />
          </div>
          <div className="animate-slide-down relative z-50 my-auto flex flex-col items-center gap-2 pt-20">
            <Image
              src="/redMask.svg"
              width={700}
              height={2500}
              className="absolute bottom-0 left-0"
            />{" "}
            <LottiePlayerHtmlRed />
          </div>
          <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
            <span
              className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
            >
              325
            </span>
            <Image
              src="figure.svg"
              alt="figure"
              width={74}
              height={260}
              className="object-contain"
            />
          </div>
          <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
            <span
              className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
            >
              324
            </span>
            <Image
              src="figure.svg"
              alt="figure"
              width={57}
              height={202}
              className="object-contain"
            />
          </div>
          <div className="animate-slide-down relative z-50 my-auto flex flex-col items-center gap-2 pb-16">
            <Image
              src="/greenMask.svg"
              width={700}
              height={2500}
              className="absolute bottom-0 left-0"
            />
            <LottiePlayerHtml />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-row gap-5 px-4 pb-10 pt-[49px]">
        <div className="relative z-20 mr-[51px] flex flex-col gap-2">
          <Image
            src="trustpilot.svg"
            alt="trustpilot"
            width={139}
            height={50}
            className="object-contain"
          />
          <p className={`${inter.className} text-[12px] leading-[14.4px]`}>
            Based on 2,446 reviews
          </p>
        </div>
        <div className="flex flex-1 flex-row gap-1 pt-[13px]">
          <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-customGreyFour opacity-40"></div>
            <span
              className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className}`}
            >
              1+
            </span>

            <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
              Million
              <br />
              traders
            </p>
          </div>
          <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-customGreyFour opacity-40"></div>
            <Image
              src="licenses.svg"
              alt="licenses"
              width={20}
              height={26.25}
              className="relative z-20 object-contain"
            />
            <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
              Multiple regulatory <br />
              licenses
            </p>
          </div>
          <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-customGreyFour opacity-40"></div>
            <span
              className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className}`}
            >
              24/7
            </span>
            <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
              Customer
              <br />
              support
            </p>
          </div>
          <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-customGreyFour opacity-40"></div>
            <Image
              src="protection.svg"
              alt="protection"
              width={20}
              height={25}
              className="relative z-20 object-contain"
            />
            <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
              Client found
              <br />
              protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
