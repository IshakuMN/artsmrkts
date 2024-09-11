import Image from "next/image";
import React from "react";

const Banner = () => {
    return (<section className="max-w-screen-xl mx-auto pt-16 pb-11 flex flex-col">
        <div className="flex flex-row gap-4 mb-6">
            <div
                className="box-shadow-logo flex h-[58px] w-[58px] items-center justify-center rounded-lg border-[0.5px] border-solid border-customGreyOne bg-customWhiteOne">
                <Image src="/MetaTrader.svg" alt="MetaTrader" width={35} height={35}
                       className=" object-contain"/>
            </div>
            <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour">MetaTrader 4 for
                PC</h1>
        </div>
        <p className="text-[20px] leading-[24px] text-customBlackFour mb-6">MetaTrader, developed by MetaQuotes
            and released in 2005, is a free Forex trading software widely regarded as one of the best trading
            platforms in the industry. Despite newer offerings, MetaTrader remains a top choice for traders.</p>
        <p className="text-[20px] leading-[24px] text-customBlackFour mb-8">The MT4 platform offers a
            user-friendly interface for efficient Forex trading. It enables you to monitor, manage, and optimize
            your trading accounts, supports indicators, expert advisors, and real-time market analysis tools,
            and allows you to create and share custom trading instruments with other users.</p>
        <div className="flex flex-col mb-8">
            <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">Who Uses MT4 for PC</p>
            <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2">
                <li>Forex traders who monitor the market and manage their orders;</li>
                <li>Forex brokers who process trades and communicate with clients,</li>
                <li>Market analysts who evaluate statistics and indicator data;</li>
                <li>PAMM account managers who handle and oversee multiple accounts;</li>
                <li>PAMM account holders who track their accounts and interact with managers—all benefit from
                    MetaTrader 4.
                </li>
            </ul>
            <p className="text-[20px] leading-[24px] text-customBlackFour">Overall, MetaTrader 4 for PC is a
                versatile tool suited for anyone interested in Forex. While it may require some customization,
                it offers extensive flexibility and accessibility.</p>
        </div>
        <div className="flex flex-col mb-8">
            <p className="mb-4 text-[32px] leading-[38.4px] text-customBlackFour text-medium">Benefits of MT4 for PC</p>
            <ul className="text-[20px] leading-[24px] text-customBlackFour list-disc ml-8 py-2">
                <li>Manage your trading account with ease: open, close, and modify orders instantly or with
                    market execution using one-click trading.
                </li>
                <li>Analyze market data across 9 timeframes, from minute-by-minute updates to long-term
                    trends.
                </li>
                <li>Customize charts with various color schemes, indicators, and graph types for better
                    readability.
                </li>
                <li>Automate your strategies using expert advisors or by creating your own scripts with MQL4.
                </li>
                <li>Stay informed with market depth analysis tools and real-time news updates.</li>
                <li>Get trading signals from top traders to replicate their success, and seamlessly integrate
                    your tools and data sources for a complete trading solution.
                </li>
            </ul>
        </div>
    </section>)
}
export default Banner;