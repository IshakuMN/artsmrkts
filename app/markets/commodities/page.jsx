"use client";
import React, {useState} from "react";
import faqDataThree from "../../utils/faqData3";
import Questions from "../../trading-hours/questions";
import MobileAppSection from "../mobileAppSection";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "../RegulationsSection";
import TradeSection from "../tradeSection";
import ForexSection from "./forexSection";
import metals from "../../utils/metals";
import oil from "../../utils/oil";
import Nav from "../navPage";

export default function Page() {


    return (
            <main className="relative">
                <Nav />
                <TradeSection
                    title="Top trading conditions for commodities"
                    description="Invest in premier commodities such as gold, silver, and oil with Artsmrkts"
                    imgSrc="/oil2.png"
                    imgAlt="Commodities trading"
                />
                <ForexSection/>
                <RegulationsSection
                    title="Forex market spreads and swaps"
                    blocks={[
                        {title: 'Metals', content: metals},
                        {title: 'Oil', content: oil}
                    ]}
                />
                <ForexMarketConditions/>
                <MobileAppSection/>
                <Questions faqData={faqDataThree}/>
            </main>
    );
}
