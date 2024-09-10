import Image from 'next/image';

const ForexMarketConditions = () => {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col py-16 pb-12">
            <div className="flex flex-row gap-16">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4 flex-1">
                    Stock market conditions
                </h2>
                <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mb-11 flex-1">
                    The stock market offers a vast platform for global trading in company shares. By trading stocks, you
                    can take advantage of the movements in share prices, whether they trend upwards or downwards.
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
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Spreads in the
                            commodity market frequently float. The spreads mentioned above are averages from prior
                            trading days. Check our platform for current spreads.
                        </p>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Spreads may
                            increase during periods of low liquidity. This includes times such as daily breaks and may
                            continue until normal conditions resume.</p>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">The spreads in the
                            commodities market often change. The numbers shared above are averages from previous trading
                            days. You can always see actual spreads right in the trading terminal. Spreads can increase
                            during periods of low liquidity or high volatility. It all depends on the current market
                            situation.
                            Our best spreads are guaranteed on our Raw Spread account, where spreads start from 0.2
                            pips.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Swap-Free
                                trading</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Swap is the
                            interest fee charged on trading positions that remain open overnight. The swap rates vary
                            across different trading pairs. Swaps are applied at 22:00 GMT+3 each day, excluding the
                            weekend, until the position is closed. It is important to note that swaps on Wednesdays are
                            tripled to account for weekend funding costs.
                        </p>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">You won`t be
                            charged for the instruments marked “Extended Swap-free available” in the table above if you
                            have swap-free status.

                        </p>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">All customer
                            accounts from any country are automatically given swap-free status.</p>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">*Swap-free trading
                            is unavailable for the following instruments: XNGUSD, WTI, BRENT.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Stop level</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Pay attention that
                            the stop level values indicated in the table above are variable and might not be accessible
                            for traders employing specific high-frequency strategies or utilizing Expert Advisors.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Fixed margin
                                requirements</p>
                        </div>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Margin
                            requirements for our commodity trades are consistent but can change depending on your
                            leverage. The maximum leverage available will vary based on your account’s equity.
                        </p>
                        <ul className="flex flex-col list-disc pl-5">
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For XAUUSD,
                                XAGUSD, XAGEUR, XAUEUR, and XAUAUD, the maximum leverage is set at 1:3000.
                            </li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For XPDUSD
                                and XPTUSD, leverage is set at 1:100.
                            </li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">For BRENT,
                                WTI, and XNGUSD, leverage is set at 1:200.
                            </li>
                        </ul>
                        <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Margin
                            requirements always remain fixed, except for specific periods of higher margin
                            requirements.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-start my-8">
                        <div className="flex flex-row gap-2">
                            <Image src="/arrow8.svg" alt="arrow" height={16} width={16}
                                   className="object-contain m-1"/>
                            <p className="text-[24px] font-semibold leading-[28.8px] text-customBlue">Dynamic margin
                                requirements</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">The margin
                                requirement for your account depends on the amount of leverage you select. Adjusting
                                your leverage will result in corresponding changes to your margin requirements.
                                Similarly, just as spreads can fluctuate based on market conditions, the leverage
                                accessible to you may also shift. Several factors, detailed below, can lead to these
                                variations.</p>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Leverage</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">Maximum
                                    leverage changes based on your account’s equity:</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Economic
                                    news</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">From 5
                                    minutes before the publication of high-impact economic news until 5 minutes after,
                                    margin requirements for new positions opened on affected trading instruments are
                                    calculated with reduced maximum leverage.
                                </p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">You can
                                    find out when major economic news is due for release on our Economic calendar.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Rollovers,
                                    weekends and holidays</p>
                                <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">An
                                    increased margin rule also applies to some trading instruments during rollovers,
                                    weekends, and public holidays. These instruments during this period are subject to
                                    lower leverage.
                                </p>
                                <p> An increased margin rule also applies to some trading instruments during rollovers,
                                    weekends, and public holidays. These instruments during this period are subject to
                                    lower leverage.
                                </p>
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
