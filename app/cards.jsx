import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="min-w-80 mx-auto max-w-7xl max-sm:px-4">
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-[44px] font-medium leading-[51.2px]  max-sm:text-[24px] max-sm:leading-[28.8px] max-sm:mt-11 max-sm:mb-6">
            Trade on Forex. Profit on Forex
        </h1>
          <Link href="/sign-up" className="max-sm:hidden">
        <button className="h-fit rounded-full bg-customBlueFon px-6 py-2 font-semibold text-white hover:bg-[#182654] active:bg-[#001240]">
            Sign up
        </button></Link>
      </div>
      <div className="my-2 flex justify-between max-sm:flex-col max-sm:gap-5">
        <AccessCard />
        <MT4Card />
        <CustomizedService />
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
        <TransparentPricing />
        <div className="flex items-center">
          <Image src="/ethereums.png" width={73} height={123} alt="ethereums" className="max-sm:hidden"/>
        </div>
        <TightSpeed />

        <FastExecution />
          <Link href="/sign-up" className="hidden max-sm:inline-block">
              <button className=" h-fit rounded-full bg-customBlueFon px-6 py-2 font-semibold text-white hover:bg-[#182654] active:bg-[#001240] max-sm:inline-block max-sm:text-[14px] ma-sm:leading-[16.8px] max-sm:w-full">
                  Sign up
              </button></Link>
      </div>
    </div>
  );
};

export default Cards;

export const AccessCard = () => {
  return (
    <div className="card-gradient-bt relative h-[284px] w-[365px] overflow-hidden rounded-xl border bg-customGreyFour px-8 py-6 max-sm:h-full max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="relative z-10 h-full">
        {" "}
        {/* This replaces the card-content class */}
        <h1 className="mb-3 text-xl font-bold max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-medium max-sm:mt-6">24/5 Access</h1>
        <p className="w-56">
          Foreign exchange market opens Monday morning and trades through to
          Saturday morning
        </p>
        <Image
          src="/access.png"
          width={140}
          height={140}
          className="absolute -bottom-4 right-3 max-sm:w-[100px] max-sm:h-[82px] max-sm:bottom-20 max-sm:-right-5"
          alt="Access illustration"
        />
      </div>
    </div>
  );
};

export const MT4Card = () => {
  return (
    <div className="relative h-[284px] w-[615px] rounded-xl border bg-customGreyFour px-8 py-6 max-sm:h-full  max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="absolute right-16 top-8 z-20 max-sm:relative max-sm:right-0 max-sm:top-0">
        <h1 className="mb-3 text-xl  max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-medium max-sm:mt-24">MT4 and more</h1>
        <p className="w-56">
          With charting and analysis, we are giving you a superior Forex trading
          experience
        </p>
      </div>
      <Image
        src="/mt4.png"
        width={336}
        height={336}
        className="mt4-hover absolute bottom-0 left-6 z-10 max-sm:w-[168px] max-sm:h-[158px] max-sm:bottom-32 max-sm:right-0 max-sm:left-auto"
      />
    </div>
  );
};

export const CustomizedService = () => {
  return (
    <div className="card-gradient-bt relative h-[284px] w-[267px] rounded-xl border bg-customGreyFour px-8 py-6 max-sm:h-full max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="relative z-10 h-full">
        <h1 className="mb-3 text-xl font-bold max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-medium max-sm:mt-5">Customized service</h1>
        <p className="w-48 max-sm:w-56">
          Our strategies are customised for each client&apos;s flexible and
          personalized trading conditions
        </p>
        <Image
          src="/customizedService.png"
          width={140}
          height={140}
          className="absolute -bottom-4 right-3 max-sm:bottom-10 max-sm:-right-8"
        />
      </div>
    </div>
  );
};

export const TransparentPricing = () => {
  return (
    <div className="card-gradient-tb relative h-[224px] w-[365px] rounded-xl border bg-customGreyFour px-8 pb-6 pt-14 max-sm:h-full max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="relative z-10 h-full">
        <h1 className="mb-3 text-xl font-bold max-sm:font-medium">Transparent pricing</h1>
        <p className="w-58">
          The accuracy of the prices in our system is so transparent that you
          can trade using a very high level of precision
        </p>
        <Image
          src="/transparentPricing.png"
          width={81}
          height={68}
          className="absolute -top-12 right-3 max-sm:-top-5 max-sm:-right-6"
        />
      </div>
    </div>
  );
};

export const TightSpeed = () => {
  return (
    <div className="card-gradient-bg card-r-gradient-bg relative h-[224px] w-[283px] rounded-xl border px-8 pb-6 pt-14  max-sm:bg-customGreyFour max-sm:h-full max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="relative z-10 h-full">
          <div className="flex items-center">
              <Image src="/ethereums.png" width={73} height={123} alt="ethereums" className="hidden max-sm:inline-block absolute top-0 right-0"/>
          </div>
        <h1 className="mb-3 text-xl font-bold max-sm:font-medium">Tight spreads</h1>
        <p className="w-58 max-sm:w-52">
          We are keeping the spreads for all our markets consistently low to
          give you the best value service
        </p>
      </div>
    </div>
  );
};

export const FastExecution = () => {
  return (
    <div className="card-gradient-tb relative h-[224px] w-[510px] rounded-xl border bg-customGreyFour px-8 pb-6 pt-14 max-sm:bg-customGreyFour max-sm:h-full max-sm:max-w-[343px] max-sm:w-full max-sm:p-8">
      <div className="relative z-10 h-full">
        <Image
          src="/fastExecution.png"
          width={204}
          height={204}
          className="absolute -top-16 max-sm:-right-14 max-sm:h-40 max-sm:w-40 max-sm:-top-8"
        />
        <div className="absolute right-6 max-sm:relative max-sm:right-0">
          <h1 className="mb-3 text-xl font-bold max-sm:font-medium">Fast execution</h1>
          <p className="w-56 max-sm:w-52">
            Our technology allows us to provide fast and reliable order that is
            critical to any trader success in the Forex
          </p>
        </div>
      </div>
    </div>
  );
};
