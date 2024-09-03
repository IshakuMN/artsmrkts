import Banner from "@/app/banner";
import Dialogue from "@/app/dialogue";
import Trade from "@/app/trade";
import AccountTypes from "@/app/accountTypes";
import MarketTrends from "@/app/marketTrends";
import Tools from "@/app/tools";
import TradeTable from "./tradeTable";
import MobileScroll from "./mobileScroll";
import Cards from "./cards";
import Ticker from "./ticker";

export default function Home() {
  return (
    <main className="relative">
      <Dialogue />
      <Banner />
      <Ticker />
      <Cards />
      <MobileScroll />
      <Trade />
      <TradeTable />
      <AccountTypes />
      <Tools />
      <MarketTrends />
    </main>
  );
}
