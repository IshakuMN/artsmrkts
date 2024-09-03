import Term from "../term";
import BonusStructure from "../bonusStructure";

const Terms = () => {
    const bonusDetails = [
        "Your first deposit of $100 or more gives 20% of bonus funds",
        "The Maximum amount of the bonus is $3000 (for the duration of using the account).",
        "Each withdrawal suspends the ability to receive bonuses for 48 hours.",
        "One account can hold no more than $3000 of bonus funds at a time",
        "The 20% Re-Deposit Bonus is added to your account automatically after the deposit."
    ];
    const leftBlockText = [
        "The invited client should create a live account at Artsmrkts and deposit a minimum of $100",
        "One account can hold no more than $3000 of bonus funds at a time"
    ];

    const rightBlockText = [
        "Then you’ll receive the fixed amount as a bonus funds to your account."
    ];

    return (
        <section className="rounded-t-[80px] bg-customGreyFour pt-[100px] pb-16 flex flex-col gap-24 relative">
            <div className="bg-custom-gradient-bonus-two absolute z-10 h-full w-full"></div>
            <Term
                leftBlockText={leftBlockText}
                rightBlockText={rightBlockText}
                buttonText="Get the bonus"
                buttonLink="/bonus"
                imageUrl="/flower.svg"
                imageAlt="flower"
            />
            <BonusStructure
                bonusDetails={bonusDetails}
            />
        </section>
    );
};

export default Terms;
