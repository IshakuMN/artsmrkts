"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileAppSection from "../mobileAppSection";
import Banner from "./banner";
import Questions from "../trading-hours/questions";
import faqDataFive from "../utils/faqData5";
import FormCall from "../formCall";
import Help from "../help";
import AccountTypesTwo from "../accountTypesTwo";
import StatisticsSection from "../statisticsSection";

const cardItems = [
    {
        title: "Clients Funds Protection",
        image: "/protection.png",
        link: "/client-protection",
    },
    {title: "Market owerview", image: "/document2.png", link: "/markets-news",},
    {title: "Forex Calculator", image: "/Calculator.png", link: "/calculator",},
    {title: "Economic calendar", image: "/calendar.png", link: "/calendar",},
];
export default function Page() {
    return (
        <main className="relative">
            <Banner/>
            <section className="relative mx-auto my-14 flex max-w-screen-xl flex-row gap-5">
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col flex-1 p-8 gap-6">
                        <div className="flex flex-row">
                            <p className="text-[100px] font-semibold leading-[120px] text-customOrange">1</p>
                            <Image src="/one.svg" alt="one" width={99} height={116} className="object-contain"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Sign up</p>
                            <p className="text-[20px] font-medium leading-[24px] text-customBlackOne">Fill out the
                                registration form with your personal information and verify your identity. Once your
                                documents are approved, your account will be fully activated, and you&apos;ll be ready
                                to start
                                trading.</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-8 gap-6">
                        <div className="flex flex-row">
                            <p className="text-[100px] font-semibold leading-[120px] text-customOrange">2</p>
                            <Image src="/two.svg" alt="two" width={99} height={116} className="object-contain"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Fund</p>
                            <p className="text-[20px] font-medium leading-[24px] text-customBlackOne">Artsmrkts offers a
                                variety of deposit methods to suit your needs. Select the most convenient option from
                                our list of fast payment providers, fund your trading account, and get ready to dive
                                into the forex markets!</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-8 gap-6">
                        <div className="flex flex-row">
                            <p className="text-[100px] font-semibold leading-[120px] text-customOrange">3</p>
                            <Image src="/three.svg" alt="three" width={99} height={116} className="object-contain"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Trade</p>
                            <p className="text-[20px] font-medium leading-[24px] text-customBlackOne">Begin live trading
                                with CFDs across four asset classes: Forex, Metals, Indices, and Energy.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="relative mx-auto my-11 flex max-w-screen-xl flex-row rounded-3xl bg-customGreyFour h-[456px]">
                <div className="bg-custom-gradient-trading-three absolute z-10 h-full w-full rounded-3xl"></div>
                <div className="relative z-20 flex flex-1 flex-col my-20 overflow-hidden max-w-[973px] mx-auto">
                    <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive mb-6">
                        Why choose Artsmrkts as your broker?
                    </h3>
                    <p className="text-[20px] font-medium leading-[24px] text-customBlackFive mb-14">With Artsmrkts you
                        can experience the best in order execution and trading technology through our live trading
                        accounts, alongside powerful trading tools and expert analysis.</p>
                    <StatisticsSection color={true}/>
                </div>
            </section>
            <section className="mx-auto max-w-screen-xl py-16">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cardItems.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div
                                className="flex max-w-[320px] items-center justify-between rounded-2xl border bg-[#FAFAFB] px-6"
                            >
                                <span className="text-lg">{item.title}</span>
                                <Image src={item.image} width={100} height={100} alt={item.title}/>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <MobileAppSection/>
            <AccountTypesTwo/>
            <Questions faqData={faqDataFive}/>
            <section
                className="relative mx-auto mb-20 mt-16 flex max-w-[1240px] flex-row rounded-3xl bg-customGreyFour h-[456px]">
                <div className="bg-custom-gradient-trading-three absolute z-10 h-full w-full rounded-3xl"></div>
                <div className="relative z-20  ml-36 mt-32 flex flex-1 flex-col overflow-hidden">
                    <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive">
                        Open an account today and start trading like a pro!
                    </h3>
                    <Link href="/sign-up" className="relative z-20 mt-6 flex-1">
                        <button
                            type="button"
                            className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                        >
            <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">
              Sign up now
            </span>
                        </button>
                    </Link>
                </div>
                <Image
                    src="/manmoney.png"
                    alt="manmoney"
                    width={643}
                    height={456}
                    className="relative z-20 object-contain"
                />
            </section>
            <Help/>
            <section>
                <div
                    className="flex flex-row items-center justify-between rounded-[44px] bg-customBlueSeven py-9 px-14 max-w-screen-xl mx-auto mt-11">
                    <p className="text-[32px] font-medium leading-[38.4px] text-customBlackOne">Need Help? Visit our
                        Help Section</p>
                    <Link href="/categories-and-articles" target="_blank" rel="noopener noreferrer">
                        <button type="button"
                                className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey">
                            <span
                                className="whitespace-nowrap text-[20px] font-semibold leading-[24px] text-customOrangeFive">Go to help center</span>
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
