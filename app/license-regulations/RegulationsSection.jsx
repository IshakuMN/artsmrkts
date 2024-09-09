import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import Image from 'next/image';

const RegulationsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const blocks = [
        {
            title: 'Seychelles Financial Services Authority (FSA)',
            content: 'Just Global Markets Ltd., registration number 8427198-1, is a Securities Dealer regulated by the Seychelles Financial Services Authority (FSA) under a Securities Dealer License number SD088.'
        },
        {title: 'Another Regulation', content: 'Information about another regulation goes here.'},
        {title: 'Additional Regulation', content: 'Details about an additional regulation.'},
        {title: 'Final Regulation', content: 'Some more regulatory information.'}
    ];

    return (
        <section className="mx-auto flex max-w-[1240px] flex-col pt-16 gap-[85px]">
            <div className="flex flex-row gap-20">
                <h2 className="text-[52.8px] font-medium leading-[52.8px] text-customBlackFour flex-1">Regulations</h2>
                <p className="text-[20px] leading-[24px] text-customBlackOne flex-1">
                    Our licenses and regulations provide a transparent and secure environment for your trading
                    activities. You can trade with confidence and peace of mind, knowing that your financial security is
                    our top priority.
                </p>
            </div>

            <div className="bg-customGreyTwo rounded-[44px]">
                {blocks.map((block, index) => (
                    <div key={index}
                         className="rounded-t-[44px] bg-customGreyTwo pt-8 flex flex-col box-shadow-license">
                        <div className="flex flex-row justify-between items-center pb-8 px-6">
                            <p className="pl-4 pt-2 pb-3.5 text-[32px] leading-[38.4px] font-medium text-customBlackOne">
                                {block.title}
                            </p>
                            <button
                                onClick={() => toggleOpen(index)}
                                className="rounded-[44px] w-11 h-11 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey cursor-pointer"
                                style={{willChange: 'transform'}}
                            >
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 270 : 90 }}
                                    transition={{duration: 0.3}}
                                    className="object-contain"
                                >
                                    <Image src="/arrow1.svg" alt="Previous" height={16} width={16}/>
                                </motion.div>
                            </button>
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    className="flex flex-col pb-8 px-6 gap-6 pt-3"
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: 'auto'}}
                                    exit={{opacity: 0, height: 0}}
                                    transition={{duration: 0.1}}
                                    style={{willChange: 'height, opacity'}}
                                >
                                    <p className="text-[20px] leading-[24px] text-customGreyEleven">
                                        {block.content}
                                    </p>
                                    <p className="text-[20px] leading-[24px] text-customGreyEleven">For more information
                                        and details, please click here.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))}
                <div
                    className="bg-custom-gradient-license border-[1px] border-solid border-customGrey p-11 rounded-[44px] flex flex-row gap-1 justify-end">
                    <Image src="/line2.svg" alt="line" width={231} height={4} className="object-contain"/>
                    <span className="text-[24px] font-medium leading-[28.8px] text-white">artsmrkts</span>
                </div>
            </div>
        </section>
    );
};

export default RegulationsSection;
