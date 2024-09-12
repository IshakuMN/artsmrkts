import WhyChooseArtsmrkts from "../../whyChooseArtsmrkts";

const forexFeatures = [
    {
        imageSrc: "/gold4.png",
        title: "Diverse stocks toolset",
        description: "With JustMarkets, you can explore a wide range of indices from around the world such as the Dow Jones, NASDAQ, FTSE100 or NIKKEI to diversify your trading portfolio."
    },
    {
        imageSrc: "/class.png",
        title: "Fast order execution",
        description: "At JustMarkets, your deals are done almost instantly. In just fractions of a second, we ensure that your trades are executed, giving you the speed you need to trade effectively."
    },
    {
        imageSrc: "/lightning.png",
        title: "Low & Stable spreads",
        description: "Trade Dow Jones, S&P 500, or NASDAQ indices with ultra-tight spreads starting from as low as 0.0 pips, ensuring stability even during market volatility."
    },
    {
        imageSrc: "/watch2.png",
        title: "Instant withdrawals",
        description: "Get your money fast when you want to take it out. Choose from various payment methods and get quick approval for your requests."
    },
    {
        imageSrc: "/circle.png",
        title: "Swap-free trading",
        description: "Every trader at JustMarkets has access to swap-free trading with no additional requirements, allowing to hold trades without extra charges."
    },
    {
        imageSrc: "/shield.svg",
        title: "Gap protection",
        description: "Trade without worry with our gap protection. It prevents slippages, so your trades start and end right where you expect, without missing any small price changes."
    }
];

const ForexSection = () => (
    <WhyChooseArtsmrkts
        title="Why trade indices with Artmrkts?"
        subtitle="From the tech-driven NASDAQ to the comprehensive S&P, JustMarkets gives you the edge in the highly competitive global indices market, ensuring you’re equipped for success."
        features={forexFeatures}
    />
);

export default ForexSection;
