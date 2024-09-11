import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpButton = () => (
    <Link href="/start-now">
      <button
          type="submit"
          className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
      >
            <span className="text-[16px] font-semibold leading-[19.2px] text-white">
                Start now
            </span>
        <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3} />
      </button>
    </Link>
);

const Page = () => {
  return (
    <main>
      <section className="relative bg-customGreyFour bg-custom-gradient-types-two rounded-b-[80px]">
        <div className="max-w-screen-xl mx-auto py-11 flex flex-row gap-16 justify-between">
          <div className="flex flex-col mb-14">
            <h1 className="text-[54px] font-semibold leading-[64.8px] text-customBlueThree pb-4 max-w-[507px] mt-16">
                Introducing
                Broker Program
            </h1>
            <p className="text-[20px] leading-[24px] text-customGreyEleven pb-11 max-w-[507px]">Get rewarded from the trading activity of every active client you refer to Artsmrkts.

            </p>
            <SignUpButton />
          </div>
          <Image src="/men2.png" alt="men" width={627} height={388} className="object-cover rounded-b-2xl" />
        </div>
      </section>
    </main>
  );
};

export default Page;

