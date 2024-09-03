import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative bg-customGreyFour">
            <div className="absolute w-full h-full bg-custom-gradient-banner-why  z-10"></div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between max-w-[1440px]">
                    <Image src="/drum.svg" alt="drum" width={523} height={655} className="object-contain"/>
                    <div className="flex flex-col gap-4 pt-[183px] pb-[213px] mr-32 relative z-20 max-w-[471px]">
                        <h1 className="text-[44px] leading-[52.8px] font-medium text-customBlackFour">Artsmrkts -
                            serving traders responsibly</h1>
                        <p className="text-[18px] leading-[21.6px] text-customBlackOne">Trusted by millions in over 100
                            countries, Artsmrkts is a leading broker dedicated to providing reliable service and
                            building long-term relationships with our clients.</p>
                    </div>
                </div>
                <div className="bg-white rounded-t-[80px] relative z-20">
                    <div
                        className="flex flex-row justify-between gap-36 mx-auto  pt-8 pb-4  max-w-screen-xl">
                        <p className="text-[20px] leading-[24px] text-customGreyEleven max-w-[738px]">Since 2018,
                            Artsmrkts
                            has provided
                            innovative Forex tools and tailored services to support your success. As an international
                            broker, we offer diverse account types and trading instruments.</p>
                        <div className="flex flex-col gap-4 max-w-[390px]">
                            <p className="text-[16px] leading-[19.2px] text-customOrangeThree">Join Artsmrkts and
                                become a
                                part of our global trading community</p>
                            <button
                                type="submit"
                                className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                            >
                            <span className="text-[16px] font-semibold leading-[19.2px] text-white">
                                Join
                            </span>
                                <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;