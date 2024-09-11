"use client";
import React from "react";
import Image from "next/image";


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
                    trading. It serves as a trader&apos;s app, providing everything needed to operate in the Forex market.
                    Preferred by approximately 80% of traders, MetaTrader 4 is user-friendly and easy to learn. It
                    allows you to monitor <Link href="/" className="text-customBlueOne">trading accounts</Link>, execute trades, analyze the market, and much more.
                </p>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">CMetaTrader 4
                        Android</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour mb-6">Similar to the traditional
                        desktop terminal, the MetaTrader mobile application provides traders with access to the Forex
                        market, with the added advantage of managing transactions from anywhere. The app uses minimal
                        internet traffic and even supports offline trading. MetaTrader mobile apps are fully compatible
                        with the desktop version, allowing traders to open an order on a computer and manage it later
                        from a smartphone, or vice versa.
                    </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">MetaTrader 4 for Android is a modern
                        solution for traders who have high expectations for mobile applications. It offers a simple,
                        user-friendly interface, fast performance, and supports a wide range of devices. To start
                        trading on MetaTrader 4 for Android, simply download the app, select Artsmrkts from the list of
                        brokers, and log in with your credentials or open a new demo account. The entire market is now
                        at your fingertips!
                    </p>
                </div>
                <div className="flex flex-row gap-11">
                    <Image src="/telephone1.png" alt="telephone" width={395} height={487} className="object-contain"/>
                    <div className="flex flex-col">
                        <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">The Benefits
                            of
                            MT4 for Android App:</p>
                        <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2 max-w-[841px]">
                            <li>Benefits of MT4 for PC</li>
                            <li>Manage your trading account with ease: open, close, and modify orders instantly or with
                                market execution using one-click trading.
                            </li>
                            <li>Analyze market data across 9 timeframes, from minute-by-minute updates to long-term
                                trends.
                            </li>
                            <li>Customize charts with various color schemes, indicators, and graph types for better
                                readability.
                            </li>
                            <li>Automate your strategies using expert advisors or by creating your own scripts with
                                MQL4.
                            </li>
                            <li>Stay informed with market depth analysis tools and real-time news updates.</li>
                            <li>Get trading signals from top traders to replicate their success, and seamlessly
                                integrate
                                your tools and data sources for a complete trading solution.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">How to Install
                        MetaTrader 4 for Android?</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">The mobile application can be
                        downloaded in two ways: from the broker's website or from Google Play. To start trading:</p>
                    <ul className="text-[20px] leading-[24px] text-customBlackFour list-decimal ml-8 py-2">
                        <li>Open the application on your device.
                        </li>
                        <li>Select "Log in to an existing account" (if you haven't opened a trading account yet, visit
                            the broker's official website to complete the registration process).
                        </li>
                        <li>Choose a server.
                        </li>
                        <li>Enter your login (account number) and password.
                        </li>
                    </ul>
                    <p className="text-[20px] leading-[24px] text-customBlackFour mb-6">With the MetaTrader 4 you can
                        access the full range of trading features: manage trading positions, monitor the currency market
                        and current quotes, and perform technical analysis directly from your mobile device.</p>

                </div>
            </section>
        </main>
    );
}
