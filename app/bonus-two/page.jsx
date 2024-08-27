import BannerBonus from "../bannerBonus";
import Image from "next/image";
import AboutBonus from "./aboutBonus";
import Terms from "./terms";

export default function Page() {
    return (
        <main className="relative">
            <BannerBonus
                imageSrc="/telephone.png"
                imageAlt="telephone"
                title="Open an Account and Get Your"
                highlightText="20% re-deposit bonus!"
                buttonText="Get the bonus"
                linkHref="/bonus"
                children={ <Image src="/coin.svg" alt="coin" width={223} height={120} className="object-contain absolute bottom-5 right-16"/>}
            />
            <AboutBonus/>
            <Terms />
        </main>
    );
}
