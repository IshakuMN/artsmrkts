"use client";
import React from "react";
import Image from "next/image";
import Banner from "./banner";
import HeroSection from "./heroSection";
import ButtonWithImage from "./buttonWithImage";
import Link from "next/link";
import MainSection from "./mainSection";


export default function Page() {
    return (
        <main className="relative">
            <Banner/>
            <HeroSection/>
            <section className="bg-white max-w-screen-xl mx-auto pt-16 pb-11 flex flex-col gap-8">
                <h2 className="text-[44px] leading-[52.8px] font-medium text-customBlackFour">Overview of MT4 for
                    PC</h2>

                <Image src="/schedule1.png" alt="schedule"
                       className="object-contain p-6 rounded-2xl bg-white w-full box-shadow-protecting" width={1280}
                       height={656}/>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">The Interface is
                        Divided into Five Key Sections:</p>
                    <ul className="text-[20px] leading-[24px] text-customBlackFour list-decimal ml-8 py-2">
                        <li>Menu Bar: Contains all the control elements, including buttons, switches, and sub-menus.
                            Here, you can manage trades via the "New Order" and "Autotrading" buttons, customize chart
                            appearances, test strategies, and more.
                        </li>
                        <li>Main Window: Displays real-time data on the pricing of your selected financial instruments.
                            You can scroll through the chart using the mouse wheel and switch between tabs at the
                            bottom.
                        </li>
                        <li>Session Manager: Lists all accounts, available indicators, advisors, and scripts. To deploy
                            a tool, simply drag it onto the main window.
                        </li>
                        <li>Currency Manager: Shows all available currencies and other trading instruments. You can
                            double-click any item to place an order or drag it onto the main window to generate a chart.
                        </li>
                        <li>Status Bar: Displays order statuses and other supplementary information like order history,
                            news, alerts, and mail.
                        </li>
                    </ul>

                </div>
                <Image src="/schedule2.png" alt="schedule"
                       className="object-contain p-6 rounded-2xl bg-white w-full box-shadow-protecting" width={1280}
                       height={656}/>
                <Image src="/schedule33.png" alt="schedule"
                       className="object-contain p-6 rounded-2xl bg-white w-full box-shadow-protecting" width={1280}
                       height={656}/>
            </section>
            <section className="bg-white max-w-screen-xl mx-auto pt-16 pb-11 flex flex-col gap-8">
                <h2 className="text-[44px] leading-[52.8px] font-medium text-customBlackFour">Chart Customizations with
                    MetaTrader 4 on PC</h2>

                <Image src="/schedule4.png" alt="schedule"
                       className="object-contain p-6 rounded-2xl bg-white w-full box-shadow-protecting" width={1280}
                       height={656}/>
                <Image src="/schedule5.png" alt="schedule"
                       className="object-contain p-6 rounded-2xl bg-white w-full box-shadow-protecting" width={1280}
                       height={656}/>
                <div className="flex flex-col mb-8">
                    <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">MetaTrader&apos;s
                        chart
                        on a PC is highly customizable. You can create chart templates to define:</p>
                    <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2">
                        <li>The chart&apos;s color scheme (including the option to design your own);</li>
                        <li>The chart type (bar, candlestick, or line);</li>
                        <li>The indicators and scripts applied to the chart.</li>
                    </ul>
                    <p className="text-[20px] leading-[24px] text-customBlackFour text-medium">Menu Bar: Contains all
                        the control elements, including buttons, switches, and sub-menus. Here, you can manage trades
                        via the "New Order" and "Autotrading" buttons, customize chart appearances, test strategies, and
                        more.</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour text-medium">Main Window: Displays
                        real-time data on the pricing of your selected financial instruments. You can scroll through the
                        chart using the mouse wheel and switch between tabs at the bottom.</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour text-medium">Currency Manager: Shows
                        all available currencies and other trading instruments. You can double-click any item to place
                        an order or drag it onto the main window to generate a chart.</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour text-medium">Status Bar: Displays
                        order statuses and other supplementary information like order history, news, alerts, and
                        mail.</p>
                </div>
            </section>
            <MainSection />
        </main>
    );
}
