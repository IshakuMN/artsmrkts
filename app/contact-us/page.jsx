import Image from "next/image";
import ContactForm from "../contactForm";

export default function Page() {
  return (
    <main className="relative">
      <section className="mx-auto flex max-w-screen-xl flex-row gap-5 py-16">
        <div className="flex flex-col gap-8 rounded-2xl bg-customGreyTen px-11 py-14">
          <div className="flex flex-col gap-2">
            <h1 className="text-[32px] font-medium leading-[38.4px] text-customBlueTwo">
              Contact us
            </h1>
            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">
              Please complete the form below and submit your question. Our
              professional team will assist you.
            </p>
          </div>
          <ContactForm />
        </div>
        <Image
          src="/man at computer.png"
          alt="Man at computer"
          width={632}
          height={755}
          className="rounded-2xl object-cover"
        />
      </section>
    </main>
  );
}
