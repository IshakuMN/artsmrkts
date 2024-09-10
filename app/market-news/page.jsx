'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { newsData } from "../utils/dataNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick, currentSlide, canPrev }) => (
    <button
        onClick={canPrev ? onClick : undefined}
        disabled={!canPrev}
        className={`prev-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
            !canPrev ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={!canPrev ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Предыдущий"
            height={16}
            width={16}
            className={`object-contain ${!canPrev ? "" : "rotate-180"}`}
        />
    </button>
);

const NextArrow = ({ onClick, currentSlide, slideCount, canNext }) => (
    <button
        onClick={canNext ? onClick : undefined}
        disabled={!canNext}
        className={`next-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
            !canNext ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={!canNext ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Следующий"
            height={16}
            width={16}
            className={`object-contain ${!canNext ? "rotate-180" : ""}`}
        />
    </button>
);

export default function Page() {
    const [isActive, setIsActive] = useState(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    const sliderRef = useRef(null);

    const getSlidesData = () => {
        const result = [];
        const limitedData = newsData.slice(0, 24); // Получаем ограниченное количество данных
        debugger
        for (let i = 0; i < limitedData.length; i += 3) {
            result.push(limitedData.slice(i, i + 3));
        }
        return result;
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Показывать только один слайд за раз
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        afterChange: (current) => setCurrentSlide(current),
    };


    useEffect(() => {
        const slides = getSlidesData();
        setSlideCount(slides.length);
        sliderRef.current.slickGoTo(0);
    }, [newsData]);


    return (
        <main className="relative">
            <section className="relative mx-auto py-11 flex flex-col gap-11">
                <h1 className="w-full mx-auto max-w-screen-xl text-[54px] font-semibold leading-[64.8px] text-customBlackFour">
                    Market Overview
                </h1>
                <div className="mx-auto w-full max-w-[1312px]">
                    <Slider {...settings} ref={sliderRef}>
                        {getSlidesData().map((slideData, slideIndex) => (
                            <div key={slideIndex} className="flex flex-row flex-wrap gap-6">
                                {slideData.map((news) => (
                                    <div key={news.id} className="flex flex-col py-11 px-8 bg-white max-w-[634px]">
                                        <div className="flex flex-row gap-6 pb-6">
                                            {news.isHot && (
                                                <p className="text-[16px] leading-[19.2px] text-white py-1 px-4 bg-customOrangeSix rounded-[100px]">
                                                    hot news
                                                </p>
                                            )}
                                            <p className="text-[16px] leading-[19.2px] text-customBlackOne py-1 px-4 bg-white rounded-[100px] border-[1px] border-solid border-customGrey">
                                                {news.date}
                                            </p>
                                        </div>
                                        <p className="text-[20px] font-medium leading-[24px] text-customBlackOne pb-6 border-b-[1px] border-solid border-customGrey">
                                            {news.title}
                                        </p>
                                        <p className="text-[16px] leading-[19.2px] text-customBlackOne pb-6 pt-4">
                                            {news.description}
                                        </p>
                                        <Link href="/">
                                            <div
                                                className="flex flex-row gap-2.5 mb-8 group items-center"
                                                onMouseDown={handleMouseDown}
                                                onMouseUp={handleMouseUp}
                                            >
                                                <span
                                                    className={`text-[20px] font-normal leading-[24px] transition-colors ${
                                                        isActive ? 'text-customBlackFour' : 'text-customBlue group-hover:text-customBlueTwo'
                                                    }`}
                                                >
                                                    Read more
                                                </span>
                                                <div className="relative">
                                                    <Image
                                                        src={isActive ? "/arrowActive.svg" : "/arrowBlue.svg"}
                                                        alt={isActive ? "arrowActive" : "arrowBlue"}
                                                        height={4}
                                                        width={isActive ? 40 : 72}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center mt-4">
                        <PrevArrow
                            onClick={() => sliderRef.current.slickPrev()}
                            currentSlide={currentSlide}
                            canPrev={currentSlide > 0}
                        />
                        {Array.from({ length: 4 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => sliderRef.current.slickGoTo(index)}
                                className={`flex items-center justify-center text-[24px] font-semibold leading-[28.8px] py-1 px-4 ${
                                    currentSlide === index ? ' text-customBlackOne border-b-[1px] border-solid border-customOrangeTwo' : 'text-customGreyThree'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <NextArrow
                            onClick={() => sliderRef.current.slickNext()}
                            currentSlide={currentSlide}
                            slideCount={slideCount}
                            canNext={currentSlide < slideCount - 1}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-custom-gradient-license-two pt-16 pb-20">
                <div className="relative mx-auto max-w-screen-xl">
                    <div
                        className="flex flex-row border-[1px] border-solid border-customGrey rounded-[44px] overflow-hidden">
                        <div
                            className="absolute z-10 bottom-0 right-0 w-full h-full opacity-10 bg-customGreyFifteen rounded-[44px]"></div>
                        <div
                            className="flex flex-col  py-[131px] pl-[113px] pr-[57px] relative z-20 border-r-8 border-solid border-customOrangeTwo">
                            <h3 className="text-[32px] font-medium leading-[38.4px] text-customBlackFive mt-8 mb-2">
                                Take your trading to the next level
                            </h3>
                            <p className="text-[20px] font-medium leading-[24px] text-customBlackFive mb-8">Start your
                                trading journey with a globally recognized broker that provides superior spreads,
                                execution, and service.</p>
                            <div className="flex flex-row gap-8">
                                <Link href="/">
                                    <button
                                        type="button"
                                        className="w-[273px] flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                                    ><span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">Try free demo</span>
                                    </button>
                                </Link>

                                <Link href="/sign-up">
                                    <button
                                        type="button"
                                        className="w-[273px] flex cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-[53px] py-3 hover:bg-customBlue active:bg-customBlueTwo"
                                    >
                                <span className="text-[20px] leading-[24px] text-white">
                                    Sign up
                                </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <Image src="/comp.png" alt="comp" height={456} width={491}
                               className="object-contain relative z-20"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
