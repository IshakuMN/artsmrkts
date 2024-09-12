import Image from "next/image";
import Link from "next/link";
import MenuItem from "@/app/header/menuItem";

const Popup = ({activeMenu, handleClickBurger, activeMenuPopup, setActiveMenuPopup}) => {

    const handleActiveMenuPopup = (value) => {
        setActiveMenuPopup(value);
    }
    return (
        <div className={`flex flex-row max-sm:${activeMenu ? 'flex ' : 'hidden'} max-sm:absolute max-sm:min-w-80 max-sm:flex-col max-sm:top-[67px] max-sm:left-0 max-sm:p-4 max-sm:bg-customGreyFour max-sm:w-full max-sm:z-30`}>
            <button type="button" onClick={handleClickBurger}
                    className="hidden items-center justify-center h-[35px] w-[35px] rounded-[44px] ml-auto border-[1px] border-solid border-customGrey max-sm:flex hover:bg-customGreyTwo active:bg-customGrey">
                <Image src="/close.svg" alt="close" width={8} height={8}/></button>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("сompany")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px] hover:customOrangeThree">Company</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "сompany" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "сompany" && (
                    <div
                        className="pl-7 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">About
                                Artsmrkts</p>
                            <Link href="/why-artsmrkts" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Why
                                Artsmrkts</Link>
                            <Link href="/license-regulations" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer  text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">License
                                & Regulations</Link>
                            <Link href="/client-protection" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Client
                                Fund Protection</Link>
                            <Link href="/contact-us" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven  py-2.5 active:text-customRedText active:text-transparent">Contact
                                us</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">User
                                Support</p>
                            <Link href="/help-cente" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Help
                                center</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer font-semibold text-customBlackFour pt-6 pb-3">Promotions</p>
                            <Link href="/welcome-bonus" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Welcome
                                bonus</Link>
                            <Link href="/re-deposit-bonus" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Re-deposit
                                bonus</Link>
                            <Link href="/refer-bonus" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5  cursor-pointer active:text-customRedText active:text-transparent">Refer
                                bonus</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold active:text-customRedText active:text-transparent pt-6 pb-3">Work
                                with Us</p>
                            <Link href="/career" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Career
                                in Artsmrkts</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("markets")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px] hover:customOrangeThree">Markets & Tools</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "markets" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "markets" && (
                    <div
                        className="pl-7 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Markets</p>
                            <Link href="/markets/forex" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Forex</Link>
                            <Link href="/markets/commodities" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer  text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Commodities</Link>
                            <Link href="" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyFifteen py-2.5">Stocks (soon)</Link>
                            <Link href="/markets/indices" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven  py-2.5 active:text-customRedText active:text-transparent">Indices</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Tools</p>
                            <Link href="/trading-hours" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Trading hours</Link>
                            <Link href="/calculator" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">calculator</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer font-semibold text-customBlackFour pt-6 pb-3">Press</p>
                            <Link href="/markets-news" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Market News</Link>
                            <Link href="/economic-calendar" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Economic Calendar</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("education")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px] hover:customOrangeThree">Education</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "education" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "education" && (
                    <div
                        className="pl-7 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Educational Materials</p>
                            <Link href="/basics-trading" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Basics of Trading</Link>
                            <Link href="/technical-analysis" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer  text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Technical analysis</Link>
                            <Link href="/articles" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Articles</Link>
                            <Link href="/forex-glossary" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven  py-2.5 active:text-customRedText active:text-transparent">Forex Glossary</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Analytics</p>
                            <Link href="/markets-news" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Market overview</Link>
                            <Link href="/caily-forecast" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Daily Forecast</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer font-semibold text-customBlackFour pt-6 pb-3">Live Sessions & Videos</p>
                            <Link href="/webinar" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Webinar</Link>
                            <Link href="/educational-videos" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] text-customGreyEleven py-2.5 cursor-pointer active:text-customRedText active:text-transparent">Educational Videos</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("trading")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px] hover:customOrangeThree">Trading</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "trading" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "trading" && (
                    <div
                        className="pl-7 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Trade with Artsmrkts</p>
                            <Link href="/trading-account-types" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Trading Account Types</Link>
                            <Link href="/open-trading-account" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer  text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Open Trading Account</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Treading Platforms</p>
                            <Link href="/mt4-pc" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">MT4 for PC</Link>
                            <Link href="/mt4-android" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">MT4 for Android</Link>
                            <Link href="/mt4-iPhone" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">MT4 for iPhone</Link>
                            <Link href="/mt4-webtrading-platform" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">MT4 for AndroidMT4 for WebTrading Platform</Link>
                            <p className="text-[16px] leading-[19.2px] cursor-pointer font-semibold text-customGreyFifteen pt-6 pb-3">Copytrading (soon)</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("partnership")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px] hover:customOrangeThree">Partnership</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "partnership" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "partnership" && (
                    <div
                        className="pl-7 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-[16px] leading-[19.2px] cursor-pointer text-customBlackFour font-semibold pt-6 pb-3 ">Introduction broker (IB)</p>
                            <Link href="/introduction-broker" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Introduction broker (IB)</Link>
                            <Link href="/affilates" onClick={handleClickBurger}
                                  className="text-[16px] leading-[19.2px] cursor-pointer  text-customGreyEleven py-2.5 active:text-customRedText active:text-transparent">Affilates</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div
                    className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
                    onClick={() => handleActiveMenuPopup("language")}>
                    <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px]">Language</p>
                    <div className="flex h-2.5 w-2.5 items-center justify-center">
                        <Image
                            src="arrow.svg"
                            alt="arrow"
                            width={10}
                            height={10}
                            className={`object-contain transform transition-transform duration-300 ${activeMenuPopup === "language" ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                </div>
                {activeMenuPopup === "language" && (
                    <>
                        <div
                            className="py-2.5 pl-11 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                            <div className="flex flex-row gap-2">
                                <Image src="/english.svg" alt="english" width={15} height={15}
                                       className="object-contain"/>
                                <p className="text-[16px] leading-[19.2px] cursor-pointer  active:text-customRedText active:bg-transparent">English</p>
                            </div>
                            <Image src="/arrow11.svg" alt="arrow" width={12} height={10}
                                   className="object-contain"/>
                        </div>
                        <div
                            className="py-2.5 pl-11 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                            <div className="flex flex-row gap-2">
                                <Image src="/ar.svg" alt="ar" width={15} height={15}
                                       className="object-contain"/>
                                <p className="text-[16px] leading-[19.2px] cursor-pointer  active:text-customRedText active:bg-transparent">عربي</p>
                            </div>
                            <Image src="/arrow11.svg" alt="arrow" width={12} height={10}
                                   className="object-contain"/>
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}
export default Popup;