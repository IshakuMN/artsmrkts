import Image from "next/image";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const StatisticsSection = ({color}) => {
    return (
        <div className="flex flex-1 flex-row gap-1 pt-[13px] max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-2">
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40 max-sm:bg-transparent none max-sm:opacity-0"}`}></div>
                <span
                    className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className} max-sm:text-[24px] max-sm:leading-[28.8px]`}
                >
              1+
            </span>

                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree max-sm:text-[14px] max-sm:leading-[16.8px]">
                    Million
                    <br />
                    traders
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40 max-sm:bg-transparent none max-sm:opacity-0"}`}></div>
                <Image
                    src="licenses.svg"
                    alt="licenses"
                    width={20}
                    height={26.25}
                    className="relative z-20 object-contain"
                />
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree max-sm:text-[14px] max-sm:leading-[16.8px]">
                    Multiple regulatory <br />
                    licenses
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40 max-sm:bg-transparent none max-sm:opacity-0"}`}></div>
                <span
                    className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className} max-sm:text-[24px] max-sm:leading-[28.8px]`}
                >
              24/7
            </span>
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree max-sm:text-[14px] max-sm:leading-[16.8px]">
                    Customer
                    <br />
                    support
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40 max-sm:bg-transparent none max-sm:opacity-0"}`}></div>
                <Image
                    src="protection.svg"
                    alt="protection"
                    width={20}
                    height={25}
                    className="relative z-20 object-contain"
                />
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree max-sm:text-[14px] max-sm:leading-[16.8px]">
                    Client funds
                    <br />
                    protection
                </p>
            </div>
        </div>
    )
}

export default StatisticsSection;