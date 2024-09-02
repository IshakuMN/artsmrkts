import HelpSection from "../HelpSection";

export default function Page() {
    return (
        <main className="relative">
            <HelpSection />
            <section className="relative">
                <div className="max-w-7xl mx-auto pt-16 pb-10 flex flex-col gap-11">
                    <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">We are here to help</h2>
                </div>
            </section>
        </main>
    );
}
