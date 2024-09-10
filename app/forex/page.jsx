"use client";
import React, {useState} from "react";
import faqDataTwo from "../utils/faqData2";
import Questions from "../trading-hours/questions";
import MobileAppSection from "./mobileAppSection";
import TradeForexSection from "./tradeForexSection";
import WhyChooseArtsmrkts from "./whyChooseArtsmrkts";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "./RegulationsSection";

export default function Page() {
    const [activePage, setActive] = useState(1)

    return (
        <main className="relative">
            <section className="bg-customGreyFour pt-6 pb-2">
                <div className="flex flex-row max-w-screen-xl mx-auto gap-2">
                    <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(1)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 1 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 1 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Forex</p>
                    </div>
                    <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(2)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 2 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 1 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Commodities</p>

                    </div>
                    <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActive(3)}>
                        <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 3 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                        <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 2 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Indices</p>
                    </div>
                    <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer">
                        <p className="text-[16px] font-semibold leading-[19.2px] text-customGrey">Stocks (soon)</p>
                    </div>
                </div>
            </section>
            <TradeForexSection/>
            <WhyChooseArtsmrkts/>
            <RegulationsSection/>
            <ForexMarketConditions/>
            <MobileAppSection/>
            <Questions faqData={faqDataTwo}/>
        </main>
    );
}
