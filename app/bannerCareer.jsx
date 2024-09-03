import Link from "next/link";
import Image from "next/image";

const BannerCareer = () => {
    return (
        <section className="bg-customGreyFour rounded-b-[80px] relative">
            <div className="absolute w-full h-full bg-custom-gradient-banner-why z-10"></div>
            <div className="max-w-screen-xl mx-auto pb-14 flex flex-row justify-between gap-14 relative z-20">
                <div className="flex flex-col pt-16">
                    <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-6 max-w-lg">Career in
                        Artsmrkts</h1>
                    <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-lg">Artsmrkts aims to be a
                        great place to work, Matching, passionate committed people with work they enjoy. </p>
                    <Link href="/">
                        <button
                            type="submit"
                            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
                        >
                            <span className="text-[16px] font-semibold leading-[19.2px] text-white">
                                Become a part of the team
                            </span>
                            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
                        </button>
                    </Link>
                </div>
                <Image src="/people.png" alt="people" width={630} height={383} className="object-cover rounded-b-2xl"/>
            </div>
        </section>
    )
}
export default BannerCareer;