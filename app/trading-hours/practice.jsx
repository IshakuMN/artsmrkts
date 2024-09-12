import Image from "next/image";

const Practice = () => {

    const InfoBlock = ({text}) => (
        <div className="flex flex-row gap-2 items-start">
            <Image src="/arrow8.svg" alt="arrow" height={16} width={16} className="object-contain m-1"/>
            <p className="text-[16px] font-normal leading-[19.2px] text-customGreyEleven">{text}</p>
        </div>
    );

    return(
        <section className="mx-auto max-w-screen-xl flex flex-col py-16 pb-12">
            <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4">
                How yo use this info in practice?
            </h2>
            <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mb-11">
                To make use of knowing the Forex trading hours, mind the following tips:
            </p>

            <div className="bg-custom-gradient-trading rounded-t-[80px] pt-16 px-[80px] flex flex-row gap-8">
                <div className="flex flex-col gap-2.5">
                    <InfoBlock
                        text="The highest trading activity is observed during the European and American sessions, so this is the best time to trade. In those hours, most transactions are carried out, and trading spreads are the lowest."/>
                    <InfoBlock
                        text="You may also notice that some trading sessions overlap, so during these hours, volatility is usually the highest."/>
                    <InfoBlock text="In the Asian session, the Japanese yen is traded the most actively."/>
                    <InfoBlock
                        text="The activity in the European session is the highest during two periods: 10:00-14:00 and 15:00-19:00."/>
                </div>

                <div className="flex flex-col gap-2.5">
                    <InfoBlock
                        text="Be careful during the 'thin' market – a transitional time between sessions when there is not enough liquidity to maintain a stable price chart, i.e. strong impulses are possible."/>
                    <InfoBlock
                        text="During the New Year rally, large banks and exchanges are closed for holidays; companies withdraw funds for summing up the results and reporting. This is a long 'thin' market when you need to be extremely careful."/>
                    <InfoBlock
                        text="The gap often follows the market opening after the weekend, so we recommend you protect your funds by placing Stop Loss and Take Profit orders or even close all positions on Friday."/>
                </div>
            </div>
        </section>
    )
}
export default Practice;