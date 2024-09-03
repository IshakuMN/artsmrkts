import Link from "next/link";
import Image from "next/image";

const Term = ({
                  title,
                  leftBlockText,
                  rightBlockText,
                  buttonText,
                  buttonLink,
                  imageUrl,
                  imageAlt
              }) => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-row relative z-20">
            <div className="flex flex-col gap-8">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">Terms and conditions:</h2>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col max-w-[555px]">
                        {leftBlockText.map((text, index) => (
                            <p
                                key={index}
                                className={`py-11 px-8 text-[20px] leading-[24px] text-customBlackOne ${index < leftBlockText.length - 1 ? 'border-b-[1px] border-customGrey border-solid' : ''}`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col border-l-[1px] border-customGrey border-solid">
                        {rightBlockText.map((text, index) => (
                            <p
                                key={index}
                                className={`px-8 py-11 text-[20px] leading-[24px] text-customBlackOne max-w-[492px] ${index < rightBlockText.length - 1 ? 'border-b-[1px] border-customGrey border-solid' : ''}`}
                            >
                                {text}
                            </p>
                        ))}
                        <Link href={buttonLink} className="py-11 mx-auto px-8">
                            <button
                                type="button"
                                className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                            >
                                <span className="text-[20px] font-semibold leading-[24px] text-white">
                                    {buttonText}
                                </span>
                                <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Image src={imageUrl} alt={imageAlt} height={120} width={113} className="object-contain relative right-16"/>
        </div>
    );
};

export default Term;
