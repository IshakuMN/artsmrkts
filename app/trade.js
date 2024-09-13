import Link from "next/link";
import Image from "next/image";

const Trade = () => {
  return (
    <section className="relative mx-auto mb-20 mt-16 flex max-w-7xl flex-row rounded-3xl bg-customGreyFour min-w-80 max-sm:mx-4 max-sm:mt-5 max-sm:mb-11 max-sm:flex-col-reverse max-sm:overflow-hidden max-sm:bg-white">
      <div className="bg-custom-gradient absolute z-10 h-full w-full rounded-3xl"></div>
      <div className="relative z-20 mb-28 ml-36 mt-32 flex flex-1 flex-col overflow-hidden max-sm:mb-0 max-sm:ml-0 max-sm:mt-0 max-sm:px-6 max-sm:pb-10">
        <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-5">
            Trade Forex, Indices, Stocks and more with Artsmarkets - the best Forex broker
        </h3>
        <Link href="/sign-up" className="relative z-20 mt-16 flex-1 max-sm:mt-0 max-sm:w-full">
          <button
            type="button"
            className="flex cursor-pointer flex-row items-center justify-center max-sm:w-full rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
          >
            <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive max-sm:text-[14px] max-sm:leading-[16.8px]">
              Sign up
            </span>
          </button>
        </Link>
      </div>
      <Image
        src="magnet.svg"
        alt="magnet"
        width={617}
        height={408}
        className="relative -bottom-12 z-20 object-contain max-sm:w-[290px] max-sm:h-[173px] max-sm:bottom-0"
      />
    </section>
  );
};

export default Trade;
