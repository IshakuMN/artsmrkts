"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";

const Mobile = () => {
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const firstComponentRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const switchComponents = () => {
      setIsFirstVisible((prev) => !prev);
    };

    const startSwitching = () => {
      intervalRef.current = setInterval(switchComponents, 4000); // 2 seconds interval
    };

    const stopSwitching = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    const handleMouseEnter = () => {
      stopSwitching();
    };

    const handleMouseLeave = () => {
      startSwitching();
    };

    const firstComponent = firstComponentRef.current;
    if (firstComponent) {
      firstComponent.addEventListener("mouseenter", handleMouseEnter);
      firstComponent.addEventListener("mouseleave", handleMouseLeave);
    }

    startSwitching();

    return () => {
      if (firstComponent) {
        firstComponent.removeEventListener("mouseenter", handleMouseEnter);
        firstComponent.removeEventListener("mouseleave", handleMouseLeave);
      }
      stopSwitching();
    };
  }, []);

  return (
    <div className="mx-auto mt-4 max-w-7xl overflow-hidden">
      <div className="relative my-12 flex h-[603px]">
        <div
          ref={firstComponentRef}
          className={`absolute transition-all duration-1000 ease-in-out ${
            isFirstVisible
              ? "left-0 z-10"
              : "left-[1930px] z-0 -translate-x-full"
          }`}
        >
          <Mobile1 />
        </div>
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            isFirstVisible ? "left-[970px] z-0" : "left-0 z-10"
          }`}
        >
          <Mobile2 />
        </div>
      </div>
    </div>
  );
};

export default Mobile;

export const Mobile1 = () => {
  return (
    <div className="relative -z-20 h-[603px] w-[956px] flex-shrink-0 rounded-2xl border bg-[#F6F6F6]">
      <Image src="/twoPhones.png" width={412} height={676} className="" />
      <Image
        src="/redFallChat.png"
        width={956}
        height={603}
        className="absolute bottom-0 left-0 -z-10"
      />
      <h2 className="absolute right-64 top-12 w-96 text-4xl font-medium">
        Mobile application Metatrader 4
      </h2>
      <div className="absolute right-10 top-1/4 flex items-start gap-x-4">
        <Image src="/qrcode.png" width={180} height={180} />
        <div className="space-y-6">
          <p className="w-60 text-sm">
            MetaTrader4 mobile is very similar to MetaTrader4 for PC by its
            functionality. This mobile application supports most PC terminal's
            features (all trading functions, execution modes, as well as
            powerful technical analysis) except for the algorithmic trading
            functions.
          </p>
          <button className="rounded-full bg-customBlueFon px-6 py-2 text-white">
            view our platform
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-10 flex gap-x-6">
        <span className="flex flex-col items-center">
          <FaApple className="h-[30px] w-[30px]" />
          <span className="text-sm">Apple Store</span>
        </span>
        <span className="flex flex-col items-center">
          <BsGooglePlay className="h-[30px] w-[30px]" />
          <span className="text-sm">Google Play</span>
        </span>
        <span className="flex flex-col items-center">
          <GrAndroid className="h-[30px] w-[30px]" />
          <span className="text-sm">Android APK</span>
        </span>
      </div>
    </div>
  );
};

export const Mobile2 = () => {
  return (
    <div className="relative h-[603px] w-[956px] flex-shrink-0 rounded-2xl border bg-[#F6F6F6]">
      <div className="ml-16 mt-24 space-y-10">
        <h2 className="w-96 text-4xl font-medium">
          Trade on the go. Anywhere, anytime
        </h2>
        <div className="flex items-center gap-x-2">
          <Image src="/qrcodeSmall.png" width={50} height={50} />
          <div>
            <p>Scan to Download the App</p>
            <h2 className="text-2xl font-medium">IOS and Android</h2>
          </div>
        </div>
      </div>
      <Image
        src="/mobileMoney.png"
        width={938}
        height={650}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};
