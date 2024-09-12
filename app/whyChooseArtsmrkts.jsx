import Image from 'next/image';
import React from "react";

// Компонент карточки
const FeatureCard = ({ imageSrc, title, description }) => (
    <div className="flex-1 flex flex-col py-11 px-8 bg-white rounded-2xl gap-11 box-shadow-protecting">
        <p className="text-[24px] leading-[28.8px] text-customBlackOne font-semibold pb-4 border-b-[1px] border-solid border-customGrey">
            {title}
        </p>
        <div className="flex flex-row items-center">
            <Image src={imageSrc} alt={title} width={150} height={150} className="object-contain" />
            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">{description}</p>
        </div>
    </div>
);

// Универсальный компонент секции
const WhyChooseArtsmrkts = ({ title, subtitle, features }) => {
    return (
        <section className="relative">
            <div className="max-w-screen-xl mx-auto py-16 flex flex-col gap-11">
                {title && subtitle && <div className="flex flex-row items-start gap-[100px]">
                    <h1 className="flex-1 text-[44px] font-medium leading-[52.8px] text-customBlueThree ">
                        {title}
                    </h1>
                    {subtitle && <p className="flex-1 text-[20px] leading-[24px] text-customBlackOne">{subtitle}</p>}
                </div>
                }
                <div className={`gap-5 ${title === undefined ? "flex flex-row" : "grid grid-cols-3 grid-rows-2"}`}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            imageSrc={feature.imageSrc}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseArtsmrkts;
