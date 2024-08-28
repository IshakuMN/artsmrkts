import Term from "../term";
import BonusStructure from "../bonusStructure";

const TermsReDeposit = () => {
  const bonusDetails = [
    "Your deposit of $100 or more gives 20% of bonus funds.",
    "The Maximum amount of the bonus is $3000 (for the duration of using the account).",
    "Each withdrawal suspends the ability to receive bonuses for 48 hours.",
    "One account can hold no more than $3000 of bonus funds at a time",
  ];

  const leftBlockText = [
    "The invited client should create a live account at Artsmarkets and deposit a minimum of $100",
    "One account can hold no more than $3000 of bonus funds at a time",
  ];

  const rightBlockText = [
    "Then you’ll receive the fixed amount as a bonus funds to your account.",
  ];

  return (
    <section className="relative flex flex-col gap-24 rounded-t-[80px] bg-customGreyFour pb-16 pt-[100px]">
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
        footerNote="*The 20% Re-Deposit Bonus is added to your account automatically after the deposit"
      />
    </section>
  );
};

export default TermsReDeposit;
