const faqDataOne = [
    {
        question: "When is the Forex market open?",
        answer: "The Forex market is open 24 hours a day, five days a week from 00:00:00 (GMT+3) Monday to 23:59:59 (GMT+3) Friday."
    },
    {
        question: "Why is Forex closed on weekends?",
        answer: "Friday is the last day of the currency market operation, because large market participants, including various financial institutions, large funds, companies, and banks, are closing for the weekend."
    },
    {
        question: "What are Forex trading sessions?",
        answer: (
            <>
                <p className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">There are four
                    main Forex trading sessions:</p>
                <ul className="ml-4 flex flex-col list-disc pl-2">
                    <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">Pacific
                        trading session – 00:00-09:00 (EET);
                    </li>
                    <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">Asian
                        trading session – 02:00-12:00 (EET);
                    </li>
                    <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">European
                        trading session – 10:00-19:00 (EET);
                    </li>
                    <li className="text-[16px] font-normal leading-[19.2px] text-customBlackSix">American
                        trading session – 15:00-01:00 (EET).
                    </li>
                </ul>
            </>
        )
    },
    {
        question: "What is EET?",
        answer: "EET means Eastern European Time: GMT+2 in winter, GMT+3 in summer."
    },
    {
        question: "What is the best time of the day to trade Forex?",
        answer: "The highest trading activity takes place during the European and American sessions, so these hours are considered the best time to trade. During this period, most transactions are carried out, and trading spreads are the lowest."
    }
];

export default faqDataOne;