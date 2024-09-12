import Image from "next/image";
import SignUpForm from "../signUpForm";
export default function Page() {
    return (
        <main className="relative">
            <section className="mx-auto flex max-w-screen-xl flex-row gap-5 py-16">
                <div className="flex flex-col gap-8 rounded-2xl bg-customGreyTen px-11 py-14 flex-1">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] font-medium leading-[38.4px] text-customBlueTwo">
                            Open new account
                        </h1>
                    </div>
                        <SignUpForm btnText="Sign up"/>
                </div>
                <Image
                    src="/mancomp.png"
                    alt="Man at computer"
                    width={632}
                    height={624}
                    className="rounded-2xl object-cover flex-1"
                />
            </section>
        </main>
    );
}
