import Link from "next/link";

const AccountTypes = () => {
  return (
    <section className="relative rounded-t-[80px] bg-customGreyFour">
      <div className="bg-custom-gradient absolute z-10 h-full w-full rounded-t-[80px]"></div>
      <div className="relative z-20 mx-auto flex max-w-[1240px] flex-col gap-16 py-16">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-[44px] font-medium leading-[52.8px]">
            Account types for any
            <br />
            trading strategy
          </h2>
          <p className="max-w-[476px] text-[16px] leading-[19.2px]">
            Tired of high spreads and commissions? You want to gain every penny
            from the market, check our account types and maximize your profit.
          </p>
        </div>
        <div className="flex flex-row justify-between gap-12">
          <div className="transition-border-color my-2 flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customBlueFon hover:shadow-2xl">
            <h3 className="mb-4 text-[32px] font-medium leading-[38.4px] text-customBlackOne">
              Standard
            </h3>
            <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven">
              Even our standard account is zero commission
            </p>
            <div className="mb-8 mt-[70px] flex flex-row items-baseline">
              <span className="mr-1 text-[70px] font-medium leading-[84px] text-customBlackFour">
                100
              </span>
              <span className="relative bottom-1 mr-2 text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                $
              </span>
              <span className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight">
                Minimum deposit
              </span>
            </div>
            <div className="my-8 h-[1px] w-full bg-customGreyNine"></div>
            <div className="mb-16 flex flex-col">
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-2">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br />
                  from
                </span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    16
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    pips
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5">
                <span className="text-[16px] leading-[19.2px]">Commission</span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    0
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    $
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-2.5">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br />
                  instruments
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-end gap-2">
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Indices
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Oil
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Crypto
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/register">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon py-3 transition-colors duration-300 ease-in-out hover:bg-customBlue active:bg-customBlueTwo"
              >
                <span className="text-[20px] font-medium leading-[24px] text-white">
                  Register
                </span>
              </button>
            </Link>
          </div>
          <div className="transition-border-color flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-8 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customOrangeTwo hover:shadow-2xl">
            <div className="mb-4 flex flex-row justify-between">
              <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackOne">
                VIP
              </h3>
              <div className="flex h-[27px] cursor-pointer items-center justify-center rounded-[44px] bg-customOrangeSix px-4 py-2">
                <span className="text-[16px] leading-[19.2px] text-white">
                  recommended
                </span>
              </div>
            </div>
            <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven">
              Be under the spot with our VIP account, ultra-fast position
              execution
            </p>
            <div className="mb-8 mt-[70px] flex flex-row items-baseline">
              <span className="mr-1 text-[70px] font-medium leading-[84px] text-customBlackFour">
                2000
              </span>
              <span className="relative bottom-1 mr-2 text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                $
              </span>
              <span className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight">
                Minimum deposit
              </span>
            </div>
            <div className="my-8 h-[1px] w-full bg-customGreyNine"></div>
            <div className="mb-16 flex flex-col">
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-2">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br />
                  from
                </span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    10
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    pips
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5">
                <span className="text-[16px] leading-[19.2px]">Commission</span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    0
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    $
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-2.5">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br />
                  instruments
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-end gap-2">
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Indices
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Crypto
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/register">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customOrangeTwo py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
              >
                <span className="text-[20px] font-medium leading-[24px] text-white">
                  Register
                </span>
              </button>
            </Link>
          </div>
          <div className="transition-border-color my-2 flex-1 cursor-pointer rounded-2xl border-t-[3px] border-t-white bg-white p-6 shadow-none transition-shadow duration-300 ease-in-out hover:rounded-t-none hover:border-t-customBlueFon hover:shadow-2xl">
            <h3 className="mb-4 text-[32px] font-medium leading-[38.4px] text-customBlackOne">
              ECN
            </h3>
            <p className="mt-16px text-[16px] leading-[19.2px] text-customGreySeven">
              The game changer account with almost nil spreads and zero
              commission
            </p>
            <div className="mb-8 mt-[70px] flex flex-row items-baseline">
              <span className="mr-1 text-[70px] font-medium leading-[84px] text-customBlackFour">
                5000
              </span>
              <span className="relative bottom-1 mr-2 text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                $
              </span>
              <span className="relative bottom-5 max-w-[114px] text-[14px] leading-[16.8px] text-customGreyEight">
                Minimum deposit
              </span>
            </div>
            <div className="my-8 h-[1px] w-full bg-customGreyNine"></div>
            <div className="mb-16 flex flex-col">
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-2">
                <span className="text-[16px] leading-[19.2px]">
                  Spreads
                  <br />
                  from
                </span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    3
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    pips
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-end justify-between gap-4 px-4 py-3.5">
                <span className="text-[16px] leading-[19.2px]">Commission</span>
                <p className="flex flex-row items-end gap-1">
                  <span className="relative -bottom-3 text-[44px] font-medium leading-[52.8px] text-customBlackFour">
                    0
                  </span>
                  <span className="text-[14px] leading-[16.8px] text-customBlackFour">
                    $
                  </span>
                </p>
              </div>
              <div className="flex flex-row items-center justify-between gap-4 px-4 py-2.5">
                <span className="text-[16px] leading-[19.2px]">
                  Trading
                  <br />
                  instruments
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2">
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Forex
                    </span>
                    <span className="text-[14px] font-medium leading-[16.8px] text-customBlackFour">
                      Metals
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/register">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon py-3 transition-colors duration-300 ease-in-out hover:bg-customBlue active:bg-customBlueTwo"
              >
                <span className="text-[20px] font-medium leading-[24px] text-white">
                  Register
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
