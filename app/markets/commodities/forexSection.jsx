import WhyChooseArtsmrkts from "../whyChooseArtsmrkts";

const forexFeatures = [
    {
        imageSrc: "/gold4.png",
        title: "Commodity derivatives",
        description: "Expand your investment approach by including a wide variety of well-known commodities such as gold, oil, and various energy resources"
    },
    {
        imageSrc: "/drop.png",
        title: "Adaptable trading",
        description: "Explore the commodities market effortlessly by trading gold (XAUUSD), oil, and other key resources throughout the week to enhance your trading performance"
    },
    {
        imageSrc: "/lock.png",
        title: "Investment security",
        description: "Invest in commodities with enhanced security measures, ensuring protection against unexpected losses from sudden market movements"
    },
    {
        imageSrc: "/shield.svg",
        title: "Gap protection",
        description: "Trade with confidence using our gap protection, which prevents slippage and ensures your trades execute exactly as planned, capturing even the smallest price changes."
    },
    {
        imageSrc: "/class.png",
        title: "Low & Stable spreads",
        description: "Trade gold, oil, and other commodities with ultra-tight spreads starting at 3 pips, ensuring stability and precision even during market volatility."
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
        subtitle="Trade commodities confidently, applying any trading strategy you prefer."
        features={forexFeatures}
    />
);

export default ForexSection;
