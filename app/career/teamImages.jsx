"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const PrevArrow = ({ onClick, currentSlide }) => (
  <button
    onClick={onClick}
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
    onClick={onClick}
    disabled={currentSlide === slideCount - 5} // 5 is the number of slides shown
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
      name: "",
      role: "",
      image: "/her1.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
    {
      name: "",
      role: "",
      image: "/him1.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
    {
      name: "Dmitry",
      role: "Head of marketing",
      image: "/dmitry1.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
    {
      name: "Dmitry",
      role: "Head of marketing",
      image: "/dmitry2.png",
      testimonial:
        "Having joined the Art markets team as Head of Marketing, I was impressed by their commitment to developing talent and creating an environment where every employee can reach their potential.",
    },
  ];

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
    nextArrow: (
      <NextArrow currentSlide={currentSlide} slideCount={slideCount} />
    ),
  };

  useEffect(() => {
    setSlideCount(document.querySelectorAll(".slick-slide").length);
  }, []);

  return (
    <section className="mx-auto flex max-w-[1280px] flex-col gap-8 py-16">
      <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlueThree">
        More categories:
      </h2>
      <Slider {...settings} className="flex-row flex-wrap gap-5">
        <div className="my-2">
          <Image src="/dmitry1.png" width={197} height={230} />
          <h2 className="mt-2 font-semibold">Dmitry</h2>
          <h4>Head of marketing</h4>
        </div>
        <div className="my-2 flex flex-row">
          <Image src="/dmitry2.png" width={197} height={230} />
          <div>
            <h2 className="mt-2 font-semibold">Dmitry</h2>
            <h4>Head of marketing</h4>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default TeamImages;
