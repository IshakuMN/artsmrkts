"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateLanguage,
} from "./utils/validators";
import { send } from "process";
import { sendEmail } from "./api/send-email/route";

const FormCall = ({ setFormSubmitted, setIsActive }) => {
  const languages = ["Eng", "Ru", "Ar"];
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [inputValueLanguage, setInputValueLanguage] = useState("Eng");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [languageError, setLanguageError] = useState("");

  const formData = {
    name: inputValueName,
    email: inputValueEmail,
    message: "",
    language: inputValueLanguage,
  };

  const handleChange = (eventOrValue, name) => {
    if (name === "telephone") {
      setInputValuePhone(eventOrValue);
      setPhoneError(validatePhone(eventOrValue));
      return;
    }

    if (typeof eventOrValue === "string") {
      setInputValueLanguage(eventOrValue);
      setLanguageError(validateLanguage(eventOrValue));
      setIsDropdownOpen(false);
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
      case "language":
        setInputValueLanguage(value);
        setLanguageError(validateLanguage(value));
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
    setLanguageError(validateLanguage(inputValueLanguage));

    if (!nameError && !emailError && !phoneError && !languageError) {
      try {
        const response = await fetch("/api/sendMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(formData, "formData");
        if (response.ok) {
          // Handle success (e.g., display a success message)
        } else {
          // Handle error (e.g., display an error message)
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

      // sendEmail();

      alert("Form submitted successfully!");
      setInputValueName("");
      setInputValueEmail("");
      setInputValuePhone("");
      setInputValueLanguage("");
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setLanguageError("");
      setIsActive(false);
      setFormSubmitted(true);
    }
  };

  return (
    <form
      className="flex flex-col gap-2"
      name="form-call"
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
      <div className="flex flex-col gap-1">
        <label
          htmlFor="language"
          className="text-[14px] leading-[16.8px] text-customGreyEleven"
        >
          Support language
        </label>
        <div className="relative flex flex-row">
          <input
            value={inputValueLanguage}
            name="language"
            id="language"
            placeholder="Select language"
            className={`w-full rounded-xl border-[1px] border-solid bg-white py-[18.5px] pl-4 pr-12 text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none ${
              languageError
                ? "border-customOrangeTwo shadow-md"
                : "border-customGreyTwelve shadow-none focus:border-customBlueSix"
            } hover:shadow`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            readOnly
          />
          <div
            className="absolute right-6 top-4 flex h-7 w-7 cursor-pointer items-center justify-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Image
              src="/arrow.svg"
              alt="toggle"
              width={15}
              height={7}
              className={`transform object-contain transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 top-16 z-10 w-full rounded-lg border bg-white shadow-lg">
              {languages.map((language, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleChange(language, "language");
                    setIsDropdownOpen(false);
                  }}
                  className={`flex cursor-pointer flex-row justify-between border-b-[0.5px] border-solid border-customGrey px-6 py-2 hover:bg-customGreyTwo ${
                    inputValueLanguage === language ? "text-customOrange" : ""
                  }`}
                >
                  {language}
                  {inputValueLanguage === language && (
                    <span className="flex items-center justify-center">
                      <Image
                        src="arrow6.svg"
                        alt="arrow"
                        width={13}
                        height={8}
                        className="ml-2"
                      />
                    </span>
                  )}
                </p>
              ))}
            </div>
          )}
        </div>
        <p className="h-[16.8px] text-[14px] leading-[16.8px] text-customOrange">
          {languageError}
        </p>
      </div>
      <div className="flex flex-col gap-1 py-6">
        <div className="items-top flex items-center space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-[16px] font-medium leading-[19.2px] leading-none text-customBlackSix peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
            >
              Call me as soon as possible
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
      >
        <span className="text-[20px] font-semibold leading-[24px] text-white">
          Get a call
        </span>
        <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
      </button>
    </form>
  );
};

export default FormCall;
