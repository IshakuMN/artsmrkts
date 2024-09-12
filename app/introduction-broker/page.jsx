import React from "react";
import Image from "next/image";
import Link from "next/link";
import Help from "../help";
import ContactUs from "../contactUs";

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
            <section className="relative bg-customGreyFour bg-custom-gradient-types-two rounded-b-[80px]">
                <div className="max-w-screen-xl mx-auto py-11 flex flex-row gap-16 justify-between">
                    <div className="flex flex-col mb-14">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[507px] mt-16">
                            Introducing
                            Broker Program
                        </h1>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[507px]">Get rewarded
                            from the trading activity of every active client you refer to Artsmrkts.

                        </p>
                        <SignUpButton text="Start now" link="/start-now"/>
                    </div>
                    <Image src="/men2.png" alt="men" width={627} height={388} className="object-cover rounded-b-2xl"/>
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto py-16 relative">
                <Image src="/lightning.png" alt="lightning" width={186} height={186}
                       className="absolute top-[16%] right-0"/>
                <div className="flex flex-row border-b-[1px] border-solid border-customGrey">
                    <p className="h-[88px] px-8 flex items-center text-[44px] leading-[52.8px] text-customOrange font-medium border-r-[1px] border-solid border-customGrey flex-1">Up
                        to $25 per lot</p>
                    <p className="h-[88px] px-8 flex items-center text-[20px] leading-[24px] text-customBlackOne flex-1">No
                        limits on
                        commissions</p>
                </div>
                <div className="flex flex-row">
                    <p className="h-[88px] px-8 flex items-center text-[20px] leading-[24px] text-customBlackOne border-r-[1px] border-solid border-customGrey flex-1">Withdrawal
                        of
                        commissions anytime and anywhere</p>
                    <p className="h-[88px] px-8 flex items-center text-[20px] leading-[24px] text-customBlackOne flex-1">Full
                        access to
                        statistics</p>
                </div>
            </section>
            <section className="py-6 bg-customGreyFour">
                <div className="max-w-screen-xl mx-auto flex flex-row justify-around px-8">
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackOne">up to</p>
                        <p className="text-[54px] leading-[68.4px] text-customBlackOne font-semibold">$10<span
                            className="ml-2 text-[20px] leading-[24px] font-normal text-customBlackOne">Majors</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackOne">up to</p>
                        <p className="text-[54px] leading-[68.4px] text-customBlackOne font-semibold">$12<span
                            className="ml-2 text-[20px] leading-[24px] font-normal text-customBlackOne">Minors</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackOne">up to</p>
                        <p className="text-[54px] leading-[68.4px] text-customBlackOne font-semibold">$12<span
                            className="ml-2 text-[20px] leading-[24px] font-normal text-customBlackOne">Minors</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[20px] leading-[24px] text-customBlackOne">up to</p>
                        <p className="text-[54px] leading-[68.4px] text-customBlackOne font-semibold">$25<span
                            className="ml-2 text-[20px] leading-[24px] font-normal text-customBlackOne">Exotics and others</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 relative">
                <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">How to start
                        earning</h2>
                    <div className="flex flex-row gap-11 h-[174px]">
                        <div className="flex flex-row flex-1 relative">
                            <div className="bg-customBlueFon flex items-center justify-center max-w-[283px] w-full polygon absolute h-[174px] left-0 z-20"><p className="text-[20px] leading-[24px] text-white font-medium max-w-[70px]">Sign up</p></div>
                            <div className="bg-customBlueSix flex items-center justify-center max-w-[449px] w-full polygon absolute h-[174px] right-[22rem] z-10"><p
                                className="text-[20px] leading-[24px] text-white font-medium max-w-[175px]">Create and share your
                                referral link
                            </p></div>
                            <div className="bg-customGreyThirteen flex items-center  justify-center max-w-[471px] w-full polygon ml-auto h-[174px]">
                                <p className="text-[20px] leading-[24px] text-customGreyEleven font-medium max-w-[175px]">Motivate your clients
                                    trade</p></div>
                        </div>
                        <div className="flex flex-col gap-6 max-w-[276px] my-auto">
                            <p className="text-[20px] leading-[24px] font-medium text-customBlueTwo">Receive your
                                commission automatically</p>
                            <SignUpButton text="Start now" link="/start-now"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">Why become an Introducing Broker</h2>
                    <div className="flex flex-row flex-wrap gap-3 justify-between bg-custom-gradient-center">
                        <div className="overflow-hidden flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl bg-white">
                            <p className="pl-11 text-customGreyEleven text-[20px] leading-[24px] font-medium ">Only trading volume matters</p>
                            <Image src="/arrowup.png" alt="arrowup" width={140} height={140} className="object-contain"/>
                        </div>
                        <div className="overflow-hidden relative flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl">
                            <div className="absolute w-full h-full bg-white opacity-40"></div>
                            <p className="relative z-20 text-center text-[20px] leading-[24px] font-medium ">Trusted global broker licensed by FSA, CySEC, FSC, and FSCA</p>
                        </div>
                        <div className="overflow-hidden flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl">
                            <p className="pl-11 text-customGreyEleven text-[20px] leading-[24px] font-medium ">Variety of promotional tools & materials</p>
                            <Image src="/summer2.png" alt="summer" width={140} height={140} className="object-contain"/>
                        </div>
                        <div className="overflow-hidden relative flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl bg-white">
                            <div className="bg-custom-gradient-categories absolute z-10 right-0 top-0 h-full w-full"></div>
                            <p className="pl-11 text-customGreyEleven text-[20px] leading-[24px] font-medium  relative z-20">10% on 2nd tier referrals</p>
                            <Image src="/symbol.png" alt="symbol" width={140} height={140} className="relative z-20 object-contain"/>
                        </div>
                        <div className="overflow-hidden relative flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl">
                            <div className="absolute w-full h-full bg-white opacity-40"></div>
                            <p className="pl-11 text-customGreyEleven text-[20px] leading-[24px] font-medium relative z-20">Real-time detailed statistics</p>
                            <Image src="/arrowup.png" alt="arrowup" width={140} height={140} className="object-contain relative z-20"/>
                        </div>
                        <div className="overflow-hidden flex justify-center items-center gap-6 flex-row h-[155px] max-w-[416px] w-full border-[1px] border-solid border-customGrey rounded-2xl bg-white">
                            <p className="text-center px-11 text-customGreyEleven text-[20px] leading-[24px] font-medium ">Suitable for Individuals, Corporates, Money Managers, and Webmasters</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto py-11">
                <div className="rounded-[44px] bg-customBlue flex flex-row pl-24 gap-[154px] relative">
                    <div className="bg-custom-gradient-introduction-broker absolute h-full w-full z-20"></div>
                    <div className="flex flex-col gap-2 relative -top-10">
                        <div
                            className="bg-customWhiteOne border-2 border-solid border-customGreyOne rounded-[22px] flex items-center justify-center h-[127px] w-[127px]">
                            <Image src="/logo.svg" alt="logo" height={59} width={85} className="object-contain"/>
                        </div>
                        <div
                            className="bg-customWhiteOne border-2 border-solid border-customGreyOne rounded-[22px] flex items-center justify-center h-[127px] w-[127px]">
                            <Image src="/handshake.svg" alt="handshake" height={107} width={107}
                                   className="object-contain"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 max-w-[638px] my-16">
                        <p className="text-[32px] font-medium leading-[38.4px] text-white">Unlock your earning potential
                            as an Introducing Broker</p>
                        <SignUpButton text="Become an IB" link="/start-now"/>
                    </div>
                </div>
            </section>
            <section className="mt-16 mb-11">
                <div
                    className="flex flex-row items-center justify-between rounded-[44px] bg-customOrangeTen py-9 px-14 max-w-screen-xl mx-auto">
                    <p className="text-[32px] font-medium leading-[38.4px] text-customBlackOne">Build your own network
                        of IBs and earn commissions from their client`&apos;s trades!</p>
                </div>
            </section>
            <section
                className="rounded-t-[80px] bg-custom-gradient-trading-four pt-20 relative overflow-hidden">
                <div className="bg-custom-gradient-types-four absolute z-10 h-full w-full  rounded-3xl"></div>
                <div className="max-w-screen-xl mx-auto relative z-20">
                    <div className="flex flex-col gap-6 pb-16">
                        <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackFour">Forex Master
                            IB</h2>
                        <p className="text-[20px] leading-[24px] text-customBlackFour">The Artsmrkts Forex Master IB
                            program
                            allows you to earn commissions from the profits made by the IBs you attract, in addition to
                            your
                            regular referral commissions for referring traders. Increase your income - become a Master
                            IB.</p>
                    </div>
                    <div className="flex flex-col w-full relative pt-20">
                        <Image src="/man3.png" alt="man counts money" height={623} width={416}
                               className="object-cover absolute right-0 bottom-0"/>
                        <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">Artsmrkts Forex
                            Master IB program Benefits are:</h2>
                        <ul className="flex flex-col pt-11 pb-10">
                            <li className="flex flex-row">
                                <div
                                    className="text-[20px] leading-[24px] h-36 p-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                    Master IB commissions starting at 10% or higher
                                </div>
                                <div
                                    className="text-[20px] leading-[24px] h-36 p-8 max-w-[307px] w-full border-r-[1px] border-customGrey border-solid">
                                    Daily payouts
                                </div>
                                <div className="text-[20px] leading-[24px] h-36 p-8">
                                    Qualify by adding 5 new <br/>active IBs
                                </div>
                            </li>
                            <li className="flex flex-row border-t-[1px] border-customGrey border-solid">
                                <div
                                    className="text-[20px] leading-[24px] h-36 p-8 max-w-72 w-full border-r-[1px] border-customGrey border-solid">
                                    Daily commissions for your direct referrals
                                </div>
                                <div
                                    className="text-[20px] leading-[24px] h-36 p-8 max-w-[307px] w-full border-r-[1px] border-customGrey border-solid">
                                    No cap: higher earnings for your IBs mean higher payments for you
                                </div>
                                <div className="text-[20px] leading-[24px] h-36 p-8">
                                    Personal account <br/>manager
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </section>
            <ContactUs introduction={true}/>
        </main>
    );
};

export default Page;

