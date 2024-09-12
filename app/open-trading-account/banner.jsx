import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section className="relative rounded-b-[80px] bg-customBlueFonTwo">
            <div className="bg-custom-gradient-trading-two absolute z-10 h-full w-full"></div>
            <div className="flex flex-row gap-10 relative z-20 mx-auto pt-14 max-w-[1440px]">
                <Image src="/telephone3.png" alt="telephone3" width={478} height={401} className="object-contain"/>
                <div className="relative flex flex-col pt-12 gap-3 max-w-[738px]">
                    <h1 className="text-[54px] font-medium leading-[64.8px] text-white">Open your trading account</h1>
                    <p className="text-[32px] font-medium leading-[38.4px] text-white">Start trading CFDs on Forex,
                        Metals, Indices, and more today!</p>
                    <Link href="/sign-up" className="mt-4">
                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                        >
                            <span className="text-[20px] font-semibold leading-[24px] text-white">
                                  Sign up now
                            </span>
                            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} className="object-contain"/>
                        </button>
                        <Image src="money2.svg" alt="money" width={69} height={42}
                               className="object-contain mt-14 ml-auto"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner;