import Banner from "@/app/banner";
import Trade from "@/app/trade";
import AccountTypes from "@/app/accountTypes";
import MarketTrends from "@/app/marketTrends";
import Tools from "@/app/tools";
import TradeTable from "./tradeTable";
import MobileScroll from "./mobileScroll";
import Cards from "./cards";
import TradeScroll from "./tradeScroll";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <TradeScroll />
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
