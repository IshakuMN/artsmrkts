import Image from "next/image";

const AboutBonus = () => {
    return (
        <section>
            <div className="max-w-[1280px] flex flex-row pt-20 pb-16 mx-auto relative">
                <Image src="/man.png" alt="man" width={550}  height={424} className="object-contain absolute left-[7%] bottom-0"/>
                <div className="flex flex-row gap-28 border-b-[1px] border-customGrey border-solid h-48">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">Start investing with Artsmrkts today!</h2>
                    <div className="flex flex-col pr-8  border-r-[1px] border-customGrey border-solid">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">1</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne">Bonus up to $3000 on second or any further deposits</p>
                    </div>
                </div>
                <div className="flex flex-col border-l-[1px] border-customGrey border-solid">
                    <div className="h-48 border-b-[1px] border-customGrey border-solid"><Image src="/safeTwo.svg" alt="safe" width={176} height={181} className="object-contain mx-auto"/></div>
                    <div className="flex flex-col pl-11">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">2</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne">Instant access
                            to the bonus for trades credited automatically to your account</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBonus;