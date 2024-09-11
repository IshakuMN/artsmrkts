import Image from "next/image";
import React from "react";

const ButtonWithImage = ({ text, imgSrc, altText, onClick }) => {
    return (
        <button
            type="button"
            className="h-12 gap-4 w-full flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
            onClick={onClick}
        >
            <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive whitespace-nowrap">
                {text}
            </span>
            <Image src={imgSrc} alt={altText} width={24} height={24} className="object-contain" />
        </button>
    );
};

export default ButtonWithImage;
