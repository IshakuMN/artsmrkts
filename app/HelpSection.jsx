'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const HelpSection = () => {
    const [articleHelpFull, setArticleHelpFull] = useState(null);
    const content = {
        "Any successful withdrawals cancel the bonus amount": {
            title: "Any successful withdrawals cancel the bonus amount",
            details: [
                "Sign in to FxPro Direct with your email and password.",
                "Get ready to take a photo of your passport, ID card or driver’s license. (A Proof of residence, such as a bank statement or utility bill, issued within the last 6 months, may also be required).",
                "Click the 'Upload documents' button and choose the row with the document you prefer to provide."
            ],
            note: "Document verification is usually very fast and you can always check the status from the same section in FxPro Direct. Please note that uploading the documents through Direct is the only acceptable channel of submitting these documents and that any documents sent by email will not be processed."
        },
        "Are my personal details secure with you?": {
            title: "Are my personal details secure with you?",
            details: [
                "Your personal details are secured with state-of-the-art encryption technologies and are handled according to the highest standards of privacy and data protection."
            ],
            note: "Please review our privacy policy for more details on how we protect your data."
        },
        "What documents do you recuire?": {
            title: "What documents do you recuire?",
            details: [
                "Sign in to FxPro Direct with your email and password.",
                "Get ready to take a photo of your passport, ID card or driver’s license. (A Proof of residence, such as a bank statement or utility bill, issued within the last 6 months, may also be required).",
                "Click the 'Upload documents' button and choose the row with the document you prefer to provide."
            ],
            note: "Document verification is usually very fast and you can always check the status from the same section in FxPro Direct. Please note that uploading the documents through Direct is the only acceptable channel of submitting these documents and that any documents sent by email will not be processed."
        },
        "How can I verify my profile?": {
            title: "How can I verify my profile?",
            details: [
                "Sign in to FxPro Direct with your email and password.",
                "Get ready to take a photo of your passport, ID card or driver’s license. (A Proof of residence, such as a bank statement or utility bill, issued within the last 6 months, may also be required).",
                "Click the 'Upload documents' button and choose the row with the document you prefer to provide."
            ],
            note: "Document verification is usually very fast and you can always check the status from the same section in FxPro Direct. Please note that uploading the documents through Direct is the only acceptable channel of submitting these documents and that any documents sent by email will not be processed."
        },
        "What should I do if fail the appropriateness test?": {
            title: "What should I do if fail the appropriateness test?",
            details: [
                "Sign in to FxPro Direct with your email and password.",
                "Get ready to take a photo of your passport, ID card or driver’s license. (A Proof of residence, such as a bank statement or utility bill, issued within the last 6 months, may also be required).",
                "Click the 'Upload documents' button and choose the row with the document you prefer to provide."
            ],
            note: "Document verification is usually very fast and you can always check the status from the same section in FxPro Direct. Please note that uploading the documents through Direct is the only acceptable channel of submitting these documents and that any documents sent by email will not be processed."
        },
    };

    const firstKey = Object.keys(content)[0];
    const [activeItem, setActiveItem] = useState(firstKey);


    const handleSumbit = (data) => {
        console.log(data);
        setArticleHelpFull(data);
    }
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto py-16 flex flex-col gap-14">
                <div className="flex flex-row gap-2">
                    <Link href="/help-center" className="flex flex-row gap-2 cursor-pointer">
                        <p className="text-[16px] leading-[19.2px] text-customGreyEleven hover:text-customOrangeThree active:text-customOrange">Help center</p>
                    </Link>
                    <div className="flex flex-row gap-2">
                        <Image src="arrow.svg" alt="arrow" width={8} height={8} className="object-contain rotate-90"/>
                        <p className="text-[16px] leading-[19.2px] text-customOrangeThree">Categories and articles</p>
                    </div>
                </div>
                <div className="flex flex-row gap-14">
                    <div className="flex flex-col gap-4 bg-customGreyFour rounded-2xl p-11">
                        {Object.keys(content).map((item, index) => (
                            <p
                                key={index}
                                onClick={() => setActiveItem(item)}
                                className={`p-2.5 text-[20px] leading-[24px]  hover:text-customOrangeThree active:text-customOrange border-b-[1px] border-customGrey border-solid cursor-pointer ${activeItem === item ? 'text-customOrange' : 'text-customBlackOne'}`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-16 basis-4/5">
                        <div className="flex flex-col gap-6 pb-11 border-b-[1px] border-customGrey border-solid">
                            {activeItem ? (
                                <>
                                    <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlueThree">{content[activeItem].title}</h2>
                                    <ul className="list-decimal pl-6 space-y-1">
                                        {content[activeItem].details.map((detail, index) => (
                                            <li key={index} className="text-[20px] leading-[24px] text-customBlackOne">{detail}</li>
                                        ))}
                                    </ul>
                                    <p className="text-[20px] leading-[24px] text-customBlackOne">{content[activeItem].note}</p>
                                </>
                            ) : null}
                        </div>
                        {articleHelpFull? <div className="max-w-[529px] bg-customGreenTwo rounded-2xl px-11  gap-8 py-8 flex flex-row items-center">
                            <div
                                className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customGreenOne">
                                <Image src="arrow7.svg" alt="call" width={18} height={15}
                                       className="object-contain "/>
                            </div>
                            <p className="text-[20px] leading-[24px] text-customBlackOne">Thank you for your feedback!</p>
                        </div> : <div className="flex flex-col py-11 pl-11 pr-20 bg-customBlueSeven rounded-2xl gap-6">
                            <p className="text-[20px] leading-[24px] text-customBlackOne">Was this article helpful?</p>
                            <div className="flex flex-row gap-6 max-w-[529px]">
                                    <button type="button" onClick={() => handleSumbit([content[activeItem].title,"no"])} className="w-48 flex cursor-pointer items-center justify-center rounded-[44px] border-[1px] border-customGrey px-4 py-2 hover:bg-customGreyTwo active:bg-customGrey">
                                        <span className="text-[14px] leading-[16.8px] text-customBlue font-semibold">No</span>
                                    </button>
                                    <button type="button" onClick={() => handleSumbit([content[activeItem].title,"yes"])} className="w-48 flex cursor-pointer flex-row items-center justify-center rounded-[44px] bg-customBlueFon px-4 py-2 hover:bg-customBlue active:bg-customBlueTwo">
                                        <span className="text-[14px] leading-[16.8px] text-white font-semibold">Yes</span>
                                    </button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
