import Promo from "./promo";
import AboutForex from "./aboutForex";
import Banner from "./banner";

export default function Page() {
    return (
        <main className="relative">
            <Banner />
            <AboutForex />
            <Promo />
        </main>
    );
}
