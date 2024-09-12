import Image from "next/image";
import Link from "next/link";

const TradeArtsmrkts = () => {

    return (
        <section className="mx-auto max-w-screen-xl flex flex-row gap-5 py-16">
            <div className="bg-customBlueSix rounded-[44px] flex flex-row">
                <Image src="/hand.png" width={369} height={374} alt="hand" className="object-contain"/>
                <div className="py-24 pr-8 flex flex-col gap-8">
                    <h2 className="text-[44px] font-medium leading-[52.8px] text-white">Trade with Artsmrkts when it
                        suits you</h2>
                    <Link href="/sign-up">
                        <button
                            type="button"
                            className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-8 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                        ><span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Sign up now</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="py-24 px-[76px] bg-white box-shadow-protecting rounded-[44px] flex flex-col">
                <p className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-6">People Trust
                    Us!</p>
                <Image src="/trustpilot.png" width={187} height={67} className="object-contain mb-1"
                       alt="trustpilot"/>
                <span className="text-[14px] font-normal leading-[16.8px] text-customGreyEleven">Based on 2,446 reviews</span>
            </div>
        </section>
    )
}

export default TradeArtsmrkts;