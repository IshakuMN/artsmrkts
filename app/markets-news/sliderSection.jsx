import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { newsData } from "../utils/dataNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Разбиваем массив новостей на слайды по 6 статей
const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const PrevArrow = ({ onClick, currentSlide }) => (
    <button
        onClick={onClick}
        disabled={currentSlide === 0}
        className={`prev-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
            currentSlide === 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={currentSlide === 0 ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Previous"
            height={16}
            width={16}
            className={`object-contain ${currentSlide === 0 ? "" : "rotate-180"}`}
        />
    </button>
);

const NextArrow = ({ onClick, currentSlide, slideCount }) => (
    <button
        onClick={onClick}
        disabled={currentSlide === slideCount - 1}
        className={`next-arrow rounded-[44px] w-9 h-9 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
            currentSlide === slideCount - 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
    >
        <Image
            src={currentSlide === slideCount - 1 ? "/arrowDis.svg" : "/arrow1.svg"}
            alt="Next"
            height={16}
            width={16}
            className={`object-contain ${currentSlide === slideCount - 1 ? "rotate-180" : ""}`}
        />
    </button>
);

const SliderSection = () => {
    const [isActive, setIsActive] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    // Разбиваем данные на слайды по 6 статей
    const slidesData = chunkArray(newsData, 6);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        beforeChange: (_, next) => setCurrentSlide(next),
    };

    return (
        <section className="relative mx-auto py-11 flex flex-col gap-11">
            <h1 className="w-full mx-auto max-w-screen-xl text-[54px] font-semibold leading-[64.8px] text-customBlackFour">
                Market Overview
            </h1>
            <div className="mx-auto w-full max-w-[1312px]">
                <Slider {...settings} ref={sliderRef}>
                    {slidesData.map((slideData, slideIndex) => (
                        <div key={slideIndex} className="!grid grid-cols-2 grid-rows-3 gap-6">
                            {slideData.map((news) => (
                                <div key={news.id} className="flex flex-col py-11 px-8 bg-white">
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
                    />
                    {slidesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => sliderRef.current.slickGoTo(index)}
                            className={`flex items-center justify-center text-[24px] font-semibold leading-[28.8px] py-1 px-4 ${
                                currentSlide === index
                                    ? 'text-customBlackOne border-b-[1px] border-solid border-customOrangeTwo'
                                    : 'text-customGreyThree'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <NextArrow
                        onClick={() => sliderRef.current.slickNext()}
                        currentSlide={currentSlide}
                        slideCount={slidesData.length}
                    />
                </div>
            </div>
        </section>
    );
};

export default SliderSection;
