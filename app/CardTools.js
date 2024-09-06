"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CardTools = ({
  id,
  title,
  imageSrc,
  isActive,
  isHovered,
  onClick,
  onHover,
  onLeave,
}) => {
  const [isSafari, setIsSafari] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent,
    );
    setIsSafari(isSafariBrowser);
  }, []);

  const handleClick = () => {
    onClick(id);
    if (isSafari) {
      onHover(null);
    }
  };

  const handleMouseEnter = () => {
    onHover(id);
  };

  const handleMouseLeave = () => {
    onLeave();
  };

  const getCardWidth = () => {
    if (isActive) return "807px";
    if (isHovered) return "204px";
    return "94px";
  };

  return (
    <li
      ref={cardRef}
      className="relative cursor-pointer overflow-hidden rounded-3xl bg-customBlue transition-all duration-500 ease-in-out"
      style={{
        width: getCardWidth(),
        height: "492px",
        marginRight: "12px",
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -left-1 top-0 h-full w-[812px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-left"
        />
      </div>
      {!isActive && (
        <div className="absolute left-0 top-0 z-20 h-full w-full rounded-3xl bg-customBlue opacity-40"></div>
      )}
      {isActive ? (
        <div className="absolute left-0 top-0 z-30 mx-auto flex w-full flex-row gap-6 rounded-t-3xl pb-[51px] pl-8 pt-8">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[100px] bg-customOrangeEight">
            <Image src="/arrowGroup.svg" alt="arrow" width={22} height={16} />
          </div>
          <p className="text-[44px] font-semibold leading-[52.8px] text-white">
            {title}
          </p>
        </div>
      ) : (
        <div
          className={`absolute top-0 z-30 mx-auto pt-8 transition-all duration-500 ease-in-out ${
            isHovered ? "left-[43%]" : "left-5"
          }`}
        >
          <div
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-[100px] ${
              isHovered ? "bg-customOrangeEight" : "bg-customBlueFive"
            }`}
          >
            <Image src="/arrowGroup.svg" alt="arrow" width={22} height={16} />
          </div>
        </div>
      )}
    </li>
  );
};

export default CardTools;
