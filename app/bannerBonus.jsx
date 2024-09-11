import Link from "next/link";
import Image from "next/image";

const BannerBonus = ({
    imageSrc,
    imageAlt,
    title,
    highlightText,
    buttonText,
    linkHref,
    children
}) => {
    return (
        <section className="relative rounded-b-[80px]">
            <div className="bg-custom-gradient-bonus absolute z-10 h-full w-full rounded-b-[70px]"></div>
            <div className="flex flex-row gap-10 relative z-20 mx-auto py-6 max-w-[1440px]">
                {children}
                <Image src={imageSrc} alt={imageAlt} width={666} height={400} className="object-contain h-[400px] scale-125"/>
                <div className="relative mb-[102px] flex flex-col pt-[76px] gap-8 max-w-[583px]">
                    <h1 className="text-[44px] font-medium leading-[52.8px] text-customBlueTwo">
                        {title} <span className="text-customOrangeTwo">{highlightText}</span>
                    </h1>
                    <Link href={linkHref}>
                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                        >
                            <span className="text-[20px] font-semibold leading-[24px] text-white">
                                {buttonText}
                            </span>
                            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} className="object-contain"/>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BannerBonus;
