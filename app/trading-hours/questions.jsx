"use client";
import Image from "next/image";
import {useState} from "react";

const Questions = ({faqData}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-auto max-w-screen-xl flex flex-col gap-11 pt-[100px] pb-10">
            <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4">Frequently asked questions</h2>

            {faqData.map((faq, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <div
                        className="pt-4 pb-6 px-8 flex flex-row justify-between cursor-pointer"
                        onClick={() => toggleOpen(index)}
                    >
                        <h3 className="text-[20px] font-medium leading-[24px] text-customBlackOne">{faq.question}</h3>
                        <Image
                            src="/arrow.svg"
                            alt="arrow"
                            width={14}
                            height={6}
                            className={`object-contain transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                        />
                    </div>
                    {openIndex === index && (
                        <div
                            className="py-6 pr-6 pl-[120px] bg-customGreyFive border-[1px] border-solid border-customGreyThirteen"
                        >
                            <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Questions;