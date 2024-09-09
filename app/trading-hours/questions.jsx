import Image from "next/image";
import {useState} from "react";

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-11 pt-[100px] pb-10">
            <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4">Frequently asked
                questions</h2>

            {/* First FAQ Block */}
            <div className="flex flex-col gap-2">
                <div
                    className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                    onClick={() => toggleOpen(0)}
                >
                    <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">When is the Forex
                        market open?</h3>
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={6}
                        className={`object-contain transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}
                    />
                </div>
                {openIndex === 0 && (
                    <div
                        className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen">
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">
                            The Forex market is open 24 hours a day, five days a week from 00:00:00 (GMT+3) Monday
                            to 23:59:59 (GMT+3) Friday.
                        </p>
                    </div>
                )}
            </div>

            {/* Second FAQ Block */}
            <div className="flex flex-col gap-2">
                <div
                    className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                    onClick={() => toggleOpen(1)}
                >
                    <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">Why is Forex closed
                        on weekends?</h3>
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={6}
                        className={`object-contain transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}
                    />
                </div>
                {openIndex === 1 && (
                    <div
                        className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen">
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">
                            Friday is the last day of the currency market operation, because large market
                            participants, including various financial institutions, large funds, companies, and
                            banks, are closing for the weekend.
                        </p>
                    </div>
                )}
            </div>

            {/* Third FAQ Block */}
            <div className="flex flex-col gap-2">
                <div
                    className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                    onClick={() => toggleOpen(2)}
                >
                    <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">What are Forex
                        trading sessions?</h3>
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={6}
                        className={`object-contain transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}
                    />
                </div>
                {openIndex === 2 && (
                    <div
                        className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen flex flex-col">
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">There are four
                            main Forex trading sessions:</p>
                        <ul className="ml-4 flex flex-col list-disc pl-2">
                            <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">Pacific
                                trading session – 00:00-09:00 (EET);
                            </li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">Asian
                                trading session – 02:00-12:00 (EET);
                            </li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">European
                                trading session – 10:00-19:00 (EET);
                            </li>
                            <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">American
                                trading session – 15:00-01:00 (EET).
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Fourth FAQ Block */}
            <div className="flex flex-col gap-2">
                <div
                    className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                    onClick={() => toggleOpen(3)}
                >
                    <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">What is EET?</h3>
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={6}
                        className={`object-contain transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}
                    />
                </div>
                {openIndex === 3 && (
                    <div
                        className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen">
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">
                            EET means Eastern European Time: GMT+2 in winter, GMT+3 in summer.
                        </p>
                    </div>
                )}
            </div>

            {/* Fifth FAQ Block */}
            <div className="flex flex-col gap-2">
                <div
                    className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                    onClick={() => toggleOpen(4)}
                >
                    <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">What is the best time
                        of the day to trade Forex?</h3>
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={6}
                        className={`object-contain transition-transform duration-300 ${openIndex === 4 ? 'rotate-180' : ''}`}
                    />
                </div>
                {openIndex === 4 && (
                    <div
                        className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen">
                        <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">
                            The highest trading activity takes place during the European and American sessions, so
                            these hours are considered the best time to trade. During this period, most transactions
                            are carried out, and trading spreads are the lowest.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Questions;