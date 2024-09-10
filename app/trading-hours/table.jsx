import dataForex from "../utils/dataForex";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const TradingHoursTable = () => {

    const [activeIndexForex, setActiveIndexForex] = useState(1);

    const toggleOpenActiveForex = (index) => {
        setActiveIndexForex(activeIndexForex === index ? 1 : index);
    }

    const [isActive, setIsActive] = useState(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);


    return (
        <section className="mx-auto max-w-screen-xl py-11 flex flex-row gap-5">
            <div className="flex flex-col">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4">
                    Forex market hours and trading sessions
                </h2>
                <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mb-8">
                    Since JustMarkets offers trading not only FX currencies pairs, but also indices, shares, metals,
                    energies, trading hours of a single trading instrument may differ. Please see the schedule of
                    market hours for various trading instruments:
                </p>
                <ul className="flex flex-row justify-between bg-customGreyFive rounded-2xl">
                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px]  ${activeIndexForex === 0 ? 'bg-customBlueSix  text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(0)}
                    >
                        Fx Currency Pairs
                    </li>

                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px] text-customBlackSeven ${activeIndexForex === 1 ? 'bg-customBlueSix text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(1)}
                    >Metals
                    </li>
                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px] text-customBlackSeven ${activeIndexForex === 2 ? 'bg-customBlueSix text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(2)}
                    >Indices
                    </li>
                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px] text-customBlackSeven ${activeIndexForex === 3 ? 'bg-customBlueSix  text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(3)}
                    >Energies
                    </li>
                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px] text-customBlackSeven ${activeIndexForex === 4 ? 'bg-customBlueSix  text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(4)}
                    >Shares
                    </li>
                    <li
                        className={`py-2 px-6 text-[20px] font-medium leading-[24px] rounded-[40px] text-customBlackSeven ${activeIndexForex === 5 ? 'bg-customBlueSix  text-white' : 'bg-customGreyFive text-customBlackSeven'}`}
                        onClick={() => toggleOpenActiveForex(5)}
                    >Cryptocurrency
                    </li>
                </ul>
                <div className="flex flex-col gap-6 mt-6">
                    <table className="max-w-[933px] w-full ">
                        <thead className="border-b-[1px] border-solid border-customGrey">
                        <tr className="flex flex-row h-[104px]">
                            <th className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo max-w-[145px] w-full flex justify-center items-center">Name</th>
                            <th className=" max-w-[145px] w-full flex justify-center flex-col items-center">
                                <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">Monday</p>
                                <span className="text-[14px] text-customGreyEleven leading-[16.8px]">(GMT+3)</span>
                            </th>
                            <th className=" max-w-[145px] w-full flex justify-center flex-col items-center">
                                <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">Tuesday</p>
                                <span className="text-[14px] text-customGreyEleven leading-[16.8px]">(GMT+3)</span>
                            </th>
                            <th className=" max-w-[145px] w-full flex justify-center flex-col items-center">
                                <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">Wednesday</p>
                                <span className="text-[14px] text-customGreyEleven leading-[16.8px]">(GMT+3)</span>
                            </th>
                            <th className=" max-w-[145px] w-full flex justify-center flex-col items-center">
                                <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">Thursday</p>
                                <span className="text-[14px] text-customGreyEleven leading-[16.8px]">(GMT+3)</span>
                            </th>
                            <th className=" max-w-[145px] w-full flex justify-center flex-col items-center">
                                <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">Friday</p>
                                <span className="text-[14px] text-customGreyEleven leading-[16.8px]">(GMT+3)</span>
                            </th>
                        </tr>
                        </thead>
                        {activeIndexForex === 0 && (
                            <tbody>
                            {dataForex.currency.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.currency.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}
                        {activeIndexForex === 1 && (
                            <tbody>
                            {dataForex.metals.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.metals.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}
                        {activeIndexForex === 2 && (
                            <tbody>
                            {dataForex.indices.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.indices.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}
                        {activeIndexForex === 3 && (
                            <tbody>
                            {dataForex.energies.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.energies.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}
                        {activeIndexForex === 4 && (
                            <tbody>
                            {dataForex.shares.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.shares.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}
                        {activeIndexForex === 5 && (
                            <tbody>
                            {dataForex.cryptocurrency.map((item, index) => (
                                <tr
                                    key={item.name} // Используем item.name в качестве ключа для уникальности
                                    className={`h-[87px] flex flex-row ${index < dataForex.cryptocurrency.length - 1 ? 'border-b-[1px] border-solid border-customGrey' : ''}`}
                                >
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.name}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time1}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time2}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time3}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time4}
                                    </th>
                                    <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                                        {item.time5}
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        )}

                    </table>
                </div>
                <div className="flex flex-row"></div>
                <div className="flex flex-col gap-8 bg-customBlueSeven p-6 mt-11">
                    <p className="text-[20px] font-normal leading-[24px] text-customBlackOne">
                        JustMarkets is constantly improving its services and expanding the range of trading
                        instruments, so only the main tools are indicated above, and the list may be not full. If
                        you haven't found the necessary instrument in the table above, you may always check its
                        working time in the MT4/MT5 trading terminal → Specification of the needed trading
                        instrument.

                    </p>
                    <p className="text-[20px] font-normal leading-[24px] text-customBlackOne">
                        Please, pay attention, that quotes and trading may be unavailable during server maintenance
                        hours.

                    </p>
                    <p className="text-[20px] font-normal leading-[24px] text-customBlackOne">
                        Also, please note that the working hours of a trading instrument may change due to holidays
                        or other reasons. We publish all the changes in the trading schedule in Our news section.
                    </p>
                </div>
            </div>
            <div className="max-w-[305px] w-full flex flex-col">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-2.5">
                    Last Articles
                </h2>
                <Link href="/market-news">
                    <div
                        className="flex flex-row gap-2.5 mb-8 group items-center"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                <span className={`text-[20px] font-normal leading-[24px] transition-colors ${
                    isActive ? 'text-customBlackFour' : 'text-customBlue group-hover:text-customBlueTwo'
                }`}>
                    All articles
                </span>
                        <div className="relative">
                            {!isActive && (
                                <>
                                    <Image
                                        src="/arrowBlue.svg"
                                        alt="arrowBlue"
                                        height={4}
                                        width={40}
                                        className="object-contain group-hover:hidden"
                                    />
                                    <Image
                                        src="/arrowBlueHover.svg"
                                        alt="arrowBlueHover"
                                        height={4}
                                        width={72}
                                        className="object-contain hidden group-hover:block"
                                    />
                                </>
                            )}
                            {isActive && (
                                <Image
                                    src="/arrowActive.svg"
                                    alt="arrowActive"
                                    height={4}
                                    width={40}
                                    className="object-contain"
                                />
                            )}
                        </div>
                    </div>
                </Link>
                <div className="flex flex-col">
                    <div className="flex flex-col pt-4 px-8 pb-6 border-b-[1px] border-solid border-customGrey">
                        <span>2024.06.25</span>
                        <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Forex Trading
                            Mentor...</p>
                        <p className="text-[20px] font-normal leading-[24px] text-customBlackOne pt-2 pb-4">When
                            choosing a mentor, prioritize experience, teaching ability, transparency, compatibility,
                            accessibility, and reputation.</p>
                        <Link href="/press_markets_news_acticle_one">
                            <button type="button"
                                    className="flex cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                <span
                                    className="text-[14px] leading-[16.8px] text-customBlue font-semibold">Learn more</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pt-4 px-8 pb-6 border-b-[1px] border-solid border-customGrey">
                        <span>2024.06.25</span>
                        <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Fibonacci
                            Arcs</p>
                        <p className="text-[20px] font-normal leading-[24px] text-customBlackOne pt-2 pb-4">Fibonacci
                            Arcs are a technical analysis tool that predicts potential support and resistance levels
                            based on the Fibonacci sequence.</p>
                        <Link href="/press_markets_news_acticle_two">
                            <button type="button"
                                    className="flex cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                <span
                                    className="text-[14px] leading-[16.8px] text-customBlue font-semibold">Learn more</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col pt-4 px-8 pb-6 border-b-[1px] border-solid border-customGrey">
                        <span>2024.06.25</span>
                        <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Forex Day
                            Trading: You...</p>
                        <p className="text-[20px] font-normal leading-[24px] text-customBlackOne pt-2 pb-4">Unlock
                            the secrets of Forex day trading in 2024. Discover essential strategies, expert
                            insights, and top mistakes to avoid in our comprehensive guide.</p>
                        <Link href="/press_markets_news_acticle_one">
                            <button type="button"
                                    className="flex cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                <span
                                    className="text-[14px] leading-[16.8px] text-customBlue font-semibold">Learn more</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TradingHoursTable;