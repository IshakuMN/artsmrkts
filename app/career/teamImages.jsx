"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const PrevArrow = ({ onClick, currentSlide }) => (
  <button
    // onClick={onClick}
    disabled={currentSlide === 0}
    className={`prev-arrow absolute -left-[18px] top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 transform items-center justify-center rounded-[44px] border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
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
    // onClick={onClick}
    disabled={currentSlide === slideCount - 5}
    className={`next-arrow absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 transform items-center justify-center rounded-[44px] border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey ${
      currentSlide === slideCount - 5 ? "cursor-not-allowed" : "cursor-pointer"
    }`}
  >
    <Image
      src={currentSlide === slideCount - 5 ? "/arrowDis.svg" : "/arrow1.svg"}
      alt="Next"
      height={16}
      width={16}
      className={`object-contain ${currentSlide === slideCount - 5 ? "rotate-180" : ""}`}
    />
  </button>
);

const TeamImages = () => {
  const teamImages = [
    {
      name: "Member 1",
      role: "Role 1",
      image: "/her1.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
    {
      name: "Member 2",
      role: "Role 2",
      image: "/him1.png",
      testimonial: "Testimonial 2",
    },
    {
      name: "Dmitry",
      role: "Head of Marketing",
      image: "/dmitry1.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
    {
      name: "Dmitry",
      role: "Head of Marketing",
      image: "/dmitry2.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(3); // Default active item is the 4th item (index 3)

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
    prevArrow: <PrevArrow currentSlide={0} />,
    nextArrow: <NextArrow currentSlide={0} slideCount={teamImages.length} />,
  };

  return (
    <section className="mx-auto flex max-w-[1280px] flex-col py-16">
      <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">
        Join our team
      </h2>
      <p className="mb-3 mt-5 max-w-[468px]">
        Join our team at Artsmarkets to find your perfect role and maximise your
        potential
      </p>
      <button className="w-fit rounded-full border px-12 py-3 font-semibold text-[#851000]">
        see all jobs
      </button>
      <Slider {...settings} className="mt-4 flex-row flex-wrap">
        <div
          onClick={() => handleItemClick(0)}
          className={`mx-2 cursor-pointer transition-all duration-500 ${
            activeIndex === 0 ? "w-[520px]" : ""
          }`}
        >
          <div
            className={`flex ${activeIndex === 0 ? "flex-row" : "flex-col"}`}
          >
            <Image
              src={teamImages[0].image}
              width={activeIndex === 0 ? 305 : 197}
              height={activeIndex === 0 ? 397 : 230}
              alt={teamImages[0].name}
              className="transition-all duration-500"
            />
            <div className={`max-w-[291px] transition-opacity duration-500`}>
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="font-semibold">{teamImages[0].name}</h2>
                <h4>{teamImages[0].role}</h4>
                {activeIndex === 0 && (
                  <p className="mt-4">{teamImages[0].testimonial}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleItemClick(1)}
          className={`mx-2 cursor-pointer transition-all duration-500 ${
            activeIndex === 1 ? "w-[520px]" : ""
          }`}
        >
          <div
            className={`flex ${activeIndex === 1 ? "flex-row" : "flex-col"}`}
          >
            <Image
              src={teamImages[1].image}
              width={activeIndex === 1 ? 305 : 197}
              height={activeIndex === 1 ? 397 : 230}
              alt={teamImages[1].name}
              className="transition-all duration-500"
            />
            <div className={`max-w-[291px] transition-opacity duration-500`}>
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="font-semibold">{teamImages[1].name}</h2>
                <h4>{teamImages[1].role}</h4>
                {activeIndex === 1 && (
                  <p className="mt-4">{teamImages[1].testimonial}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleItemClick(2)}
          className={`mx-2 cursor-pointer transition-all duration-500 ${
            activeIndex === 2 ? "w-[520px]" : ""
          }`}
        >
          <div
            className={`flex ${activeIndex === 2 ? "flex-row" : "flex-col"}`}
          >
            <Image
              src={teamImages[2].image}
              width={activeIndex === 2 ? 305 : 197}
              height={activeIndex === 2 ? 397 : 230}
              alt={teamImages[2].name}
              className="transition-all duration-500"
            />
            <div className={`max-w-[291px] transition-opacity duration-500`}>
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="font-semibold">{teamImages[2].name}</h2>
                <h4>{teamImages[2].role}</h4>
                {activeIndex === 2 && (
                  <p className="mt-4">{teamImages[2].testimonial}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleItemClick(3)}
          className={`mx-2 cursor-pointer transition-all duration-500 ${
            activeIndex === 3 ? "w-[520px]" : ""
          }`}
        >
          <div
            className={`flex ${activeIndex === 3 ? "flex-row" : "flex-col"}`}
          >
            <Image
              src={teamImages[3].image}
              width={activeIndex === 3 ? 305 : 197}
              height={activeIndex === 3 ? 397 : 230}
              alt={teamImages[3].name}
              className="transition-all duration-500"
            />
            <div className={`max-w-[291px] transition-opacity duration-500`}>
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="font-semibold">{teamImages[3].name}</h2>
                <h4>{teamImages[3].role}</h4>
                {activeIndex === 3 && (
                  <p className="mt-4">{teamImages[3].testimonial}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default TeamImages;
