import Image from 'next/image';
import ButtonWithImage from "../buttonWithImage";



const HeroSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl bg-customGreyFour rounded-[44px] mx-auto bg-custom-gradient-types-three">
                <div className="max-w-[1037px] mx-auto flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-20">
                        <Image src="/button.svg" alt="button" className="object-contain" width={168} height={140} />
                        <h2 className="text-[32px] leading-[38.4px] font-medium text-customBlackFive max-w-[296px]">
                            Start using the best Forex terminal!
                        </h2>
                    </div>
                    <div className="flex flex-col max-w-[344px] w-full gap-4">
                        <ButtonWithImage
                            text="Download for Windows"
                            imgSrc="/window.svg"
                            altText="window"
                        />
                        <ButtonWithImage
                            text="Download for Mac"
                            imgSrc="/apple3.svg"
                            altText="apple"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
