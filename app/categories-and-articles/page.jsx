"use client";
import HelpSection from "../HelpSection";
import Image from "next/image";
import { useState } from "react";
import "react-phone-number-input/style.css";
import FormCall from "../formCall";

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <main className="relative">
      <HelpSection />
      <section className="relative">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-11 pb-10 pt-16">
          <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">
            We are here to help
          </h2>
          <div className="flex h-[295px] flex-row gap-11">
            <div className="flex w-full flex-col gap-8">
              <div className="flex flex-row items-center justify-between rounded-[44px] bg-customGreyFour p-8">
                <div className="flex flex-row gap-6">
                  <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree">
                    <Image
                      src="dialogue.svg"
                      alt="dialogue"
                      width={36}
                      height={36}
                      className="h-9 object-contain"
                    />
                  </div>
                  <div className="flex max-w-80 flex-col gap-2">
                    <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">
                      Live chart
                    </p>
                    <p className="text-[16px] leading-[19.2px] text-customBlackOne">
                      Instant help from qualified support
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex h-12 cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                >
                  <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">
                    Open chat
                  </span>
                </button>
              </div>
              <div className="flex flex-row items-center justify-between rounded-[44px] bg-customGreyFour p-8">
                <div className="flex flex-row gap-6">
                  <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree">
                    <Image
                      src="call.svg"
                      alt="call"
                      width={26}
                      height={26}
                      className="h-9 object-contain"
                    />
                  </div>
                  <div className="flex max-w-80 flex-col gap-2">
                    <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">
                      Request a call back
                    </p>
                    <p className="text-[16px] leading-[19.2px] text-customBlackOne">
                      leave your details and the company&apos;s specialist will
                      call you back.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsActive(!isActive)}
                  className="flex h-12 cursor-pointer flex-row items-center justify-center gap-4 rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                >
                  <span className="whitespace-nowrap text-[20px] font-semibold leading-[24px] text-customOrangeFive">
                    Get a call
                  </span>
                  <Image
                    src="arrow5.svg"
                    alt="arrow"
                    width={17}
                    height={9}
                    className={`object-contain transition-transform ${isActive ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>
            <div className="relative flex w-full max-w-md flex-row overflow-hidden rounded-2xl p-6">
              <div className="bg-custom-gradient-categories absolute right-0 top-0 h-full w-full"></div>
              <Image
                src="/book.svg"
                alt="book"
                width={269}
                height={300}
                className="rigth-0 absolute left-0 object-contain"
              />
              <div className="relative z-20 ml-auto flex max-w-52 flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">
                    Download the Guides
                  </p>
                  <p className="text-[16px] leading-[19.2px] text-customBlackOne">
                    All PDF-instructions in one place. Lets start your trading
                    experience!
                  </p>
                </div>
                <button
                  type="button"
                  className="flex h-12 cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                >
                  <span className="whitespace-nowrap text-[20px] font-semibold leading-[24px] text-customOrangeFive">
                    Download PDF
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          {isActive && (
            <div className="flex max-w-[728px] flex-1 flex-col gap-8 rounded-2xl bg-customGreyTen px-11 py-14">
              <FormCall
                setFormSubmitted={setFormSubmitted}
                setIsActive={setIsActive}
              />
            </div>
          )}
          {!isActive && formSubmitted && (
            <div className="flex max-w-[728px] flex-row items-center gap-6 rounded-2xl border-[1px] border-solid border-customGrey bg-white px-8 py-4">
              <div className="bg-customGreenOne flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px]">
                <Image
                  src="arrow7.svg"
                  alt="call"
                  width={18}
                  height={15}
                  className="object-contain"
                />
              </div>
              <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">
                The call request has been successfully sent!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
