import BannerBonus from "../bannerBonus";
import AboutBonus from "./aboutBonus";
import Terms from "./terms";

export default function Page() {
    return (
        <main className="relative">
            <BannerBonus
                imageSrc="/bonusMoney.png"
                imageAlt="bonus money"
                title="Celebrate summer with a"
                highlightText="30% Welcome Bonus"
                buttonText="Get the bonus"
                linkHref="/bonus"
            />
            <AboutBonus />
            <Terms />
        </main>
    );
}
