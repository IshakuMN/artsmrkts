import Image from "next/image";
import Link from "next/link";

const FeaturedArticles = () => {

    return (
        <section className="rounded-t-[80px]  pt-24 relative">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col w-full relative">
                    <Image src="/man look at the newspaper.png" alt="man look at the newspaper" height={397} width={412} className="object-cover absolute -right-8 bottom-0"/>
                    <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Featured articles</h2>
                    <ul className="flex flex-col pt-11 pb-6">
                        <li className="flex flex-row">
                            <div className="flex flex-col pt-4 pb-6 pr-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Accounts</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">How do I open a live trading account?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8  max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Verification</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">What documents do you require?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">MT4&MT5 Platform</h3>
                                <p className="text-[20px] leading-[24px] pb-4 max-w-56 text-customBlackOne">Are you platforms compatible with Mac?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                        </li>
                        <li className="flex flex-row border-t-[1px] border-customGrey border-solid">
                            <div className="flex flex-col  pt-4 pb-6 pr-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">Best-in-class customer service, including live chat</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col  pt-4 pb-6 px-8  max-w-72 w-full justify-between border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">MT4&MT5 Platform</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">Why is the `Modify` button greyed out when I try to set SL/TP for an existing order?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Artsmrkts edge platform</h3>
                                <p className="text-[20px] leading-[24px] max-w-96 pb-4 text-customBlackOne">Why is the Modify position button greywd out when I try to set SL/TP for an existing order?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                        </li>
                        <li className="flex flex-row border-t-[1px] border-customGrey border-solid">
                            <div className="flex flex-col  pt-4 pb-6 pr-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid ">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Deposit/Withdrawal</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">What mwthods can I use deposit funds into myArtsmrkts account?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col  pt-4 pb-6 px-8  max-w-72 w-full  border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Deposit/Withdrawal</h3>
                                <p className="text-[20px] leading-[24px] pb-4 text-customBlackOne">How do I transfer funds from my Artsmrkts account?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8 ">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2 text-customBlackOne">Safety</h3>
                                <p className="text-[20px] leading-[24px] max-w-96 pb-4 text-customBlackOne">How can I protect my online data?</p>
                                <Link href="/categories-and-articles" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FeaturedArticles;