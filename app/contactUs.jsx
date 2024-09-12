import Image from "next/image";
import ContactForm from "./contactForm";

const ContactUs = ({introduction}) => {

    return (
        <main className="relative">
            <section className="mx-auto max-w-[1194px] flex flex-row gap-5 pb-16 pt-24">
                <div className="bg-white rounded-2xl p-11 flex-1 border-[1px] border-solid border-customGrey relative">
                    <Image src="/logo _3.svg" alt="logo" height={118} width={171}
                           className="object-contain absolute bottom-0 right-11"/>
                    {introduction ? <div className="border-l-[3px] border-solid border-customOrangeSix">
                        <p className="pl-4 text-[32px] font-medium leading-[38.1px] text-customBlackOne">For more
                            information about our Master IB Program, simply fill out and submit the form, and our team
                            will assist you promptly.</p>
                    </div> : <div className="flex flex-col">
                        <h2 className="text-[32px] font-medium leading-[38.1px] text-customBlackOne">Can`t find what you
                            are looking for? We are Here to help!</h2>
                        <p className="text-[20px] leading-[24px] pt-6 text-customGreyEleven">Please leave you contact
                            and message, we will contact within you within 1 working day.</p>
                    </div>}
                </div>
                <div className="bg-customGreyTen rounded-2xl p-11 flex-1">
                    <ContactForm/>
                </div>
            </section>
        </main>
    );
}

export default ContactUs;