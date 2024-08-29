import Image from "next/image";
import Link from "next/link";

const PopularArticles = () => {

    return (
        <section className="rounded-t-[80px]  pt-24 relative">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col w-full relative">
                    <Image src="/man look at the newspaper.png" alt="man look at the newspaper" height={331} width={497} className="object-cover absolute -right-8 bottom-0"/>
                    <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Popular articles</h2>
                    <ul className="flex flex-col pt-11 pb-10">
                        <li className="flex flex-row">
                            <div className="flex flex-col pt-4 pb-6 pr-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid justify-between">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8  max-w-72 w-full border-r-[1px] border-customGrey border-solid justify-between">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8 justify-between">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4 max-w-56">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                        </li>
                        <li className="flex flex-row border-t-[1px] border-customGrey border-solid">
                            <div className="flex flex-col  pt-4 pb-6 pr-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid justify-between">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col  pt-4 pb-6 px-8  max-w-72 w-full justify-between border-r-[1px] border-customGrey border-solid">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] pb-4">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
                                    <button type="button"
                                            className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col pt-4 pb-6 px-8 justify-between">
                                <h3 className="text-[20px] leading-[24px] font-semibold pb-2">Best-in-class</h3>
                                <p className="text-[20px] leading-[24px] max-w-96 pb-4">Best-in-class customer service, including live chat</p>
                                <Link href="/" rel="noopener noreferrer">
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

export default PopularArticles;