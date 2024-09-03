"use client";
import HelpSection from "../HelpSection";
import Image from "next/image";
import {useState} from "react";
import 'react-phone-number-input/style.css';
import FormCall from "../formCall";

export default function Page() {
    const [isActive, setIsActive] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <main className="relative">
            <HelpSection/>
            <section className="relative">
                <div className="max-w-screen-xl mx-auto pt-16 pb-10 flex flex-col gap-11">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">We are here to
                        help</h2>
                    <div className="flex flex-row gap-11 h-[295px]">
                        <div className="flex flex-col gap-8 w-full">
                            <div
                                className="flex flex-row justify-between items-center bg-customGreyFour rounded-[44px] p-8">
                                <div className="flex flex-row gap-6">
                                    <div
                                        className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree ">
                                        <Image src="dialogue.svg" alt="dialogue" width={36} height={36}
                                               className="object-contain h-9"/>
                                    </div>
                                    <div className="flex flex-col gap-2 max-w-80">
                                        <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Live
                                            chart</p>
                                        <p className="text-[16px] leading-[19.2px] text-customBlackOne">Instant help
                                            from
                                            qualified support</p>
                                    </div>
                                </div>
                                <button type="button"
                                        className="h-12 flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey">
                                    <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Open chat</span>
                                </button>
                            </div>
                            <div
                                className="flex flex-row justify-between items-center bg-customGreyFour rounded-[44px] p-8">
                                <div className="flex flex-row gap-6">
                                    <div
                                        className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customOrangeTwo hover:bg-customOrange active:bg-customOrangeThree ">
                                        <Image src="call.svg" alt="call" width={26} height={26}
                                               className="object-contain h-9"/>
                                    </div>
                                    <div className="flex flex-col gap-2 max-w-80">
                                        <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Request
                                            a call back</p>
                                        <p className="text-[16px] leading-[19.2px] text-customBlackOne">leave your
                                            details and the company's specialist will call you back.</p>
                                    </div>
                                </div>
                                <button type="button" onClick={() => setIsActive(!isActive)}
                                        className="h-12 flex cursor-pointer gap-4 flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey">
                                    <span
                                        className="text-[20px] font-semibold leading-[24px] text-customOrangeFive whitespace-nowrap">Get a call</span><Image
                                    src="arrow5.svg"
                                    alt="arrow"
                                    width={17}
                                    height={9}
                                    className={`object-contain transition-transform ${isActive ? "rotate-180" : ""}`}
                                /></button>

                            </div>
                        </div>
                        <div className="flex flex-row p-6 max-w-md relative w-full rounded-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-custom-gradient-categories"></div>
                            <Image src="/book.svg" alt="book" width={269} height={300}
                                   className="object-contain absolute left-0 rigth-0"/>
                            <div className="flex flex-col justify-between max-w-52 ml-auto relative z-20">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Download
                                        the Guides</p>
                                    <p className="text-[16px] leading-[19.2px] text-customBlackOne">All PDF-instructions
                                        in one place. Lets start your trading experience!</p>
                                </div>
                                <button type="button"
                                        className="h-12 flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey">
                                    <span
                                        className="text-[20px] font-semibold leading-[24px] text-customOrangeFive whitespace-nowrap">Download PDF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    {isActive  &&
                    <div className="max-w-[728px] bg-customGreyTen rounded-2xl px-11 py-14 flex flex-col gap-8 flex-1">
                        <FormCall setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
                    </div> }
                    {!isActive && formSubmitted &&
                             <div className="max-w-[728px] bg-white rounded-2xl px-8  gap-6 py-4 flex flex-row border-[1px] border-solid border-customGrey items-center">
                            <div
                                className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customGreenOne">
                                <Image src="arrow7.svg" alt="call" width={18} height={15}
                                       className="object-contain "/>
                            </div>
                            <p className="text-[20px] leading-[24px] text-customBlackOne font-semibold">The call request has been successfully sent!</p>
                        </div>}
                </div>
            </section>
        </main>
    );
}
