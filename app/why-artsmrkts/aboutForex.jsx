import Image from "next/image";

const AboutForex = () => {
    return (
        <section className="rounded-t-[80px]  pt-24 relative">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col w-full relative">
                    <Image src="/man counts money.png" alt="man counts money" height={331} width={497} className="object-cover absolute right-0 bottom-0"/>
                    <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Here’s how trading
                        Forex with Artsmrkts can enhance <br/> your trading experience:</h2>
                    <ul className="flex flex-col pt-11 pb-10">
                        <li className="flex flex-row">
                            <div className="text-[20px] leading-[24px] h-36 p-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                Best-in-class customer service, including live chat
                            </div>
                            <div className="text-[20px] leading-[24px] h-36 p-8 max-w-[307px] w-full border-r-[1px] border-customGrey border-solid">
                                Islamic (Swap Free) accounts
                            </div>
                            <div className="text-[20px] leading-[24px] h-36 p-8">
                                Multiple asset trading and <br/>ECN accounts on MT4
                            </div>
                        </li>
                        <li className="flex flex-row border-t-[1px] border-customGrey border-solid">
                            <div className="text-[20px] leading-[24px] h-36 p-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                One-hour response time for sales and support requests
                            </div>
                            <div className="text-[20px] leading-[24px] h-36 p-8 max-w-[307px] w-full border-r-[1px] border-customGrey border-solid">
                                Superior quality of execution (speed and reliability)
                            </div>
                            <div className="text-[20px] leading-[24px] h-36 p-8">
                                Deep liquidity <br/> from Tier-1 banks
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
        </section>
    );
};

export default AboutForex;