import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-[44px] font-medium">
          Trade in Forex. profit in Forex
        </h1>
        <button className="h-fit rounded-full bg-customBlueFon px-6 py-2 text-white">
          Open live account
        </button>
      </div>
      <div className="my-2 flex justify-between">
        <AccessCard />
        <MT4Card />
        <CustomizedService />
      </div>
      <div className="flex justify-between">
        <TransparentPricing />
        <div className="flex items-center">
          <Image src="/ethereums.png" width={73} height={123} />
        </div>
        <TightSpeed />

        <FastExecution />
      </div>
    </div>
  );
};

export default Cards;

export const AccessCard = () => {
  return (
    <div className="card-gradient-bt relative h-[284px] w-[365px] overflow-hidden rounded-xl border bg-customGreyFour px-8 py-6">
      <div className="relative z-10 h-full">
        {" "}
        {/* This replaces the card-content class */}
        <h1 className="mb-3 text-xl font-medium">24/5 Access</h1>
        <p className="w-56">
          Foreign exchange market opens Monday morning and trades through to
          Saturday morning
        </p>
        <Image
          src="/access.png"
          width={140}
          height={140}
          className="absolute -bottom-4 right-3"
          alt="Access illustration"
        />
      </div>
    </div>
  );
};

export const MT4Card = () => {
  return (
    <div className="relative h-[284px] w-[615px] rounded-xl border bg-customGreyFour px-8 py-6">
      <div className="absolute right-16 top-8 z-20">
        <h1 className="mb-3 text-xl font-medium">MT4 and More</h1>
        <p className="w-56">
          With charting and analysis, we are giving you a superior Forex trading
          experience.
        </p>
      </div>
      <Image
        src="/mt4.png"
        width={336}
        height={336}
        className="mt4-hover absolute bottom-0 left-6 z-10"
      />
    </div>
  );
};

export const CustomizedService = () => {
  return (
    <div className="card-gradient-bt relative h-[284px] w-[267px] rounded-xl border bg-customGreyFour px-8 py-6">
      <div className="relative z-10 h-full">
        <h1 className="mb-3 text-xl font-medium">Customized Service</h1>
        <p className="w-48">
          Our strategies are customised for each client’s flexible and
          personalized trading conditions
        </p>
        <Image
          src="/customizedService.png"
          width={140}
          height={140}
          className="absolute -bottom-4 right-3"
        />
      </div>
    </div>
  );
};

export const TransparentPricing = () => {
  return (
    <div className="card-gradient-tb relative h-[224px] w-[365px] rounded-xl border bg-customGreyFour px-8 pb-6 pt-14">
      <div className="relative z-10 h-full">
        <h1 className="mb-3 text-xl font-medium">Transparent Pricing</h1>
        <p className="w-58">
          The accuracy of the prices in our system is so transparent that you
          can trade using a very high level of precision
        </p>
        <Image
          src="/transparentPricing.png"
          width={81}
          height={68}
          className="absolute -top-12 right-3"
        />
      </div>
    </div>
  );
};

export const TightSpeed = () => {
  return (
    <div className="card-gradient-bg card-r-gradient-bg relative h-[224px] w-[283px] rounded-xl border px-8 pb-6 pt-14">
      <div className="relative z-10 h-full">
        <h1 className="mb-3 text-xl font-medium">Tight Spreads</h1>
        <p className="w-58">
          We are keeping the spreads for all our markets consistently low to
          give you the best value service
        </p>
      </div>
    </div>
  );
};

export const FastExecution = () => {
  return (
    <div className="card-gradient-tb relative h-[224px] w-[510px] rounded-xl border bg-customGreyFour px-8 pb-6 pt-14">
      <div className="relative z-10 h-full">
        <Image
          src="/fastExecution.png"
          width={204}
          height={204}
          className="absolute -top-16"
        />
        <div className="absolute right-6">
          <h1 className="mb-3 text-xl font-medium">Fast execution</h1>
          <p className="w-56">
            Our technology allows us to provide fast and reliable order that is
            critical to any trader success in the Forex
          </p>
        </div>
      </div>
    </div>
  );
};
