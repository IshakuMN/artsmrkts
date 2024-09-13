import Link from "next/link";
import React from "react";

const AccountTypesTwo = () => {
    return (
        <section className="min-w-80 relative rounded-t-[80px] bg-customGreyFour max-sm:px-4 max-sm:pt-10 max-sm:mt-11 max-sm:pb-24 max-sm:rounded-t-[40px] max-sm:overflow-hidden">
            <div className="bg-custom-gradient absolute z-10 h-full w-full rounded-t-[80px] max-sm:rounded-t-[0px] max-sm:bg-custom-gradientTwo"></div>
            <div className="relative z-20 mx-auto flex max-w-screen-xl flex-col gap-16 py-16 max-sm:py-0 max-sm:gap-8">
                <div className="flex flex-row items-center justify-between max-sm:flex-col max-sm:gap-3">
                    <h2 className="text-[44px] font-medium leading-[52.8px] max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:font-semibold max-sm:w-full">
                        Account types for any
                        <br/>
                        trading strategy
                    </h2>
                    <p className="max-w-[476px] text-[16px] leading-[19.2px]">
                        Tired of hight spreads and commissions? You want to gain every penny from the market, check
                        our account types and maximize your profit.
                    </p>
                </div>
                <div className="flex flex-row justify-between gap-5 max-sm:flex-col max-sm:gap-3">
                    <div
                        className="transition-border-color flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customBlueFon hover:shadow-2xl">
                        <h3 className="mb-4 text-[32px] font-medium leading-[38.4px] text-customBlackOne max-sm:text-[20px] max-sm:leading-[24px]">
                            Standard
                        </h3>
                        <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven h-[76px] max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:h-auto">
                            Even our standard account is zero commission
                        </p>
                        <div className="mb-8 mt-[70px] flex flex-row items-baseline max-sm:mt-12 max-sm:mb-5">
              <span className="mr-1 text-[54px] font-semibold leading-[64.8px]  text-customBlackFour max-sm:text-[32px] max-sm:leading-[38.4px]">
                100
              </span>
                            <span
                                className="relative bottom-1 mr-2 text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                $
              </span>
                            <span
                                className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight max-sm:bottom-0">
                Minimum deposit
              </span>
                        </div>
                        <div className="my-8 h-[1px] w-full bg-customGreyNine max-sm:my-5 "></div>
                        <div className="mb-16 flex flex-col max-sm:mb-10">
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br/>
                  from
                </span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 max-sm:bottom-0 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    16
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    pips
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5 max-sm:py-2">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 max-sm:bottom-0 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    0
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    $
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2.5 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br/>
                  instruments
                </span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-end gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                                    </div>
                                    <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Indices
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Oil
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Crypto
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/sign-up">
                            <button
                                type="button"
                                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon py-3 transition-colors duration-300 ease-in-out hover:bg-customBlue active:bg-customBlueTwo"
                            >
                <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[14px] max-sm:leading-[16.8px]">
                 Sign up
                </span>
                            </button>
                        </Link>
                    </div>
                    <div
                        className="transition-border-color flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customOrangeTwo hover:shadow-2xl">
                        <div className="mb-4 flex flex-row justify-between items-center">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackOne max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:font-semibold max-sm:w-full">
                                VIP
                            </h3>
                            <div
                                className="flex h-[27px] cursor-pointer items-center justify-center rounded-[44px] bg-customOrangeSix px-4 py-2">
                <span className="text-[16px] leading-[19.2px] text-white max-sm:text-[12px] max-sm:leading-[14.4px]">
                  recommended
                </span>
                            </div>
                        </div>
                        <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven h-[76px] max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:h-auto">
                            Be under the spotlights with our VIP account. Experience lower spreads and ultra-fast
                            order execution
                        </p>
                        <div className="mb-8 mt-[70px] flex flex-row items-baseline max-sm:mt-12 max-sm:mb-5">
              <span className="mr-1 text-[54px] font-semibold leading-[64.8px] text-customBlackFour max-sm:text-[32px] max-sm:leading-[38.4px]">
                2000
              </span>
                            <span
                                className="relative bottom-1 mr-2 text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                $
              </span>
                            <span
                                className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight max-sm:bottom-0">
                Minimum deposit
              </span>
                        </div>
                        <div className="my-8 h-[1px] w-full bg-customGreyNine max-sm:my-5"></div>
                        <div className="mb-16 flex flex-col max-sm:mb-10">
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br/>
                  from
                </span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 max-sm:bottom-0 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    10
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    pips
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5 max-sm:py-2">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    0
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    $
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2.5 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br/>
                  instruments
                </span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-end gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                                    </div>
                                    <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Indices
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Crypto
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/sign-up">
                            <button
                                type="button"
                                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customOrangeTwo py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                            >
                <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[14px] max-sm:leading-[16.8px]">
                  Sign up
                </span>
                            </button>
                        </Link>
                    </div>
                    <div
                        className="transition-border-color  flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customBlueFon hover:shadow-2xl">
                        <h3 className="mb-4 text-[32px] font-medium leading-[38.4px] text-customBlackOne max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:font-semibold max-sm:w-full">
                            ECN
                        </h3>
                        <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven h-[76px] max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:h-auto">
                            The game-changer account with almost null spreads. Focus on FX pairs and Metals
                        </p>
                        <div className="mb-8 mt-[70px] flex flex-row items-baseline max-sm:mt-12 max-sm:mb-5">
              <span className="mr-1 text-[54px] font-semibold leading-[64.8px]  text-customBlackFour max-sm:text-[32px] max-sm:leading-[38.4px]">
                5000
              </span>
                            <span
                                className="relative bottom-1 mr-2 text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                $
              </span>
                            <span
                                className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight max-sm:bottom-0">
                Minimum deposit
              </span>
                        </div>
                        <div className="my-8 h-[1px] w-full bg-customGreyNine max-sm:my-5"></div>
                        <div className="mb-16 flex flex-col max-sm:mb-10">
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2 max-sm:py-1 ">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br/>
                  from
                </span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[32px] max-sm:bottom-0 font-medium leading-[38.4px] text-customBlackFour">
                    3
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    pips
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5 max-sm:py-2">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    0
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    $
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-between gap-4 px-4 py-2.5 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br/>
                  instruments
                </span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/sign-up">
                            <button
                                type="button"
                                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon py-3 transition-colors duration-300 ease-in-out hover:bg-customBlue active:bg-customBlueTwo"
                            >
                <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[14px] max-sm:leading-[16.8px]">
                  Sign up
                </span>
                            </button>
                        </Link>
                    </div>
                    <div
                        className="transition-border-color  flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customBlueFon hover:shadow-2xl">
                        <div className="mb-4 flex flex-row justify-between items-center">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackOne max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:font-semibold max-sm:w-full">
                                Swap-free
                            </h3>
                            <div
                                className="flex h-[27px] cursor-pointer items-center justify-center rounded-[44px] bg-customBlueEight px-4 py-2">
                <span className="text-[16px] leading-[19.2px] text-white max-sm:text-[12px] max-sm:leading-[14.4px]">
                islamic
                </span>
                            </div>
                        </div>
                        <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven h-[76px] max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:h-auto">
                            Islamic accounts give their owners an opportunity to hold their positions for an
                            unlimited amount of time with no swap.
                        </p>
                        <div className="mb-8 mt-[70px] flex flex-row items-baseline max-sm:mt-12 max-sm:mb-5">
              <span className="mr-1 text-[54px] font-semibold leading-[64.8px]  text-customBlackFour max-sm:text-[32px] max-sm:leading-[38.4px]">
                100
              </span>
                            <span
                                className="relative bottom-1 mr-2 text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                $
              </span>
                            <span
                                className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight max-sm:bottom-0">
                Minimum deposit
              </span>
                        </div>
                        <div className="my-8 h-[1px] w-full bg-customGreyNine max-sm:my-5"></div>
                        <div className="mb-16 flex flex-col max-sm:mb-10">
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br/>
                  from
                </span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[32px] max-sm:bottom-0 font-medium leading-[38.4px] text-customBlackFour">
                    16
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    pips
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5 max-sm:py-2">
                                <span className="text-[16px] leading-[19.2px]">Commission</span>
                                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[32px] font-medium leading-[38.4px] text-customBlackFour">
                    0
                  </span>
                                    <span
                                        className="text-[14px] leading-[16.8px] text-customBlackFour font-semibold">
                    $
                  </span>
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-4 px-4 py-2.5 max-sm:py-1">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br/>
                  instruments
                </span>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-end gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                                    </div>
                                    <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Indices
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Oil
                    </span>
                                        <span
                                            className="text-[14px] font-semibold leading-[16.8px] text-customBlackFour">
                      Crypto
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/sign-up" className="mt-auto">
                            <button
                                type="button"
                                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon py-3 transition-colors duration-300 ease-in-out hover:bg-customBlue active:bg-customBlueTwo"
                            >
                <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[14px] max-sm:leading-[16.8px]">
                 Sign up
                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountTypesTwo;