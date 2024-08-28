"use client";
import Image from "next/image";
import {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function Page() {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueMessage, setInputValueMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    const checkNameAvailability = async (name) => {
        try {
            const lowerCaseName = name.toLowerCase();
            const response = await fetch(`/api/check-name?name=${encodeURIComponent(lowerCaseName)}`);
            const result = await response.json();

            if (result.exists) {
                setNameError('This name is already in use');
            } else {
                setNameError('');
            }
        } catch (error) {
            setNameError('Error checking name availability');
        }
    };

    const checkEmailAvailability = async (email) => {
        try {
            const response = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`);
            const result = await response.json();

            if (result.exists) {
                setEmailError('This email is already in use');
            } else {
                setEmailError('');
            }
        } catch (error) {
            setEmailError('Error checking email availability');
        }
    };

    const validateName = (name) => {
        const namePattern = /^[A-Za-z\s\-']+$/;
        if (name.length < 1) {
            setNameError('Name is required');
        } else if (name.length < 2) {
            setNameError('Name must be at least 2 characters long');
        } else if (name.length > 50) {
            setNameError('Name must be less than 50 characters long');
        } else if (!namePattern.test(name)) {
            setNameError('Name can only contain letters, spaces, dashes, and apostrophes');
        } else {
            setNameError('');
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
        } else if (email.length < 4) {
            setEmailError('Email is too long. Minimum length is 4 characters');
        } else if (email.length > 50) {
            setEmailError('Email is too long. Maximum length is 50 characters');
        } else if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePhone = (phone) => {
        if (!phone) {
            setPhoneError('Phone number is required');
        } else if (!/^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone)) {
            setPhoneError('Invalid phone number format');
        } else {
            setPhoneError('');
        }
    };

    const validateMessage = (message) => {
        if (message.length < 1) {
            setMessageError('Message is required');
        } else if (message.length > 2000) {
            setMessageError('Message too long. Message must be no more than 2000 characters');
        } else {
            setMessageError('');
        }
    };

    const handleChange = (eventOrValue, name) => {
        if (name === 'telephone') {
            setInputValuePhone(eventOrValue);
            validatePhone(eventOrValue);
            return;
        }

        const { name: fieldName, value } = eventOrValue.target;
        switch (fieldName) {
            case 'name':
                setInputValueName(value);
                validateName(value);
                checkNameAvailability(value);
                break;
            case 'email':
                setInputValueEmail(value);
                validateEmail(value);
                checkEmailAvailability(value);
                break;
            case 'message':
                setInputValueMessage(value);
                validateMessage(value);
                break;
            default:
                break;
        }
    };

    const handleClickClear = (field) => {
        switch (field) {
            case 'name':
                setInputValueName('');
                setNameError('');
                break;
            case 'email':
                setInputValueEmail('');
                setEmailError('');
                break;
            case 'telephone':
                setInputValuePhone('');
                setPhoneError('');
                break;
            case 'message':
                setInputValueMessage('');
                setMessageError('');
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        validateName(inputValueName);
        validateEmail(inputValueEmail);
        validatePhone(inputValuePhone);
        validateMessage(inputValueMessage);
    };

    return (
        <main className="relative">
            <section className="mx-auto max-w-[1280px] flex flex-row gap-5 py-16">
                <div className="bg-customGreyTen rounded-2xl px-11 py-14 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] font-medium leading-[38.4px] text-customBlueTwo">Contact us</h1>
                        <p className="text-[16px] leading-[19.2px] text-customGreyEleven">Please complete the form below
                            and submit your question. Our professional team will assist you.</p>
                    </div>
                    <form className="flex flex-col gap-2" name="form-contact" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name"
                                   className="text-[14px] leading-[16.8px] text-customGreyEleven">Name</label>
                            <div className="relative flex flex-row">
                                <input
                                    value={inputValueName}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Jack Jackson"
                                    className={`w-full bg-white border-[1px] border-solid  rounded-xl pl-4 pr-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${nameError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow `}
                                    onChange={(value) => handleChange(value, 'name')}
                                    required
                                />
                                {inputValueName && (
                                    <div
                                        className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                                        onClick={() => handleClickClear('name')}
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
                            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{nameError}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email"
                                   className="text-[14px] leading-[16.8px] text-customGreyEleven">E-mail</label>
                            <div className="relative flex flex-row">
                                <input
                                    value={inputValueEmail}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@example.com"
                                    className={`w-full bg-white border-[1px] border-solid  rounded-xl pl-4 pr-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${emailError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow `}
                                    onChange={(value) => handleChange(value, 'email')}
                                    required
                                />
                                {inputValueEmail && (
                                    <div
                                        className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                                        onClick={() => handleClickClear('email')}
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
                            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{emailError}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="telephone" className="text-[14px] leading-[16.8px] text-customGreyEleven">
                                Phone number
                            </label>
                            <div className={`h-[56px] relative flex flex-row px-2 py-1.5 border-[1px] border-solid rounded-xl bg-white ${phoneError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow`}>
                                <PhoneInput
                                    international
                                    defaultCountry="US"
                                    type="telephone"
                                    name="telephone"
                                    id="telephone"
                                    value={inputValuePhone}
                                    onChange={(value) => handleChange(value, 'telephone')}
                                    className="w-full  text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none"
                                    inputClass="w-full py-3 px-2 bg-transparent border-none outline-none"
                                />
                            </div>
                            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{phoneError}</p>
                        </div>
                        <div className="flex flex-col gap-1 py-4">
                            <label htmlFor="message"
                                   className="text-[14px] leading-[16.8px] text-customGreyEleven">Message</label>
                            <div className={`relative flex flex-row h-[118px] bg-white border-[1px] border-solid rounded-xl px-4 pt-1.5 pb-7 hover:shadow ${messageError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'}  `}>
                                <textarea
                                    value={inputValueMessage}
                                    name="message"
                                    id="message"
                                    placeholder="Start typing the message"
                                    className='w-full border-none text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none resize-none overflow-auto scrollbar-thin'
                                    onChange={(value) => handleChange(value, 'message')}
                                    required
                                />
                                <p className="absolute right-[16px] bottom-[8px] text-[11px] leading-[16.8px] text-customGreyFourteen opacity-40 text-center">
                                    {inputValueMessage.length}/2000
                                </p>
                            </div>
                            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{messageError}</p>
                        </div>


                        <button
                            type="submit"
                            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                        >
                            <span className="text-[20px] font-semibold leading-[24px] text-white">
                                Send
                            </span>
                            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
                        </button>
                    </form>
                </div>
                <Image
                    src="/man at computer.png"
                    alt="Man at computer"
                    width={632}
                    height={755}
                    className="object-cover rounded-2xl"
                />
            </section>
        </main>
    );
}
