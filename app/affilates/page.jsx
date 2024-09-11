import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpButton = () => (
    <Link href="/start-now">
        <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
        >
            <span className="text-[16px] font-semibold leading-[19.2px] text-white">
                Start now
            </span>
            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
        </button>
    </Link>
);

const Page = () => {
    return (
        <main>
            <section className="relative">
                <div className="max-w-screen-xl mx-auto py-11 flex flex-row gap-16 justify-between">
                    <div className="flex flex-col mt-11 mb-16">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[600px]">
                            Forex Affiliate Program
                        </h1>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[600px]">
                            The Artsmrkts Forex Affiliate Program is designed to accommodate a diverse range of
                            affiliates, including Webmasters, Individual Traders, EA Developers, Marketing Firms,
                            bloggers, Forex mentors, Facebook experts, and online activity enthusiasts.
                        </p>
                        <SignUpButton/>
                    </div>
                    <Image src="/goldprosent.png" alt="goldprosent" width={436} height={414} className="object-cover"/>
                </div>
            </section>
            <section className="relative rounded-t-[80px] bg-custom-gradient-trading-four">
                <div className="max-w-screen-xl mx-auto pt-[100px] pb-11 flex flex-col gap-[100px]">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-customBlackOne text-[44px] font-medium leading-[52.8px]">What we offer</h2>
                        <div className="flex flex-row gap-6 py-8">
                            <div className="felx flex-col gap-3"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div
                    className="flex flex-row items-center justify-between rounded-[44px] bg-customOrangeTen py-9 px-14 max-w-screen-xl mx-auto">
                    <p className="text-[32px] font-medium leading-[38.4px] text-customBlackOne">For more information
                        check Referral Bonus page</p>
                    <Link href="/welcome-bonus" target="_blank" rel="noopener noreferrer">
                        <button type="button"
                                className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey">
                            <span
                                className="whitespace-nowrap text-[20px] font-semibold leading-[24px] text-customOrangeFive">Get the bonus</span>
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Page;

