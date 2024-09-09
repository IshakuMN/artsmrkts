'use client';

import Link from "next/link";
import Image from "next/image";

export default function Page() {


    return (
        <main className="relative">
            <section className="mx-auto flex max-w-screen-xl flex-col pt-16 pb-11 gap-11">
                <div className="flex flex-row gap-2">
                    <Link href="/market-news" className="flex flex-row gap-2 cursor-pointer">
                        <p className="text-[16px] leading-[19.2px] text-customGreyEleven hover:text-customOrangeThree active:text-customOrange">Market
                            overview</p>
                    </Link>
                    <div className="flex flex-row gap-2">
                        <Image src="arrow.svg" alt="arrow" width={8} height={8} className="object-contain rotate-90"/>
                        <p className="text-[16px] leading-[19.2px] text-customOrangeThree">The Analytical Overview
                            of...</p>
                    </div>
                </div>
                <h1 className="text-customBlackFour font-medium text-[44px] leading-[52.8px]">The Analytical Overview of
                    the Main Currency Pairs on Japan’s leading indicators point to economic growth. Typhoon disrupted
                    the work of the Hong Kong stock exchange</h1>
                <div className=" flex flex-col gap-5">
                    <p className="text-[20px] leading-[24px] text-customBlackFour">At Thursday’s close, the Dow Jones
                        Index (US30) was down 0.54%, while the S&P 500 Index (US500)
                        was down 0.30%. The NASDAQ Technology Index (US100) closed positive 0.25%. The S&P 500 index
                        (US500) and the Dow Jones (US30) fell to 2-week lows. Signs of weakness in the US labor market
                        added to concerns about the economy’s growth and negatively impacted stocks on Thursday after
                        August ADP employment data showed employers added the fewest jobs in 3 years. Stocks also came
                        under pressure after the ISM Services Business Activity Index for August unexpectedly rose.</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Today, the US will release labor
                        market data for August. Economists expect the US economy added
                        164,000 jobs in June after 114,000 in the previous month. The weaker-than-expected data for July
                        caused turbulence in the market, instilling fears of a possible recession in the US. Therefore,
                        any signs of a weakening labor market could revive fears about the prospect of a recession and
                        cause further market turmoil. It should also be noted that historically, September and October
                        can be volatile for stocks and indices. Such a scenario could hurt both the US dollar and stock
                        indices. Typically, these instruments are in inverse correlation, but in this economic
                        situation, they could fall in sync. A strong labor market report would indicate that the economy
                        is moving toward a soft landing, which would be positive for the indices.
                    </p>
                    Equity markets in Europe were mostly declining yesterday. Germany’s DAX (DE40) decreased by 0.08%,
                    France’s CAC 40 (FR40) closed down 0.92%, Spain’s IBEX 35 (ES35) was up 0.53%, and the UK’s FTSE 100
                    (UK100) closed down 0.34%.
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Equity markets in Europe were mostly
                        declining yesterday. Germany’s DAX (DE40) decreased by
                        0.08%, France’s CAC 40 (FR40) closed down 0.92%, Spain’s IBEX 35 (ES35) was up 0.53%, and the
                        UK’s FTSE 100 (UK100) closed down 0.34%.
                    </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">German industrial production fell by
                        2.4% month-on-month in July 2024, compared to market
                        estimates of a 0.3% drop and following an upwardly revised 1.7% rise in the previous month. It
                        was the third straight year-on-year decline. Germany’s trade surplus narrowed to €16.8 billion
                        in July 2024 from €20.4 billion in June, well below estimates of €21 billion. It was the
                        smallest trade surplus since December 2022, as exports rose less than imports.
                    </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">WTI crude futures were trading around
                        $69.4 a barrel on Friday and could fall sharply over the
                        week due to demand concerns in major oil markets. Recent data from China and the US showed
                        weakness in the manufacturing sectors, adding to concerns about slowing demand. In addition, a
                        potential increase in oil supplies from Libya put downward pressure after signals that political
                        factions in Libya are close to an agreement. However, some relief came from an unexpectedly
                        large decline in US crude oil inventories. EIA data showed that US crude inventories fell by 6.9
                        million barrels last week, well above market expectations of a 1.1 million barrel decline,
                        marking the ninth consecutive decline in crude inventories in the last ten months.
                    </p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Asian markets were predominantly down
                        yesterday. Japan’s Nikkei 225 (JP225) decreased by 1.05%,
                        China’s FTSE China A50 (CHA50) added 0.01%, Hong Kong’s Hang Seng (HK50) was down 0.07%, and
                        Australia’s ASX 200 (AU200) was positive 0.40%.
                    </p>
                    <p className='text-[20px] leading-[24px] text-customBlackFour'>Hong Kong’s stock market was closed
                        on Friday after super typhoon Yagi. The Weather Bureau
                        declared the third alert level on Thursday night, and it may remain in effect until noon local
                        time. At the same time, that said that if alert level number 8 is downgraded in the afternoon,
                        there will be no trading during the day.
                    </p>
                    <p className='text-[20px] leading-[24px] text-customBlackFour'>Japan’s Leading Economic Index
                        indicators, which are used to gauge the economic outlook several
                        months ahead on data such as job offers and consumer sentiment, rose to 109.5 in July 2024 from
                        a marginally revised 109.1. The rebound came on the back of growth in the services sector in
                        July, while consumer confidence improved to its highest level in three months. This is positive
                        data for the Bank of Japan’s tightening policy.
                    </p>
                    <p className='text-[20px] leading-[24px] text-customBlackFour'>S&P 500 (US500) 5,503.41 −16.66
                        (−0.30%)</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">Dow Jones (US30) 40,755.75 −219.22
                        (−0.54%)</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">DAX (DE40) 18,576.50 −15.35
                        (−0.083%)</p>
                    <p className="text-[20px] leading-[24px] text-customBlackFour">FTSE 100 (UK100) 8,241.71 −27.89
                        (−0.34%)</p>
                    <p className='text-[20px] leading-[24px] text-customBlackFour'>USD Index 101.06 −0.30 (−0.30%)</p>
                </div>
                <div className=" flex flex-col gap-6 ">
                    <h2 className="text-[32px] leading-[38.4px] text-customBlackFour">News feed for: 2024.09.06</h2>
                    <div className="ml-2">
                        <ul className="flex flex-col gap-2 list-disc pl-2 text-[20px] leading-[24px] text-customBlackFour">
                            <li className="text-[20px] li-[24x] text-customBlackFour">German Industrial Production (m/m)
                                at 09:00 (GMT+3);
                            </li>
                            <li>German Trade Balance (m/m) at 09:00 (GMT+3);</li>
                            <li>Eurozone GDP (q/q) at 12:00 (GMT+3);</li>
                            <li>US Nonfarm Payrolls (m/m) at 15:30 (GMT+3);</li>
                            <li>US Unemployment Rate (m/m) at 15:30 (GMT+3);</li>
                            <li>Canada Unemployment Rate (m/m) at 15:30 (GMT+3);</li>
                            <li>US FOMC Member Williams at 15:45 (GMT+3);</li>
                            <li>Canada Ivey PMI (m/m) at 17:00 (GMT+3).</li>
                        </ul>
                    </div>
                    <p className="text-[20px] leading-[24px] text-customBlackFour"> This article reflects a personal
                        opinion and should not be interpreted as an investment advice,
                        and/or offer, and/or a persistent request for carrying out financial transactions, and/or a
                        guarantee, and/or a forecast of future events.
                    </p>
                </div>
            </section>
            <section className="bg-custom-gradient-license-two pt-16 pb-20">
                <div className="relative mx-auto max-w-screen-xl">
                    <div
                        className="flex flex-row border-[1px] border-solid border-customGrey bg-customGreyFour rounded-[44px] overflow-hidden pr-[94px] bg-radial-gradient-article">
                        <div
                            className="absolute z-10 bottom-0 right-0 w-full h-full bg-radial-gradient-article "></div>
                        <div
                            className="flex flex-col pt-[116px] pl-[153px] pr-[29px]  pb-[98px] relative z-20">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackFive  mt-8 mb-2">Take
                                your
                                trading to the next level
                            </h3>
                            <p className="text-[20px] leading-[24px] text-customBlackFive  mb-8">Start your trading
                                journey
                                with a globally recognized broker that provides superior spreads, execution, and
                                service.</p>
                            <Link href="/">
                                <button
                                    type="button"
                                    className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                                ><span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Try free demo</span>
                                </button>
                            </Link>
                        </div>
                        <Image src="/gold3.png" alt="gold3" height={380} width={454}
                               className="object-contain relative z-20 -bottom-10 "/>
                    </div>
                </div>
            </section>
        </main>
    )
        ;
}
