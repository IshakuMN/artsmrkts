import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="relative">
            <section
                className="rounded-t-[80px]  py-16 relative bg-custom-gradient-why">
                <div className="max-w-[1280px] mx-auto flex flex-row gap-5 pb-16">
                    <div className="flex flex-col p-8 gap-4">
                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/summer.svg" alt="summer" className="object-contain" height={28} width={28}/>
                            <h2 className="text-[20px] font-semibold leading-[24px] text-customBlue">Our Mission</h2>
                        </div>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven">Through superior customer
                            service we aim to establish ourselves as a global brand by ensuring that the profitability,
                            success and happiness of our customers are core to our business.</p>
                    </div>
                    <div className="flex flex-col p-8 gap-4">
                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/darts.svg" alt="darts" className="object-contain" height={28} width={28}/>
                            <h2 className="text-[20px] font-semibold leading-[24px] text-customBlue">Our Goal</h2>
                        </div>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven">As we continue to grow
                            internationally and establish ourselves as a global brand, our main priority will remain
                            your profitability, your success and your happiness as our clients – and it always will
                            be.</p>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto pt-24 flex flex-row gap-4">
                    <div className="max-w-[968px]  flex flex-row rounded-3xl bg-customGreyFour relative h-[380px] overflow-hidden">
                        <div className="bg-custom-gradient-six absolute z-10 h-full w-full"></div>
                        <div className="flex flex-col gap-6 pt-14 pl-24 relative z-20">
                            <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive">
                                Join over 1 Million investors from the world
                            </h3>
                            <Link href="/">
                                <button
                                    type="button"
                                    className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                                ><span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Start investing</span>
                                </button>
                            </Link>
                        </div>
                        <Image
                            src="/planet.png"
                            alt="planet"
                            width={550}
                            height={292}
                            className="relative object-contain -bottom-6"
                        />
                    </div>
                    <div className="max-w-[295px] w-full flex flex-col rounded-3xl bg-customGreyFour relative overflow-hidden h-[380px]">
                        <div className="bg-custom-gradient-five absolute z-10 h-full w-full"></div>
                        <div className="flex flex-col gap-6 pt-14 pl-7  relative z-20">
                            <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive">
                                Our certificate
                            </h3>
                            <button type="button"
                                    className="bg-white w-max cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold inline">Open the document</span>
                            </button>
                        </div>
                        <Image src="/detail.svg" alt="details"  height={250} width={200} className="relative z-20 object-contain -right-[94px] -bottom-[17px]"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
