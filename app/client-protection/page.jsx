"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const page = () => {
  return (
    <section className="">
      <h1 className="mb-4 mt-10 pl-[80px] text-[54px] font-semibold">
        Client fund protection
      </h1>
      <div className="relative flex flex-col rounded-t-[80px] bg-customGreyFour px-[100px] py-[80px]">
        <div className="bg-custom-gradient-bonus-two absolute h-full w-full"></div>

        <div className="flex">
          <div className="space-y-4 pt-32">
            <p className="max-w-[418px]">
              By working with Artsmrkts, clients can be confident in the
              safety of their financial assets and personal information.
            </p>
            <Image src="/longArrowSafety.svg" width={604} height={0} />
          </div>
          <div className="space-y-4">
            <Image
              src="/padLockSafety.svg"
              width={203}
              height={203}
              className=""
            />
            <p className="max-w-[582px] pl-14 text-[#AF2600]">
              The security of financial resources and the confidentiality of
              personal data of clients are our constant obligations to everyone
              who cooperates with our company.
            </p>
          </div>
        </div>
        <Reliability />
        <Guarantee />
        <SafetyMethods />
      </div>
    </section>
  );
};

export default page;

const Reliability = () => {
  return (
    <div>
      <h2 className="mb-8 mt-28 text-[44px] font-medium">
        Reliability with Artsmrkts
      </h2>
      <div className="flex flex-row space-x-3">
        <div className="flex flex-1 flex-col space-y-3">
          <div className="rounded-[16px] bg-white p-[32px]">
            <h3 className="text-xl font-semibold">Customized Service</h3>
            <Image
              src="/briefcase.svg"
              width={98}
              height={116}
              alt="briefcase"
            />
            <p>
              The successful work of Artsmrkts&apos;s risk-management team
              ensures the company&apos;s stability in any market situation. Our
              commitment to reliable operations and tailored service helps us
              effectively navigate market volatility and provide consistent
              support to our clients.
            </p>
          </div>
          <div className="flex space-x-3">
            <div className="rounded-[16px] bg-white p-[32px]">
              <h3 className="text-xl font-semibold">Segregated accounts</h3>
              <Image
                src="/creditCards.svg"
                width={90}
                height={76}
                alt="credit Cards"
              />
              <p>
                The funds of Artsmrkts clients are situated on the segregated
                bank accounts, which means that Artsmrkts own funds and funds
                of the clients are separated.
              </p>
            </div>
            <div className="rounded-[16px] bg-white p-[32px]">
              <h3 className="text-xl font-semibold">Qualified staff</h3>
              <Image
                src="/staffs.svg"
                width={90}
                height={76}
                alt="credit Cards"
              />
              <p>
                Artsmrkts staff members are high-level professionals with more
                than 10 years of experience in the financial area who are always
                ready to help and to provide qualified support to the clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-w-[305px] flex-1 flex-col rounded-[16px] bg-white p-[32px] pt-20">
          <Image src="/pillars.svg" width={90} height={76} alt="credit Cards" />
          <h3 className="my-2 text-xl font-semibold">
            Liquidity of biggest banks
          </h3>
          <p className="flex-grow">
            Liquidity for Artsmrkts company is provided by 18 biggest world
            banks. Moreover, the clients of the company get only the best prices
            from the price float which is offered by these banks for the most
            beneficial orders.
          </p>
        </div>
      </div>
    </div>
  );
};

const Guarantee = () => {
  return (
    <div className="mb-20 mt-28 flex h-[327px] space-x-10 rounded-[44px] bg-[#182654]">
      {" "}
      <div className="-mt-8 ml-20 space-y-2">
        <div className="w-fit rounded-3xl bg-white px-6 py-10">
          <Image src="/logoSafety.svg" width={85} height={60} />
        </div>
        <div className="w-fit rounded-3xl bg-white px-4 py-5">
          <Image src="/safetyBadge.svg" width={104} height={104} />
        </div>
      </div>
      <div className="mt-20 space-y-6 text-white">
        <p className="max-w-[877px] text-[32px] font-medium leading-10">
          Guaranteeing the security of financial resources and the
          confidentiality of personal information is our key commitment to
          everyone who chooses Artsmrkts
        </p>
        <button className="flex items-center gap-x-4 rounded-full bg-customOrangeTwo px-10 py-3 text-lg font-semibold text-white hover:bg-customOrange active:bg-customOrangeThree">
          Open an account
          <Image src="/arrowWhite.svg" width={34} height={0} />
        </button>
      </div>
    </div>
  );
};

const SafetyMethods = () => {
  const cardItems = [
    {
      heading: "Data transfer protection",
      description:
        "Data transfer via an SSL security connection with encryption of information helps to prevent the interception of user data by a third party while working with the website, no matter where you are.",
    },
    {
      heading: "Protection from negative balance",
      description:
        "JustMarkets company makes compensations of the client's; losses that exceed the amount of funds on their trading accounts. This means that when negative balance takes place because of a sharp movement on the market, it will be set to zero in order to protect the clients from the unexpected losses.",
    },
    {
      heading: "International security",
      description:
        "Internal procedures of the company are based on the PCI DSS security standard, which involves a complex approach to information security of the clients&apos; data.",
    },
    {
      heading: "Data storage protection",
      description:
        "Data of users is protected not only while transferring between the company's website and the browser, we also provide an encryption of all stored information that helps to prevent unauthorized access to the data of our clients.",
    },
    {
      heading: "Multilevel system of servers",
      description:
        "Infrastructure, which consists of multiple servers, supports uninterrupted work of the system. And a complex scheme of data backup helps to prevent loss of the clients&apos; information (personal data, history of commercial transactions, etc.) in any situation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const getItemIndex = (index) => (index + cardItems.length) % cardItems.length;

  const moveToNext = useCallback(() => {
    setActiveIndex((prevIndex) => getItemIndex(prevIndex + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(moveToNext, 3000);
    return () => clearInterval(timer);
  }, [moveToNext]);

  const renderCard = (index) => {
    const item = cardItems[getItemIndex(index)];
    return (
      <div className="flex items-center border-l-4 px-4 py-4 transition-all duration-700">
        <div className="relative flex items-center">
          {index === activeIndex && (
            <div className="absolute -left-5 h-52 w-1 flex-shrink-0 rounded-full border-l-4 border-orange-500 transition-all duration-700"></div>
          )}
          <div
            className={`transition-all duration-700 ${
              index === activeIndex ? "text-black" : "text-gray-400"
            }`}
          >
            <h2 className="mb-1 text-[32px] font-medium">{item.heading}</h2>
            <p className="text-lg">{item.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="">
        <h2 className="mb-20 max-w-[535px] text-[44px] font-medium leading-[50px]">
          How does Artsmrkts ensure your safety?
        </h2>
        <Image
          src="/phoneSafety.svg"
          width={430}
          height={513}
          className="mx-auto ml-20"
        />
      </div>
      <div className="relative h-[600px] w-full max-w-[486px] overflow-hidden">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${activeIndex * 200}px)` }}
          onClick={moveToNext}
        >
          {[...Array(cardItems.length + 2)].map((_, index) =>
            renderCard(index),
          )}
        </div>
      </div>
    </div>
  );
};
