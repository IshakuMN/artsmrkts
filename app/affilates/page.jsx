import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpButton = ({text, link}) => (
    <Link href={link}>
        <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
        >
            <span className="text-[20px] font-semibold leading-[24px] text-white">
               {text}
            </span>
            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
        </button>
    </Link>
);

const Page = () => {
    return (
        <main>
            <section className="relative">
                <div className="max-w-screen-xl mx-auto pt-11 flex flex-row gap-16 justify-between">
                    <div className="flex flex-col mt-11 mb-16">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[600px]">
                            Forex Affiliate Program
                        </h1>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[600px]">
                            The Artsmrkts Forex Affiliate Program is designed to accommodate a diverse range of
                            affiliates, including Webmasters, Individual Traders, EA Developers, Marketing Firms,
                            bloggers, Forex mentors, Facebook experts, and online activity enthusiasts.
                        </p>
                        <SignUpButton text="Start now" link="/start-now"/>
                    </div>
                    <Image src="/goldprosent.png" alt="goldprosent" width={436} height={414} className="object-cover"/>
                </div>
            </section>
            <section className="relative rounded-t-[80px] bg-custom-gradient-trading-four overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-custom-gradient-license-three"></div>
                <div className="max-w-screen-xl mx-auto pt-[100px] pb-11 flex flex-col gap-[100px] relative z-20">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row">
                            <div className="flex-1"><p className="pb-6 text-[20px] leading-[24px] text-customBlackOne max-w-[418px]">With Artsmrkts, you&apos;ll
                                receive all the support necessary to grow your business, benefiting from our strong
                            reputation, high-quality products, and generous offers.</p></div>
                            <div className="flex-1 relative h-full w-full"><Image src="/symbol.png" alt="symbol" width={211} height={211} className="object-cover absolute left-0 -top-12"/></div>
                        </div>
                        <div className="flex flex-row">
                            <Image src="/Arrow 8.svg" alt="arrow10" width={604} height={9} className="object-cover h-3"/>
                            <p className="text-[20px] leading-[24px] text-customOrangeThree ml-24 max-w-[519px]">No deep knowledge of the Forex market is required to start; instead, you can enjoy high profits by attracting clients.
                                <br/>To achieve the best results, simply apply to the program and become Artsmrkts&apos; partner today.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-customBlackOne text-[44px] font-medium leading-[52.8px]">What we offer</h2>
                        <div className="flex flex-row gap-6 py-8">
                            <div className="flex flex-row gap-6">
                                <ul className="flex flex-col gap-3 flex-1">
                                    <li className="flex flex-row relative gap-0.5 ">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">1</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">Potential
                                                earnings
                                                of up to $2,000 per client.</p></div>
                                    </li>
                                    <li className="flex flex-row relative gap-0.5">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">2</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">15% bonus
                                                for each client referred</p></div>
                                    </li>
                                    <li className="flex flex-row relative gap-0.5">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">3</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">Instant
                                                automatic commission calculations.</p></div>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-3 flex-1">
                                    <li className="flex flex-row relative gap-0.5">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">4</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">Commission
                                                funds available for trading and withdrawal at any time.</p></div>
                                    </li>
                                    <li className="flex flex-row relative gap-0.5">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">5</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">Dedicated
                                                Account Manager</p></div>
                                    </li>
                                    <li className="flex flex-row relative gap-0.5">
                                        <div
                                            className="w-10 h-10 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                        <span
                                            className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrange text-[20px] leading-[24px]">6</span>
                                        </div>
                                        <div
                                            className="w-4 h-3.5 bg-white my-auto absolute left-8 top-3.5 box-shadow-protecting"></div>
                                        <div
                                            className="px-4 bg-white rounded-[100px] flex items-center justify-center box-shadow-protecting">
                                            <p
                                                className="text-customBlackFour text-[20px] leading-[24px]">Advanced
                                                Trading & Analysis Tools</p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <SignUpButton text="Become a partner" link="/"/>
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

