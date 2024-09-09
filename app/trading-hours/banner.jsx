import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-11">
            <div className="flex flex-row gap-24">
                <div className="flex flex-col gap-4 py-16">
                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour">Forex market
                        hours and trading sessions</h1>
                    <p className="text-[20px] font-normal leading-[24px] text-customBlackOne">Forex is a
                        decentralized market, which operates through various financial centers of the world. Since
                        these financial centers are located in different time zones, for all account types the Forex
                        market is open 24 hours a day, five days a week from 00:02:00 (GMT+3) Mondays till 23:58:59
                        (GMT+3) Fridays. Friday is the last day of the currency market operation, because large
                        market participants, including various financial institutions, large funds, companies, and
                        banks, are closed for the weekend.</p>
                </div>
                <Image src="/watch.png" alt="watch" height={339} width={339} className="object-contain"/>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                    <Link href="/try-demo">
                        <button type="button"
                                className="flex cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-[88px] py-3 hover:bg-customGreyTwo active:bg-customGrey">
                                <span
                                    className="text-[20px] leading-[24px] text-customBlue font-semibold">Try demo</span>
                        </button>
                    </Link>
                    <Link href="/sign-up">
                        <button type="submit"
                                className="flex cursor-pointer items-center justify-center gap-2 rounded-[44px] bg-customOrangeTwo px-[88px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree">
                            <span className="text-[20px] font-semibold leading-[24px] text-white">Sign up now</span>
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Image src="/qrCode2.svg" alt="qrCode2" height={42} width={42} className="object-contain"/>
                    <div className="flex flex-col">
                        <span className="text-[16px] font-normal leading-[19.2px] text-customBlackOne">Scan to Download MT4 platform</span>
                        <span className="text-[24px] font-medium leading-[28.8px] text-customBlackOne">IOS and Android</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;