import Image from "next/image";

const TradingSessionsForex = () => {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-6 pt-15 pb-12">
            <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour">Trading sessions in
                Forex</h2>
            <div className="flex flex-row gap-14">
                <Image src="/planet2.png" alt="planet" height={248} width={453} className="object-contain"/>
                <div className="flex flex-col">
                    <div
                        className="flex flex-col gap-2 pt-4 pl-8 pb-6 border-b-[1px] border-solid border-customGrey">
                        <h3 className="text-[20px] font-bold leading-[24px] text-customBlackOne">European trading
                            session</h3>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackOne">The opening of
                            the European session starts in financial centers such as Frankfurt, Zürich, and Paris.
                            Trading gets even more active when it comes to London. The activity fades away during
                            lunchtime but then resumes by evening. Fairly strong volatility may be noticed during
                            the European session because the European zone has a large money turnover.</p>
                    </div>
                    <div
                        className="flex flex-col gap-2 pt-4 pl-8 pb-6 border-b-[1px] border-solid border-customGrey">
                        <h3 className="text-[20px] font-bold leading-[24px] text-customBlackOne">
                            American trading session</h3>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackOne">The most active
                            time in the foreign exchange market is the beginning of the American session because it
                            reaches the opening hours in New York and the renewal of trading in Europe. Fundamental
                            news of high importance is released at the beginning of the American session. It is
                            characterized by high activity especially on Friday before the trading is closed.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col gap-2 py-4 px-8">
                    <h3 className="text-[20px] font-bold leading-[24px] text-customBlackOne">Pacific trading
                        session</h3>
                    <p className="text-[16px] font-normal leading-[19.2px] text-customBlackOne">Forex starts its
                        working hours when the Pacific session opens on Monday local time. This session is
                        characterized by rather low volatility, and, as a matter of fact, this is the most peaceful
                        time in the market.</p>
                </div>
                <div className="flex flex-col gap-2 py-4 px-8">
                    <h3 className="text-[20px] font-bold leading-[24px] text-customBlackOne">Asian trading
                        session</h3>
                    <p className="text-[16px] font-normal leading-[19.2px] text-customBlackOne">The Asian session
                        follows the Pacific session. Currency pairs that include USD, EUR, JPY, and AUD are traded
                        actively during these hours. The high trading volume of AUD takes place due to the
                        intersection of the working time of this session with the Pacific one.</p>
                </div>

            </div>
        </section>
    )
}

export default TradingSessionsForex;