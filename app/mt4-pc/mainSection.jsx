import Image from "next/image";
import ButtonWithImage from "../buttonWithImage";
import Link from "next/link";

const MainSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl bg-customGreyFour rounded-[44px] mx-auto bg-custom-gradient-types-three pt-8">
                <div className="max-w-[1189px] mx-auto flex flex-row gap-9">
                    <Image src="/comp1.png" alt="comp" className="object-contain" width={417} height={493} />
                    <div className="flex flex-col items-baseline justify-between">
                        <div className="flex flex-col gap-6 mt-[70px] items-start">
                            <h2 className="text-[32px] leading-[38.4px] font-medium text-customBlackFive max-w-[469px]">
                                Download the most popular Forex trading platform for PC
                            </h2>
                            <Link href="/sign-up">
                                <button
                                    type="button"
                                    className="w-[273px] flex cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-[53px] py-3 hover:bg-customBlue active:bg-customBlueTwo"
                                >
                                    <span className="text-[20px] leading-[24px] text-white">
                                        Try free demo
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-row max-w-[657px] w-full gap-4 mb-5">
                            <ButtonWithImage
                                text="Download for Windows"
                                imgSrc="/window.svg"
                                altText="window"
                            />
                            <ButtonWithImage
                                text="Download for Mac"
                                imgSrc="/apple3.svg"
                                altText="apple"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
