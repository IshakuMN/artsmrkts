import Image from "next/image";

const AboutBonus = () => {
    return (
        <section>
            <div className="max-w-[1280px] flex flex-row pt-[102px] pb-16 mx-auto relative">
                <Image src="/manTwo.png" alt="man" width={396} height={453}
                       className="object-contain absolute left-0 bottom-0"/>
                <div className="flex flex-col flex-1">
                    <div className="h-40  border-b-[1px] border-customGrey border-solid">
                        <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree max-w-[407px] ml-auto">Start
                            investing with Artsmarkets today!</h2>
                    </div>
                    <div className="flex flex-col pr-8 pt-6 border-solid max-w-[407px] ml-auto">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">1</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne">New investors can claim a bonus up
                            to $3000 on their first deposit, with
                            instant access to the bonus credited automatically to your account</p>
                    </div>
                </div>
                <div className="flex flex-col border-l-[1px] border-customGrey border-solid flex-0">
                    <div className="flex flex-col h-40 pl-[72px] pb-6 border-b-[1px] border-customGrey border-solid">
                        <p className="text-[54px] font-semibold leading-[64.8px] text-customOrange">2</p>
                        <p className="text-[20px] leading-[24px] text-customBlackOne max-w-[329px]">Enjoy unlimited
                            trades with bigger capital and boost your earnings</p>
                    </div>
                    <div className="h-52"><Image src="/tree.svg" alt="tree" width={251} height={251}
                                                 className="object-contain mx-auto"/></div>
                </div>
            </div>
        </section>
    );
}

export default AboutBonus;

