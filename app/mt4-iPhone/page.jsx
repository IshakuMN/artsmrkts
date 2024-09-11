"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonWithImage from "../buttonWithImage";


export default function Page() {
    return (
        <main className="relative">
            <section className="max-w-screen-xl mx-auto pt-16 pb-11 flex flex-col">
                <div className="flex flex-row gap-4 mb-6">
                    <div
                        className="box-shadow-logo flex h-[58px] w-[58px] items-center justify-center rounded-lg border-[0.5px] border-solid border-customGreyOne bg-customWhiteOne">
                        <Image src="/MetaTrader.svg" alt="MetaTrader" width={35} height={35}
                               className=" object-contain"/>
                    </div>
                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour">MetaTrader 4 for
                        iPhone</h1>
                </div>
                <p className="text-[20px] leading-[24px] text-customBlackFour mb-6">The MetaTrader 4 trading platform,
                    developed by the trusted MetaQuotes Software Corporation, is a comprehensive solution for Forex
                    trading. It serves as a trader&apos;s app, providing everything needed to operate in the Forex
                    market.
                    Preferred by approximately 80% of traders, MetaTrader 4 is user-friendly and easy to learn. It
                    allows you to monitor <Link href="/" target="_blank" rel="noopener noreferrer"
                                                className="text-customOrangeTwo underline">trading accounts</Link>, execute trades,
                    analyze the market, and much more.
                </p>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">MetaTrader 4
                        iPhone </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour mb-6">Mobile applications have
                        revolutionized trading by offering round-the-clock access. MetaTrader 4 for iPhone, while
                        slightly simplified compared to its desktop counterpart, still includes all essential trading
                        functions.
                    </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Many traders use mobile apps
                        alongside their desktop platforms for added convenience. For instance, you can initiate a trade
                        on your computer and seamlessly continue on your iPhone. The platform also supports offline
                        mode, allowing you to view some information without an active internet connection.
                        To get started, select Artsmrkts from the list of brokers, enter your login details, or create a
                        new demo account. MetaTrader 4 for iPhone is one of the leading trading apps on iOS, giving you
                        instant access to the Forex market anytime, anywhere!
                    </p>
                </div>
                <div className="flex flex-row gap-11 mb-8">
                    <Image src="/telephone2.png" alt="telephone" width={395} height={487} className="object-contain"/>
                    <div className="flex flex-col">
                        <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">The Benefits
                            of MetaTrader 4 for iPhone:
                        </p>
                        <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2 max-w-[841px]">
                            <li>Trade from nearly anywhere</li>
                            <li>Access financial instruments across forex and other markets
                            </li>
                            <li>View real-time quotations of financial instruments</li>
                            <li>Employ 9 timeframes (M1, M5, M15, M30, H1, H4, D1, W1, MN1)
                            </li>
                            <li>Open, close, and modify market and pending orders</li>
                            <li>Trade directly from charts</li>
                            <li>Market execution</li>
                            <li>Use 30 technical analysis indicators</li>
                            <li>Review full trading history</li>
                            <li>Access an informational window displaying orders, trading history, mailbox, news, and
                                journal
                            </li>
                            <li>View real-time interactive charts with zoom, scroll, and customizable element colors
                                (bars, volumes, grid, etc.)
                            </li>
                            <li>Adjust graphical settings of technical indicators (color, line width)</li>
                            <li>Offline mode allows viewing of quotations, charts, current trading positions, and full
                                trading history without an Internet connection
                            </li>
                            <li>Low data usage</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">Where to Download
                        and How to Install MetaTrader 4 for iPhone?</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">MT4 for iPhone is available for
                        download from the App Store or directly from the broker&apos;s website. To begin trading:</p>
                    <ul className="text-[20px] leading-[24px] text-customBlackFour list-decimal ml-8 py-2">
                        <li>Launch the application on your device.</li>
                        <li>Log in to your existing account or create a new one. Note that the MT4 for iOS app only
                            allows demo account creation. For a real trading account, complete the registration process
                            on the broker&apos;s website.
                        </li>
                        <li>Select the appropriate server.</li>
                        <li>Enter your login (account number) and password.</li>
                    </ul>
                    <div className="max-w-[323px] mt-8">
                        <ButtonWithImage
                            text="Download for Iphone"
                            imgSrc="/apple.svg"
                            altText="apple"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
