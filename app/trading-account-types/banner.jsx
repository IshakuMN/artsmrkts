import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="bg-customGreyFour">
            <div className=" flex flex-col bg-custom-gradient-types-two">
                <div className="flex flex-row max-w-screen-xl mx-auto">
                    <div className="flex flex-col gap-6 max-w-[755px] pb-24 pt-16">
                        <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree">Swap Free
                            Islamic Forex Account</h1>
                        <p className="text-[20px] leading-[24px] text-customGreyEleven">Artsmrkts offers swap-free
                            accounts (also known as Islamic Forex accounts or Shariah Forex accounts). These
                            accounts comply with Islamic religious beliefs. According to the Islamic religion, any
                            business transaction in which one of the parties has to pay or receive some interest
                            from another party is forbidden.</p>
                    </div>
                    <Image src="/lamp.png" alt="lamp" width={556} height={408} className="object-contain"/>
                </div>
                <div className="bg-white rounded-t-[80px]  pb-4">
                    <div className="mx-auto max-w-screen-xl pt-8 pb-4 flex flex-row justify-between">
                        <p className="text-[20px] leading-[24px] text-customGreyEleven max-w-[738px]">To open a
                            swap-free account please go the Artsmrkts account opening form, open your account and
                            then email us at <span
                                className="text-customOrangeTwo">customersevices@artsmrkts.com</span> to convert
                            your account to swap free account.</p>
                        <div className="flex flex-col gap-6 max-w-[390px]">
                            <p className="text-[16px] leading-[19.2px] text-customOrangeThree">Please mention your
                                account number, and that you want to change to swap free account.</p>
                            <Link href="/sign-up">
                                <button
                                    type="submit"
                                    className="w-full flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                                ><span className="text-[16px] font-semibold leading-[19.2px] text-white">Sign up now</span>
                                    <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;