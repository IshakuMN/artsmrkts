"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";
import Link from "next/link";
import {
    validateName,
    validateEmail,
    validatePhone,
} from "./utils/validators";

const SignUpForm = ({btnText}) => {
    const [inputValueName, setInputValueName] = useState("");
    const [inputValueEmail, setInputValueEmail] = useState("");
    const [inputValuePhone, setInputValuePhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState("");


    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
        setCheckboxError("");
    };

    const handleChange = (eventOrValue, name) => {
        if (name === "telephone") {
            setInputValuePhone(eventOrValue);
            setPhoneError(validatePhone(eventOrValue));
            return;
        }


        const { name: fieldName, value } = eventOrValue.target;
        switch (fieldName) {
            case "name":
                setInputValueName(value);
                setNameError(validateName(value));
                break;
            case "email":
                setInputValueEmail(value);
                setEmailError(validateEmail(value));
                break;
            default:
                break;
        }
    };

    const handleClickClear = (field) => {
        switch (field) {
            case "name":
                setInputValueName("");
                setNameError("");
                break;
            case "email":
                setInputValueEmail("");
                setEmailError("");
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNameError(validateName(inputValueName));
        setEmailError(validateEmail(inputValueEmail));
        setPhoneError(validatePhone(inputValuePhone));

        if (!nameError && !emailError && !phoneError && checkboxChecked) {

            alert("Form submitted successfully!");
            setInputValueName("");
            setInputValueEmail("");
            setInputValuePhone("");
            setNameError("");
            setEmailError("");
            setPhoneError("");
            setCheckboxError("");
            setCheckboxChecked(false);
        } else if (!checkboxChecked) {
            setCheckboxError("You must agree to the processing of personal data.");
        }
    };

    return (
        <form
            className="flex flex-col gap-2"
            name="sign-up"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="name"
                    className="text-[14px] leading-[16.8px] text-customGreyEleven"
                >
                    Name
                </label>
                <div className="relative flex flex-row">
                    <input
                        value={inputValueName}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Jack Jackson"
                        className={`w-full rounded-xl border-[1px] border-solid bg-white py-[18.5px] pl-4 pr-12 text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none ${nameError ? "border-customOrangeTwo shadow-md" : "border-customGreyTwelve shadow-none focus:border-customBlueSix"} hover:shadow`}
                        onChange={(value) => handleChange(value, "name")}
                        required
                    />
                    {inputValueName && (
                        <div
                            className="absolute right-6 top-4 flex h-7 w-7 cursor-pointer items-center justify-center"
                            onClick={() => handleClickClear("name")}
                        >
                            <Image
                                src="/clearField.svg"
                                alt="clear"
                                width={10}
                                height={10}
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
                <p className="h-[16.8px] text-[14px] leading-[16.8px] text-customOrange">
                    {nameError}
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="email"
                    className="text-[14px] leading-[16.8px] text-customGreyEleven"
                >
                    E-mail
                </label>
                <div className="relative flex flex-row">
                    <input
                        value={inputValueEmail}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        className={`w-full rounded-xl border-[1px] border-solid bg-white py-[18.5px] pl-4 pr-12 text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none ${emailError ? "border-customOrangeTwo shadow-md" : "border-customGreyTwelve shadow-none focus:border-customBlueSix"} hover:shadow`}
                        onChange={(value) => handleChange(value, "email")}
                        required
                    />
                    {inputValueEmail && (
                        <div
                            className="absolute right-6 top-4 flex h-7 w-7 cursor-pointer items-center justify-center"
                            onClick={() => handleClickClear("email")}
                        >
                            <Image
                                src="/clearField.svg"
                                alt="clear"
                                width={10}
                                height={10}
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
                <p className="h-[16.8px] text-[14px] leading-[16.8px] text-customOrange">
                    {emailError}
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="telephone"
                    className="text-[14px] leading-[16.8px] text-customGreyEleven"
                >
                    Phone number
                </label>
                <div
                    className={`relative flex h-[56px] flex-row rounded-xl border-[1px] border-solid bg-white px-2 py-1.5 ${phoneError ? "border-customOrangeTwo shadow-md" : "border-customGreyTwelve shadow-none focus:border-customBlueSix"} hover:shadow`}
                >
                    <PhoneInput
                        international
                        defaultCountry="US"
                        type="telephone"
                        name="telephone"
                        id="telephone"
                        value={inputValuePhone}
                        onChange={(value) => handleChange(value, "telephone")}
                        className="w-full text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none"
                        inputClass="w-full py-3 px-2 bg-transparent border-none outline-none"
                    />
                </div>
                <p className="h-[16.8px] text-[14px] leading-[16.8px] text-customOrange">
                    {phoneError}
                </p>
            </div>
            <div className="flex flex-col gap-1 py-3 max-sm:pt-2 max-sm:pb-0">
                <div className="items-top flex space-x-2 items-center max-sm:items-start">
                    <Checkbox
                        id="terms1"
                        checked={checkboxChecked}
                        onCheckedChange={handleCheckboxChange}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-[16px] leading-[19.2px] text-customBlackSix leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
                        >
                            By submitting you confirm that you’ve read and accepted the <Link href="https://drive.google.com/file/d/1SaRFtM6Ju29GN-TPSsuWAKxKtUuepSwg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-customOrange hover:text-customRedText">Privacy Policy</Link> and <Link href="https://drive.google.com/file/d/1rwdaSoEfJeYzZMUlGKo59BoE1Kgbviri/view?pli=1" target="_blank" rel="noopener noreferrer" className="text-customOrange hover:text-customRedText">Terms of conditions.</Link>
                        </label>
                    </div>
                </div>
                <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
                    {checkboxError}
                </p>
            </div>

            <button
                type="submit"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
            >
        <span className="text-[20px] font-semibold leading-[24px] text-white">
         {btnText}
        </span>
                <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
            </button>
        </form>
    );
};

export default SignUpForm;
