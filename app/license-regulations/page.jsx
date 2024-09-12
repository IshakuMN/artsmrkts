'use client';
import {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import RegulationsSection from "./RegulationsSection";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="relative">
            <section className="mx-auto flex max-w-screen-xl flex-col pt-16 gap-[85px]">
                <div className="flex flex-row gap-20">
                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour flex-1">License &
                        Regulations</h1>
                    <p className="text-[20px] leading-[24px] text-customBlackOne flex-1">
                        As a strong proponent of transparency, we establish the highest standards of safety for our
                        clients' funds. For this reason, client funds are kept in major international banks and are
                        fully segregated from the company’s own funds.
                    </p>
                </div>
                <div className="rounded-[44px] bg-customGreyTwo pt-8 box-shadow-license">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between items-center pb-11 px-6 ">
                            <p className="pl-4 pt-4 pb-6 text-[32px] leading-[38.4px] font-medium text-customBlackOne">Financial
                                Conduct Authority (FCA)</p>
                            <button
                                onClick={toggleOpen}
                                className="rounded-[44px] w-11 h-11 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey cursor-pointer"
                                style={{willChange: 'transform'}}
                            >
                                <motion.div
                                    animate={{rotate: isOpen ? 270 : 90}}
                                    transition={{duration: 0.3}}
                                    className="object-contain"
                                >
                                    <Image
                                        src="/arrow1.svg"
                                        alt="Previous"
                                        height={16}
                                        width={16}
                                    />
                                </motion.div>
                            </button>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className="flex flex-row pb-8 px-6 gap-6"
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                    transition={{duration: 0.1}}
                                    style={{willChange: 'height, opacity'}}
                                >
                                    <p className="text-[20px] leading-[24px] text-customGreyEleven">FxPro UK Limited is
                                        authorised and regulated by the Financial Conduct Authority (registration number
                                        509956).</p>
                                    <p className="text-[20px] leading-[24px] text-customGreyEleven">The Financial
                                        Conduct Authority is a financial regulatory body in the United Kingdom, but
                                        operates independently of the UK Government, and is financed by charging fees to
                                        members of the financial services industry.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div
                        className="bg-custom-gradient-license border-[1px] border-solid border-customGrey p-11 rounded-[44px] flex flex-row gap-1 justify-end">
                        <Image src="/line2.svg" alt="line" width={231} height={4} className="object-contain"/>
                        <span className="text-[24px] font-medium leading-[28.8px] text-white">artsmrkts</span>
                    </div>
                </div>
            </section>
            <section className="bg-custom-gradient-protecting rounded-b-[108px]">
                <div className="mx-auto flex max-w-screen-xl flex-col py-[100px] gap-14">
                    <div className="flex flex-row gap-20 items-center">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlackFour flex-1">Protecting
                            Client Funds</h1>
                        <p className="text-[20px] leading-[24px] text-customBlackOne flex-1">
                            As a regulated entity, FxPro meets the following regulatory requirements relating to client
                            funds:
                        </p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <div
                            className="flex-1 flex flex-col py-[72px] px-[56px] bg-white rounded-2xl gap-14 box-shadow-protecting">
                            <p className="text-[32px] leading-[38.4px] text-customBlackOne font-medium pb-4 border-b-[1px] border-solid border-customGrey">Mitigating
                                Counterparty Risks</p>
                            <div className="flex flex-row gap-20">
                                <Image src="/shield.svg" alt="shield" width={150} height={150}
                                       className="object-contain"/>
                                <p className="text-[20px] leading-[24px] text-customGreyEleven">Client funds are kept in
                                    banks such as Barclays Bank PLC, Julius Baer and Royal Bank of Scotland. Internal
                                    limits
                                    ensure a diversification of client funds among banks. </p>
                            </div>
                        </div>
                        <div
                            className="flex-1 flex flex-col py-[72px] px-[56px] bg-white rounded-2xl gap-14 box-shadow-protecting">
                            <p className="text-[32px] leading-[38.4px] text-customBlackOne font-medium pb-4 border-b-[1px] border-solid border-customGrey">Balance
                                Protection</p>
                            <div className="flex flex-row gap-20">
                                <Image src="/umbrella.svg" alt="umbrella" width={150} height={150}
                                       className="object-contain"/>
                                <p className="text-[20px] leading-[24px] text-customGreyEleven">Artmarkets offers
                                    Negative
                                    Balance Protection to all clients as part of the Client Agreement, given that it is
                                    not
                                    manipulated and is accepted in good faith.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RegulationsSection />

            <section className="bg-custom-gradient-license-two pt-16 pb-20">
                <div className="relative mx-auto max-w-screen-xl">
                    <div className="flex flex-row border-[1px] border-solid border-customGrey rounded-[44px] overflow-hidden">
                        <div className="absolute z-10 bottom-0 right-0 w-full h-full opacity-10 bg-customGreyFifteen rounded-[44px]"></div>
                        <div className="flex flex-col gap-8 py-[131px] pl-[113px] pr-[57px] relative z-20 border-r-8 border-solid border-customOrangeTwo">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackFive">Artsmrkts' online trading platforms have been selected for their reliability, security and speed.
                            </h3>
                            <Link href="/sign-up">
                                <button
                                    type="button"
                                    className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-[53px] py-3 hover:bg-customBlue active:bg-customBlueTwo"
                                >
              <span className="text-[20px] leading-[24px] text-white">
                Sign up
              </span>
                                </button>
                            </Link>
                        </div>
                        <Image src="/comp.png" alt="comp" height={456} width={491} className="object-contain relative z-20 "/>
                    </div>
                </div>
            </section>
        </main>
    );
}
