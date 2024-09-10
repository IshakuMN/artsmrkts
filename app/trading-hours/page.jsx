'use client';
import Questions from "./questions";
import Practice from "./practice";
import TradeArtsmrkts from "./tradeArtsmrkts";
import TradingSessionsForex from "./tradingSessionsForex";
import TradingSessions from "./tradingSessions";
import Banner from "./banner";
import TradingHoursTable from "./table";
import  faqDataOne  from "../utils/faqData1";


export default function Page() {
    return (
        <main className="relative">
           <Banner />
            <TradingHoursTable />
            <TradingSessions/>
            <TradingSessionsForex />
            <Practice/>
            <TradeArtsmrkts/>
            <Questions faqData={faqDataOne} />
        </main>
    );
}
