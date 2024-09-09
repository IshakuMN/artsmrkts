'use client';

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function Page() {
    const [isActive, setIsActive] = useState(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    return (
        <main className="relative">
            <section className="relative mx-auto py-11 flex flex-col gap-11">
                <h1 className="mx-auto max-w-screen-xl text-[54px] font-semibold leading-[64.8px] text-customBlackFour">Market
                    Overview</h1>
                <div className="mx-auto max-w-[1312px] gap-11">
                    <div className="flex flex-col py-11 px-8 max-w-[570px]">
                        <p className="text-[20px] font-medium leading-[24px] text-customBlackOne pb-6 border-b-[1px] border-solid border-customGrey">The
                            Bank of Canada is likely to continue cutting rates amid a weak labor market. OPEC+ postponed
                            the planned production increase</p>
                        <p className="text-[16px]leading-[19.2px] text-customBlackOne pb-6 pt-4">The Bank of Canada is
                            likely to continue cutting rates amid a weak labor market. OPEC+ postponed the planned
                            production increase</p>

                        <Link href="/">
                            <div
                                className="flex flex-row gap-2.5 mb-8 group items-center"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            >
                <span className={`text-[20px] font-normal leading-[24px] transition-colors ${
                    isActive ? 'text-customBlackFour' : 'text-customBlue group-hover:text-customBlueTwo'
                }`}>
                   Read more
                </span>
                                <div className="relative">
                                    {!isActive && (
                                        <>
                                            <Image
                                                src="/arrowBlue.svg"
                                                alt="arrowBlue"
                                                height={4}
                                                width={40}
                                                className="object-contain group-hover:hidden"
                                            />
                                            <Image
                                                src="/arrowBlueHover.svg"
                                                alt="arrowBlueHover"
                                                height={4}
                                                width={72}
                                                className="object-contain hidden group-hover:block"
                                            />
                                        </>
                                    )}
                                    {isActive && (
                                        <Image
                                            src="/arrowActive.svg"
                                            alt="arrowActive"
                                            height={4}
                                            width={40}
                                            className="object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-custom-gradient-license-two pt-16 pb-20">
                <div className="relative mx-auto max-w-screen-xl">
                    <div
                        className="flex flex-row border-[1px] border-solid border-customGrey rounded-[44px] overflow-hidden">
                        <div
                            className="absolute z-10 bottom-0 right-0 w-full h-full opacity-10 bg-customGreyFifteen rounded-[44px]"></div>
                        <div
                            className="flex flex-col  py-[131px] pl-[113px] pr-[57px] relative z-20 border-r-8 border-solid border-customOrangeTwo">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackFive mt-8 mb-2">
                                Take your trading to the next level
                            </h3>
                            <p className="text-[20px] font-medium leading-[24px] text-customBlackFive mb-8">Start your
                                trading journey with a globally recognized broker that provides superior spreads,
                                execution, and service.</p>
                            <div className="flex flex-row gap-8">
                                <Link href="/">
                                    <button
                                        type="button"
                                        className="w-[273px] flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                                    ><span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Try free demo</span>
                                    </button>
                                </Link>

                                <Link href="/sign-up">
                                    <button
                                        type="button"
                                        className="w-[273px] flex cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-[53px] py-3 hover:bg-customBlue active:bg-customBlueTwo"
                                    >
                                <span className="text-[20px] leading-[24px] text-white">
                                    Sign up
                                </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <Image src="/comp.png" alt="comp" height={456} width={491}
                               className="object-contain relative z-20"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
