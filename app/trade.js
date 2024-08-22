import Link from "next/link";
import Image from "next/image";

const Trade = () => {
  return (
    <section className="relative mx-auto mb-20 mt-16 flex max-w-7xl flex-row rounded-3xl bg-customGreyFour">
      <div className="bg-custom-gradient absolute z-10 h-full w-full rounded-3xl"></div>
      <div className="relative z-20 mb-28 ml-36 mt-32 flex flex-1 flex-col overflow-hidden">
        <h3 className="text-[32px] font-medium leading-[38.1px] text-customBlackFive">
          Trade Forex, Indices, Stocks and more with Artsmrkts - the best Forex
          broker
        </h3>
        <Link href="/login" className="relative z-20 mt-16 flex-1">
          <button
            type="button"
            className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
          >
            <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">
              Register
            </span>
          </button>
        </Link>
      </div>
      <Image
        src="magnet.svg"
        alt="magnet"
        width={617}
        height={408}
        className="relative -bottom-12 z-20 object-contain"
      />
    </section>
  );
};

export default Trade;
