import Link from "next/link";
import Image from "next/image";

// Кнопка регистрации
const SignUpButton = () => (
    <Link href="/sign-up">
        <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
        >
            <span className="text-[16px] font-semibold leading-[19.2px] text-white">
                Sign up now
            </span>
            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
        </button>
    </Link>
);

// Картинка и описание
const FeatureCard = ({ imageSrc, title, description }) => (
    <div className="flex-1 flex flex-col py-11 px-8 bg-white rounded-2xl gap-11 box-shadow-protecting">
        <p className="text-[24px] leading-[28.8px] text-customBlackOne font-semibold pb-4 border-b-[1px] border-solid border-customGrey">
            {title}
        </p>
        <div className="flex flex-row items-center">
            <Image src={imageSrc} alt={title} width={150} height={150} className="object-contain" />
            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">{description}</p>
        </div>
    </div>
);

export default function Page() {
    return (
        <main className="relative">
            <section className="relative">
                <div className="max-w-screen-xl mx-auto py-11 flex flex-row gap-16">
                    <div className="flex flex-col mt-11 mb-16">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[600px]">
                            Trade Forex with Low & Stable Spreads
                        </h1>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[600px]">
                            Enter the world of global Forex trading and engage with top currency pairs, benefiting from highly competitive spreads.
                        </p>
                        <SignUpButton />
                    </div>
                    <Image src="/pic.png" alt="pic" width={436} height={391} className="object-cover h-[391px]" />
                </div>
            </section>

            <section className="relative">
                <div className="max-w-screen-xl mx-auto py-16 flex flex-col gap-11">
                    <h1 className="text-[44px] font-medium leading-[52.8px] text-customBlueThree">
                        Why choose Artsmrkts for your Forex trading?
                    </h1>
                    <div className="grid grid-cols-3 grid-rows-2 gap-5">
                        <FeatureCard
                            imageSrc="/gold4.png"
                            title="Wide range of FX derivatives"
                            description="Our selection of the world’s most-traded currencies includes over 60 instruments, available for trading 24/7."
                        />
                        <FeatureCard
                            imageSrc="/circle.png"
                            title="Swap-free trading"
                            description="Artsmrkts offers swap-free (Islamic) Forex accounts that comply with Islamic beliefs by avoiding interest charges. These accounts don’t incur swap or rollover fees for overnight positions and are suitable for Muslims or anyone avoiding swap fees."
                        />
                        <FeatureCard
                            imageSrc="/class.png"
                            title="Low & Stable spreads"
                            description="Trade forex majors, minors, or exotic instruments with ultra-tight spreads starting from 3 pips, providing stability even in volatile market conditions."
                        />
                        <FeatureCard
                            imageSrc="/watch2.png"
                            title="Quick withdrawals"
                            description="Choose from various payment methods and receive quick approval for your requests, with processing completed within 15 minutes by deducting the amount from your account."
                        />
                        <FeatureCard
                            imageSrc="/shield.svg"
                            title="Gap protection"
                            description="Trade without worry with our gap protection. It prevents slippages, so your trades start and end right where you expect, without missing any small price changes."
                        />
                        <FeatureCard
                            imageSrc="/lightning.png"
                            title="Fast order execution"
                            description="Our technology ensures fast and reliable order execution, critical for Forex trading success. Your trades are completed almost instantly, giving you the speed needed for effective trading."
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
