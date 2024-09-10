"use client";
import React, {useContext, useState} from "react";
import faqDataFour from "../../utils/faqData4";
import Questions from "../../trading-hours/questions";
import MobileAppSection from "../mobileAppSection";
import TradeSection from "../tradeSection";
import ForexMarketConditions from "./forexMarketConditions";
import RegulationsSection from "../RegulationsSection";
import ForexSection from "./forexSection";
import indices from "../../utils/indices";
import Nav from "../navPage";

export default function Page() {

    return (
            <main className="relative">
                <Nav/>
                <TradeSection
                    title="Trade Indices with Top Trading Conditions"
                    description="Dominate the indices market with JustMarkets with trading conditions that align with your strategic approach."
                    imgSrc="/schedule3.png"
                    imgAlt="Schedule"
                />
                <ForexSection/>
                <RegulationsSection
                    title="Forex market spreads and swaps"
                    blocks={[
                        {title: 'Indices', content: indices},
                    ]}
                />
                <ForexMarketConditions/>
                <MobileAppSection/>
                <Questions faqData={faqDataFour}/>
            </main>
    );
}
