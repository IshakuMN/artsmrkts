import WhyChooseArtsmrkts from "../whyChooseArtsmrkts";

const forexFeatures = [
    {
        imageSrc: "/mosque.png",
        title: "Сonditions",
        description: "Islamic Forex accounts are also known as swap-free Forex accounts, because, within this kind of account, no swap or roll-over interest will be charged to or incurred on positions that are held overnight."
    },
    {
        imageSrc: "/moon.png",
        title: "Suitable for whom",
        description: "Islamic Forex accounts are designed specifically for Muslims as swaps contravene their religious beliefs and to clients who don’t wish to be charged swap fees. Islamic accounts give their owners an opportunity to hold their positions for an unlimited amount of time (Trading Conditions Apply)."
    },
];

const ForexSection = () => (
    <WhyChooseArtsmrkts features={forexFeatures}
    />
);

export default ForexSection;
