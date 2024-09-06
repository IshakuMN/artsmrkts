"use client";
import Image from "next/image";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
} from "./utils/validators";

// import { sendEmail } from "./api/send-email/route";

const ContactForm = () => {
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const formData = {
    name: inputValueName,
    email: inputValueEmail,
    message: inputValueMessage,
    language: "",
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
      case "message":
        setInputValueMessage(value);
        setMessageError(validateMessage(value));
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
    setMessageError(validateMessage(inputValueMessage));

    if (!nameError && !emailError && !phoneError && !messageError) {
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
      setInputValueMessage("");
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setMessageError("");
    }
  };

  return (
    <form
      className="flex flex-col gap-2"
      name="form-contact"
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
      <div className="flex flex-col gap-1 py-4">
        <label
          htmlFor="message"
          className="text-[14px] leading-[16.8px] text-customGreyEleven"
        >
          Message
        </label>
        <div
          className={`relative flex h-[147px] flex-row rounded-xl border-[1px] border-solid bg-white px-4 pb-7 pt-1.5 hover:shadow ${messageError ? "border-customOrangeTwo shadow-md" : "border-customGreyTwelve shadow-none focus:border-customBlueSix"} `}
        >
          <textarea
            value={inputValueMessage}
            name="message"
            id="message"
            placeholder="Start typing the message"
            className="scrollbar-thin w-full resize-none overflow-auto border-none text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none"
            onChange={(value) => handleChange(value, "message")}
            required
          />
          <p className="absolute bottom-[8px] right-[16px] text-center text-[11px] leading-[16.8px] text-customGreyFourteen opacity-40">
            {inputValueMessage.length}/2000
          </p>
        </div>
        <p className="h-[16.8px] text-[14px] leading-[16.8px] text-customOrange">
          {messageError}
        </p>
      </div>

      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
      >
        <span className="text-[20px] font-semibold leading-[24px] text-white">
          Send
        </span>
        <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
      </button>
    </form>
  );
};

export default ContactForm;
