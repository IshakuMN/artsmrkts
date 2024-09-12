import Image from 'next/image';

const ForexMarketConditions = () => {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col py-16 pb-12">
            <div className="flex flex-row gap-16">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4 flex-1">
                    Forex market conditions
                </h2>
                <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mb-11 flex-1">
                    Forex is the largest and the most liquid financial market, with $5.5 trillion turnover in daily
                    transactions. It works 24/5 and brings every trader an endless amount of different financial
                    opportunities
                </p>
            </div>

            <div className="bg-custom-gradient-trading rounded-t-[80px] pt-16 px-[80px] flex flex-row gap-8">
                <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-8 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Forex trading
                                hours</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Our
                                operations with the Forex market work from Monday 00:02 until Friday 23:59 (GMT+3).</p>
                            <div className="flex flex-col">
                                <div
                                    className="flex flex-row border-b-[1px] border-solid border-customBlueTwo justify-between">
                                    <p className='text-[20px] font-normal leading-[19.2px] text-customGreyEleven mx-8 max-w-[220px] w-full h-[116px] flex items-center justify-center flex-1'>Instrument</p>
                                    <p className='text-[20px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] flex items-center justify-center flex-1'>Open</p>
                                    <p className='text-[20px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] flex items-center  justify-center flex-1'>Close</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] max-w-[220px] w-full flex items-center justify-center flex-1'>XAGEUR,XAUAUD,
                                        XAUEUR,XPDUSD, XPTUSD,XAGUSD, XAUUSD</p>

                                    <div className="flex flex-col mx-8 h-[116px] justify-center flex-1 items-baseline">
                                        <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven'>Monday
                                            01:02</p>
                                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyThree">Daily
                                            break 23:59 – 01:02</p>
                                    </div>
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] flex items-center  justify-center flex-1'>Friday
                                        23:59</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] max-w-[220px] w-full flex items-center justify-center flex-1'>WTI,
                                        XNGUSD</p>
                                    <div className="flex flex-col mx-8 h-[116px] justify-center flex-1 items-baseline">
                                        <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven'>Monday
                                            01:02</p>
                                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyThree">Daily
                                            break 23:59 – 01:02</p>
                                    </div>
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] flex items-center  justify-center flex-1'>Friday
                                        23:59</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] max-w-[220px] w-full flex items-center justify-center flex-1'>BRENT</p>
                                    <div className="flex flex-col mx-8 h-[116px]  justify-center flex-1 items-baseline">
                                        <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven'>Monday
                                            01:02</p>
                                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyThree">Daily
                                            break 23:59 – 01:02</p>
                                    </div>
                                    <p className='text-[16px] font-normal leading-[19.2px] text-customGreyEleven mx-8 h-[116px] flex items-center  justify-center flex-1'>Friday
                                        23:59</p>
                                </div>
                            </div>
                            <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">All
                                timings are in server time (GMT+3)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Spreads</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">The spreads in the commodities market often change. The numbers shared above are averages from previous trading days. You can always see actual spreads right in the trading terminal. Spreads can increase during periods of low liquidity or high volatility. It all depends on the current market situation.
                            If you are interested in a specific spread for any trading instrument to be customized, feel free to contact us about it.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Swap-Free
                                accounts</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Artsmrkts offers swap-free accounts (also known as Islamic Forex accounts or Shariah Forex accounts). These accounts comply with Islamic religious beliefs. According to the Islamic religion, any business transaction in which one of the parties has to pay or receive some interest from another party is forbidden. Islamic Forex accounts are designed specifically for Muslims as swaps contravene their religious beliefs and to clients who don’t wish to be charged swap fees. Islamic accounts give their owners an opportunity to hold their positions for an unlimited amount of time (Trading Conditions Apply).</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Stop level</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Pay attention that the stop level values indicated in the table above are variable and might not be accessible for traders employing specific high-frequency strategies or utilizing Expert Advisors.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Fixed margin
                                requirements</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Margin
                            requirements
                            The client must abide the rules as declared on the Artsmrkts corporate website Contract
                            Specification section for each CFD, including the margin requirements; and the Client
                            shall provide and maintain the Initial Margin within such limits as the Company, at its
                            sole discretion, may determine, set, or update.</p>
                        <ul className="flex flex-col list-disc pl-5">
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For XAUUSD, XAGUSD, XAGEUR, XAUEUR, and XAUAUD, the maximum leverage is set at 1:3000.</li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For XPDUSD and XPTUSD, leverage is set at 1:100.</li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For BRENT, WTI, and XNGUSD, leverage is set at 1:200.</li>
                        </ul>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Margin requirements always remain fixed, except for specific periods of higher margin requirements.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Dynamic margin
                                requirements </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">The margin requirement for your account depends on the amount of leverage you select. Adjusting your leverage will result in corresponding changes to your margin requirements. Similarly, just as spreads can fluctuate based on market conditions, the leverage accessible to you may also shift. Several factors, detailed below, can lead to these variations.</p>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Leverage</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Shall mean a ratio in respect of Transaction Size and Initial Margin, 1:100 ratio means that in order to open a position, the Initial Margin required is one percent of the original contract value.Forex trading instruments may have different leverage value, depending on specific currency pair.</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">*Trading
                                    instruments can have different maximum leverage according to their
                                    specifications.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Economic
                                    news</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">If the market opens with a break off after a weekend or holidays, upon release of important economic and political news, or in the case of force majeure events; orders (sell stop, buy stop, stop loss) are fulfilled at the first available prices in the market.
                                    Even though such situations are not frequent, please be cautious when leaving pending orders for weekends and holidays or during news time.
                                    Placing stop orders prior to the release of financial news is not permitted, such orders may be rejected, deleted or filled at the best available market prices at that time.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Rollovers,
                                    weekends and holidays</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">An
                                    increased margin rule also applies to some trading instruments during rollovers,
                                    weekends, and public holidays. These instruments during this period are subject to
                                    lower leverage.</p>
                                <p> An increased margin rule also applies to some trading instruments during rollovers,
                                    weekends, and public holidays. These instruments during this period are subject to
                                    lower leverage.</p>
                                <p>Read more about the high margin requirements here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForexMarketConditions;
