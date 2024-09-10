"use client";
import React from "react";
import { useThemeContext } from "../context/nav";
import Link from "next/link";

const Nav = () => {
    const { activePage, setActivePage } = useThemeContext();

    return (
        <section className="bg-customGreyFour pt-6 pb-2">
            <div className="flex flex-row max-w-screen-xl mx-auto gap-2">
                <Link href="/markets/forex" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActivePage(1)}>
                    <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 1 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                    <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 1 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Forex</p>
                </Link>
                <Link href="/markets/commodities" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActivePage(2)}>
                    <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 2 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                    <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 2 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Commodities</p>
                </Link>
                <Link href="/markets/indices" className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer" onClick={() => setActivePage(3)}>
                    <div className={` w-2.5 h-2.5 rounded-2xl my-auto ${activePage === 3 ? 'bg-customOrange' : 'bg-customGreyFour'}`}></div>
                    <p className={`text-[16px] font-semibold leading-[19.2px] ${activePage === 3 ? 'text-customGreyEleven' : 'text-customGreyThree'}`}>Indices</p>
                </Link>
                <div className="flex flex-row py-4 px-2 gap-2.5 cursor-pointer">
                    <p className="text-[16px] font-semibold leading-[19.2px] text-customGrey">Stocks (soon)</p>
                </div>
            </div>
        </section>
    );
};

export default Nav;
