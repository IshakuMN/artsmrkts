import WhyChooseArtsmrkts from "../whyChooseArtsmrkts";

const forexFeatures = [
    {
        imageSrc: "/gold4.png",
        title: "Wide range of FX derivatives",
        description: "Our selection of the world’s most-traded currencies indices over 60 instruments, available for trading 24/7."
    },
    {
        imageSrc: "/circle.png",
        title: "Swap-free trading",
        description: "Artsmrkts offers swap-free (Islamic) Forex accounts that comply with Islamic beliefs by avoiding interest charges. These accounts don’t incur swap or rollover fees for overnight positions and are suitable for Muslims or anyone avoiding swap fees."
    },
    {
        imageSrc: "/class.png",
        title: "Low & Stable spreads",
        description: "Trade Forex majors, minors, or exotic instruments with ultra-tight spreads starting from 3 pips, providing stability even in volatile market conditions."
    },
    {
        imageSrc: "/watch2.png",
        title: "Quick withdrawals",
        description: "Choose from various payment methods and receive quick approval for your requests, with processing completed within 15 minutes by deducting the amount from your account."
    },
    {
        imageSrc: "/shield.svg",
        title: "Gap protection",
        description: "Trade without worry with our gap protection. It prevents slippages, so your trades start and end right where you expect, without missing any small price changes."
    },
    {
        imageSrc: "/lightning.png",
        title: "Fast order execution",
        description: "Our technology ensures fast and reliable order execution, critical for Forex trading success. Your trades are completed almost instantly, giving you the speed needed for effective trading."
    }

];

const ForexSection = () => (
    <WhyChooseArtsmrkts
        title="Why choose Artsmrkts for your Forex trading?"
        features={forexFeatures}
    />
);

export default ForexSection;
