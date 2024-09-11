import Image from "next/image";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const StatisticsSection = ({color}) => {
    return (
        <div className="flex flex-1 flex-row gap-1 pt-[13px]">
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40"}`}></div>
                <span
                    className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className}`}
                >
              1+
            </span>

                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
                    Million
                    <br />
                    traders
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40"}`}></div>
                <Image
                    src="licenses.svg"
                    alt="licenses"
                    width={20}
                    height={26.25}
                    className="relative z-20 object-contain"
                />
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
                    Multiple regulatory <br />
                    licenses
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-4 py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40"}`}></div>
                <span
                    className={`relative z-20 text-[32px] font-semibold leading-[38.4px] text-customBlue ${inter.className}`}
                >
              24/7
            </span>
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
                    Customer
                    <br />
                    support
                </p>
            </div>
            <div className="relative flex flex-1 flex-row items-center gap-4 rounded-lg px-[9px] py-1 h-14">
                <div className={`absolute left-0 top-0 z-10 h-full w-full rounded-lg ${color? "bg-white": "bg-customGreyFour opacity-40"}`}></div>
                <Image
                    src="protection.svg"
                    alt="protection"
                    width={20}
                    height={25}
                    className="relative z-20 object-contain"
                />
                <p className="relative z-20 text-[16px] leading-[19.2px] text-customBlackThree">
                    Client funds
                    <br />
                    protection
                </p>
            </div>
        </div>
    )
}

export default StatisticsSection;