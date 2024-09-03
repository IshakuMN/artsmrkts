const BonusStructure = ({ bonusDetails, footerNote}) => {

    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-8 w-full relative z-20">
            <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">Bonus structure:</h2>
            <div className="p-11 rounded-2xl bg-white">
                {bonusDetails.map((detail, index) => (
                    <p key={index}
                       className={`p-2.5 text-[20px] leading-[24px] text-customBlackOne ${
                           index < bonusDetails.length - 1 ? 'border-b-[1px] border-customGrey border-solid' : ''
                       }`}>
                        {detail}
                    </p>
                ))}
            </div>
            <p className="text-[20px] font-medium leading-[24px] text-customOrangeThree">{footerNote}</p>
        </div>
    );
};

export default BonusStructure;
