import Banner from "@/app/banner";
import Trade from "@/app/trade";
import AccountTypes from "@/app/accountTypes";
import MarketTrends from "@/app/marketTrends";
import Tools from "@/app/tools";
import TradeTable from "./tradeTable";
import MobileScroll from "./mobileScroll";
import Cards from "./cards";
import Ticker from "./ticker";
import AccountTypesTwo from "@/app/accountTypesTwo";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <Ticker />
      <Cards />
      <MobileScroll />
      <Trade />
      <TradeTable />
      <AccountTypesTwo />
      <Tools />
      <MarketTrends />
    </main>
  );
}
