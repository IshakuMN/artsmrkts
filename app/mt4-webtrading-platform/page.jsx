"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour">Metatrader web
                        trading platform - MT4 online terminal</h1>
                </div>
                <p className="text-[20px] leading-[24px] text-customBlackFour">MetaTrader, developed by MetaQuotes
                    Software, is a leading online trading platform for the Forex market. Launched for Windows PC in
                    2005, it is widely regarded as one of the best trading platforms ever created. In addition to its
                    desktop version, MetaTrader is available for Android and iOS users.</p>
                <p className="text-[20px] leading-[24px] text-customBlackFour">For traders using Linux, Mac OS, Chrome
                    OS, or other unsupported systems, MetaQuotes introduced the web-based MetaTrader Web—often referred
                    to by users as WebTrader. This solution ensures that traders on various platforms can access the
                    powerful features of MetaTrader without being limited by their operating system.</p>
            </section>
            <section className="bg-custom-gradient-license-two pt-16 pb-20">
                <div className="relative mx-auto max-w-screen-xl">
                    <div
                        className="flex flex-row border-[1px] border-solid border-customGrey rounded-[44px] overflow-hidden justify-between">
                        <div
                            className="absolute z-10 bottom-0 right-0 w-full h-full opacity-10 bg-customGreyFifteen rounded-[44px]"></div>
                        <div className="flex flex-row justify-between w-full">
                            <div
                                className="flex flex-col gap-8 pt-[87px] pb-[112px] ml-[101px] max-w-[387px] relative z-20">
                                <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackFive">
                                    Use the Best Forex Web Terminal
                                </h2>
                                <div className="flex flex-row gap-8">
                                    <Link href="/">
                                        <button
                                            type="button"
                                            className="max-w-[323px] flex cursor-pointer flex-row gap-4 items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                                        ><span
                                            className="text-[20px] font-semibold leading-[24px] text-customOrangeFive whitespace-nowrap">Download for Iphone</span>
                                            <Image src="/window.svg" alt="windows" width={24} height={24}
                                                   className="object-contain"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 relative z-20 my-auto -right-3">
                                <div className="bg-white p-3 rounded-2xl box-shadow-protecting">
                                    <Image src="/google2.png" alt="google" height={44} width={42}
                                           className="object-contain relative z-20"/>
                                </div>
                                <div className="bg-white p-3 rounded-2xl box-shadow-protecting">
                                    <Image src="/safari.png" alt="safari" height={44} width={42}
                                           className="object-contain relative z-20"/>
                                </div>
                                <div className="bg-white p-3 rounded-2xl box-shadow-protecting">
                                    <Image src="/opera.png" alt="opera" height={44} width={42}
                                           className="object-contain relative z-20"/>
                                </div>
                                <div className="bg-white p-3 rounded-2xl box-shadow-protecting">
                                    <Image src="/firefox.png" alt="firefox" height={44} width={42}
                                           className="object-contain relative z-20"/>
                                </div>
                            </div>
                        </div>
                        <Image src="/mac.png" alt="macbook" height={456} width={491}
                               className="object-contain relative z-10"/>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto pt-16 pb-11 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                    <p className="text-[44px] leading-[52.8px] text-customBlackFour text-medium">What Makes MT4/5
                        WebTrader Exceptional</p>
                    <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2">
                        <li>Universal Support: Access MetaTrader from virtually any system with a modern web browser,
                            including Gentoo, Chrome OS, and FreeBSD.
                        </li>
                        <li>Powerful Features: Experience the full range of MT4/5 Desktop capabilities, including 9
                            timeframes, 30 indicators, graphical objects, and chart exporting.
                        </li>
                        <li>Desktop UI: Navigate and manage orders with a familiar interface that mirrors the desktop
                            version, including the same tabs, windows, and charts.
                        </li>
                        <li>One-Click Trading: Place orders instantly with a single click, ensuring you stay on top of
                            trends even on the 1M timeframe.
                        </li>
                        <li>Customizable Charts: Tailor your trading experience by adjusting color schemes, chart
                            elements, and indicators to suit your preferences.
                        </li>
                        <li>Full Forex Compatibility: Utilize both instant and market execution, set up delayed orders,
                            and apply stop loss and take profit features.
                        </li>
                        <li>Offline Capabilities: Access your data offline, including mail, trading history, and
                            pre-downloaded charts, even without an internet connection.
                        </li>
                    </ul>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Note: The WebTrader version does not
                        support expert advisors due to limited resource availability in web applications. If your
                        trading strategy relies heavily on these automated tools, you may need to use <Link href="/mt4" target="_blank" rel="noopener noreferrer"
                            className="text-customOrange underline">MetaTrader 4 PC</Link>.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-[32px] leading-[38.4px] text-customBlackFour text-medium">Why Use MetaTrader
                        Online</p>
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackFour">While most traders use Windows
                            PCs to run MetaTrader 4, which offers a robust and powerful trading experience, there are
                            specific situations where MetaTrader Web is the best option:</p>
                        <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2">
                            <li>High-Security Environment: For users who prefer not to install software to avoid
                                potential security risks, WebTrader offers a secure way to trade Forex without
                                compromising system safety. It’s ideal for locked-down computers where installations are
                                restricted.
                            </li>
                            <li>Budget-Friendly: Chromebooks and other low-cost devices can be a budget-friendly
                                alternative to traditional laptops, often priced under $100. While you can’t install
                                Windows on these devices, MetaTrader Web allows you to use them as portable trading
                                platforms.
                            </li>
                            <li>Temporary Access: If you need to access your trading account on a computer that’s not
                                yours, WebTrader provides a convenient solution. You won’t need to install or uninstall
                                desktop versions of MT4—just remember to clear cookies after use.
                            </li>
                        </ul>
                    </div>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Considerations: If you have a poor
                        internet connection, MetaTrader Web might not perform as well as MetaTrader 4 PC or mobile
                        versions, as WebTrader requires more data to be downloaded and uploaded.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-[32px] leading-[38.4px] text-customBlackFour text-medium">How to Use MetaTrader
                        Web at Artsmrkts</p>
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackFour">Artsmrkts supports MetaTrader Web
                            for both demo and live accounts, allowing you to use it as your primary trading platform or
                            alongside desktop and mobile solutions.</p>
                        <p className="text-[20px] leading-[24px] text-customBlackFour">To get started with WebTrader, you&apos;ll need to create an Artsmrkts account. Simply <Link href="/sign-in" target="_blank" rel="noopener noreferrer"
                            className="text-customOrange underline">sign up</Link> to
                            set up your account and begin trading online.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
