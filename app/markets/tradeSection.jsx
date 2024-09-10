import Image from 'next/image';
import Link from 'next/link';

// Компонент кнопки "Sign Up"
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

// Универсальный компонент для секции с заголовком, текстом и изображением
const TradeSection = ({ title, description, imgSrc, imgAlt }) => {
    return (
        <section className="relative">
            <div className="max-w-screen-xl mx-auto py-11 flex flex-row gap-16">
                <div className="flex flex-col mt-11 mb-16">

                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[600px]">
                        {title}
                    </h1>
                    <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[600px]">
                        {description}
                    </p>
                    <SignUpButton />
                </div>
                <Image src={imgSrc} alt={imgAlt} width={436} height={391} className="object-cover h-[391px]" />
            </div>
        </section>
    );
};

export default TradeSection;
