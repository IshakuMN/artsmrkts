"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";



const PrevArrow = ({ onClick, currentSlide }) => (
    <button
        onClick={onClick}
        disabled={currentSlide === 0}
        className={`prev-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey absolute -left-[18px] top-1/2 transform -translate-y-1/2 z-10 ${
            currentSlide === 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={currentSlide === 0 ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Previous"
            height={16}
            width={16}
            className={`object-contain ${currentSlide === 0? "" : "rotate-180"}`}
        />
    </button>
);

const NextArrow = ({ onClick, currentSlide, slideCount }) => (
    <button
        onClick={onClick}
        disabled={currentSlide === slideCount - 5} // 5 is the number of slides shown
        className={`next-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey absolute right-2 top-1/2 transform -translate-y-1/2 z-10 ${
            currentSlide === slideCount - 5 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={currentSlide === slideCount - 5 ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Next"
            height={16}
            width={16}
            className={`object-contain ${currentSlide === slideCount - 5? "rotate-180" : ""}`}
        />
    </button>
);


const MoreCategories = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        afterChange: (current) => setCurrentSlide(current),
        prevArrow: <PrevArrow currentSlide={currentSlide} />,
        nextArrow: <NextArrow currentSlide={currentSlide} slideCount={slideCount} />,
    };

    useEffect(() => {
        setSlideCount(document.querySelectorAll(".slick-slide").length);
    }, []);

    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-8 py-16">
            <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">More categories:</h2>
            <Slider {...settings}
                    className="flex-row gap-5 flex-wrap"
            >
                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">About Artsmrkts</p>
                        <Image src="/logo.svg" alt="logo" height={55} width={80}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>
                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Partner programs</p>
                        <Image src="/bag.png" alt="bag" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Troubleshooting</p>
                        <Image src="/gold_2.png" alt="gold" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Getting started</p>
                        <Image src="/superman.png" alt="superman" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Promotions</p>
                        <Image src="/present.png" alt="present" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Trading</p>
                        <Image src="/arrow_2.png" alt="arrow" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Deposits & Withdrawals</p>
                        <Image src="/arrow_gold.png" alt="arrow_gold" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Trading platforms</p>
                        <Image src="/arrow_3.png" alt="arrow" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Instruments</p>
                        <Image src="/detail_2.png" alt="detail" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Copytrading</p>
                        <Image src="/copytrading.png" alt="copytrading" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Security</p>
                        <Image src="/security.png" alt="security" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>

                <Link href="/categories-and-articles">
                    <div
                        className="pr-10 pl-6 pt-6 h-32 border-[1px] border-solid border-customGrey bg-customGreyFour max-w-56 relative rounded-2xl">
                        <p className="text-[20px] leading-[24px] text-black">Personal area</p>
                        <Image src="/personal_area.png" alt="personal area" height={100} width={100}
                               className="object-contain absolute bottom-0 right-2.5"/>
                    </div>
                </Link>
            </Slider>
        </section>
    );
}

export default MoreCategories;