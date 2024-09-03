"use client";
import Image from 'next/image';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { validateName, validateEmail, validatePhone, validateMessage } from './utils/validators';

const ContactForm = () => {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueMessage, setInputValueMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleChange = (eventOrValue, name) => {
        if (name === 'telephone') {
            setInputValuePhone(eventOrValue);
            setPhoneError(validatePhone(eventOrValue));
            return;
        }

        const { name: fieldName, value } = eventOrValue.target;
        switch (fieldName) {
            case 'name':
                setInputValueName(value);
                setNameError(validateName(value));
                break;
            case 'email':
                setInputValueEmail(value);
                setEmailError(validateEmail(value));
                break;
            case 'message':
                setInputValueMessage(value);
                setMessageError(validateMessage(value));
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
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setNameError(validateName(inputValueName));
        setEmailError(validateEmail(inputValueEmail));
        setPhoneError(validatePhone(inputValuePhone));
        setMessageError(validateMessage(inputValueMessage));

        if (!nameError && !emailError && !phoneError && !messageError) {
            alert('Form submitted successfully!');
            setInputValueName('');
            setInputValueEmail('');
            setInputValuePhone('');
            setInputValueMessage('');
            setNameError('');
            setEmailError('');
            setPhoneError('');
            setMessageError('');
        }
    };

    return (
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
                <div className={`relative flex flex-row h-[147px] bg-white border-[1px] border-solid rounded-xl px-4 pt-1.5 pb-7 hover:shadow ${messageError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'}  `}>
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
    )
}

export default ContactForm;