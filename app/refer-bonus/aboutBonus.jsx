import Image from "next/image";

const AboutBonus = () => {
    return (
        <section>
            <div className="max-w-screen-xl flex flex-row pt-20 pb-16 mx-auto relative">
                <Image src="/men.png" alt="men" width={519}  height={341} className="object-contain absolute left-[20%] bottom-0"/>
                <div className="flex flex-row gap-28 border-b-[1px] border-customGrey border-solid h-52">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree max-w-[505px]">Benefit 15% bonus from each deposit of the clients registered by your personal link.</h2>
                    <div className="flex flex-col pr-8  border-r-[1px] border-customGrey border-solid">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">1</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne">Simply share your personal link with your friends</p>
                    </div>
                </div>
                <div className="flex flex-col border-l-[1px] border-customGrey border-solid">
                    <div className="border-b-[1px] border-customGrey border-solid h-52"><Image src="/chain.svg" alt="chain" width={209} height={209} className="object-contain mx-auto"/></div>
                    <div className="flex flex-col pl-11 h-48">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">2</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne">Make sure they start trading with Artsmrkts</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBonus;