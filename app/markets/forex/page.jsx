"use client";
import React, {useContext, useState} from "react";
import faqDataTwo from "../../utils/faqData2";
import Questions from "../../trading-hours/questions";
import MobileAppSection from "../mobileAppSection";
import TradeSection from "../tradeSection";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "../RegulationsSection";
import ForexSection from "./forexSection";
import majors from "../../utils/majors";
import minors from "../../utils/minors";
import Nav from "../navPage";

export default function Page() {

    return (
            <main className="relative">
                <Nav/>
                <TradeSection
                    title="Trade Forex with Low & Stable Spreads"
                    description="Enter the world of global Forex trading and engage with top currency pairs, benefiting from highly competitive spreads."
                    imgSrc="/pic.png"
                    imgAlt="Forex trading"
                />
                <ForexSection/>
                <RegulationsSection
                    title="Forex market spreads and swaps"
                    blocks={[
                        {title: 'Majors', content: majors},
                        {title: 'Minors', content: minors}
                    ]}
                />
                <ForexMarketConditions/>
                <MobileAppSection/>
                <Questions faqData={faqDataTwo}/>
            </main>
    );
}
