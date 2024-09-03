import React from "react";
import Image from "next/image";
import TeamImages from "./teamImages";

import BannerCareer from "../bannerCareer";
import Growth from "../growth";

const page = () => {
  return (
    <main>
      <BannerCareer />
      <Growth />
      <Team />
      <TeamImages />
    </main>
  );
};

export default page;

const Team = () => {
  const cardItems = [
    {
      title: "Business development",
      image: "/handshakeTeam.png",
    },
    { title: " Marketing", image: "/marketingTeam.png" },
    { title: "Product", image: "/productTeam.png" },
    { title: "Customer support", image: "/customerSupportTeam.png" },
    { title: "Engineering", image: "/engineeringTeam.png" },
    { title: "Back office", image: "/backOfficeTeam.png" },
    { title: "Finance and Accounting", image: "/financeTeam.png" },
    { title: "HR & Administration", image: "/hrTeam.png" },
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <div className="my-6 flex items-end justify-between">
        <div className="max-w-[701px] space-y-6">
          <h1 className="text-[32px] font-medium">Choose your team</h1>
          <p>
            We strive to find a perfect place for every member of the
            Artsmarkets family and make sure everyone can reach their full
            potential.
          </p>
        </div>
        <button className="rounded-full border px-12 py-3 font-semibold text-[#851000]">
          see all jobs
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="flex max-w-[320px] items-center justify-between rounded-2xl border bg-[#FAFAFB] px-6"
          >
            <span className="text-lg">{item.title}</span>
            <Image src={item.image} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};
