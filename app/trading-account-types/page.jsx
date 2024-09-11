import Link from "next/link";
import Image from "next/image";
import Banner from "./banner";
import ForexSection from "./forexSection";

export default function Page() {
    return (
        <main className="relative">
            <Banner/>
            <ForexSection/>
            <section className="bd-white">
                <div className="bg-customGreyFour rounded-2xl p-11 mx-auto max-w-screen-xl flex flex-col gap-6">
                    <h3 className="text-[32px] leading-[38.4px] font-medium text-customBlackOne">Moreover, certain
                        instruments will be only be available swap free on daily basis as explained below:</h3>
                    <div className="flex flex-row flex-wrap gap-4">
                        <div className="flex flex-row py-4 px-6 gap-4 items-center max-w-[353px]">
                            <Image src="/EURUSD.png" alt="EURUSD" width={84} height={68} className="object-contain"/>
                            <div className="flex flex-col">
                                <p className="text-[24px] leading-[28.8px] text-customBlackOne font-medium">EURUSD</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne font-medium">British Pound vs US Dollar</p>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-6 gap-4 items-center max-w-[353px]">
                            <Image src="/USDCHF.png" alt="USDCHF" width={84} height={68} className="object-contain"/>
                            <div className="flex flex-col">
                                <p className="text-[24px] leading-[28.8px] text-customBlackOne font-medium">USDCHF</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne font-medium">US Dollar vs Swiss Franc</p>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-6 gap-4 items-center max-w-[353px]">
                            <Image src="/USDJPY.png" alt="USDJPY" width={84} height={68} className="object-contain"/>
                            <div className="flex flex-col">
                                <p className="text-[24px] leading-[28.8px] text-customBlackOne font-medium">USDJPY</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne font-medium">US Dollar  vs Japanese yen</p>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-6 gap-4 items-center max-w-[353px]">
                            <Image src="/GBPUSD.png" alt="GBPUSD" width={84} height={68} className="object-contain"/>
                            <div className="flex flex-col">
                                <p className="text-[24px] leading-[28.8px] text-customBlackOne font-medium">GBPUSD</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne font-medium">British Pound vs US Dollar</p>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-6 gap-4 items-center max-w-[353px]">
                            <Image src="/USDCAD.png" alt="USDCAD" width={84} height={68} className="object-contain"/>
                            <div className="flex flex-col">
                                <p className="text-[24px] leading-[28.8px] text-customBlackOne font-medium">USDCAD</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne font-medium">US Dollar  vs The Canadian Dollar</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] leading-[19.2px] text-customOrangeThree">*All other pairs swap would be
                        charged on a regular basis</p>
                </div>
            </section>
        </main>
    );
}
