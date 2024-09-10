import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const RegulationsSection = ({ blocks, title }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const renderTableRows = (data) => (
        data.map((item) => (
            <tr key={item.name} className="h-[98px] flex flex-row">
                <th className="max-w-[353px] justify-center w-full flex flex-row items-center gap-4">
                    <Image src={item.img} alt={item.name} height={84} width={68} className="object-contain" />
                    <div className="flex flex-col items-start max-w-[206px] w-full">
                        <p className="text-[24px] font-semibold leading-[28.8px] text-customBlackOne">{item.name}</p>
                        <p className="text-[16px] leading-[19.2px] text-customBlackOne whitespace-nowrap">{item.subtitle}</p>
                    </div>
                </th>
                {[item.value1, item.value2, item.value3, item.value4, item.value5, item.value6].map((value, idx) => (
                    <th key={idx} className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">
                        {value}
                    </th>
                ))}
            </tr>
        ))
    );

    return (
        <section className="mx-auto flex max-w-[1240px] flex-col pt-16 gap-[85px]">
            <div className="flex flex-row gap-20">
                <h2 className="text-[52.8px] font-medium leading-[52.8px] text-customBlackFour flex-1">{title}</h2>
            </div>

            <div className="bg-customGreyTwo rounded-[44px]">
                {blocks.map((block, index) => (
                    <div key={index} className="rounded-t-[44px] bg-customGreyTwo pt-8 flex flex-col box-shadow-license">
                        <div className="flex flex-row justify-between items-center pb-8 px-6">
                            <p className="pl-4 pt-2 pb-3.5 text-[32px] leading-[38.4px] font-medium text-customBlackOne">
                                {block.title}
                            </p>
                            <button
                                onClick={() => toggleOpen(index)}
                                className="rounded-[44px] w-11 h-11 flex items-center justify-center border-[1px] border-solid border-customGrey bg-white hover:bg-customGreyTwo focus:bg-customGrey cursor-pointer"
                                style={{ willChange: 'transform' }}
                            >
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 270 : 90 }}
                                    transition={{ duration: 0.3 }}
                                    className="object-contain"
                                >
                                    <Image src="/arrow1.svg" alt="Previous" height={16} width={16} />
                                </motion.div>
                            </button>
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    className="flex flex-col gap-6 bg-white"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.1 }}
                                    style={{ willChange: 'height, opacity' }}
                                >
                                    <table className="w-full">
                                        <thead className="border-b-[1px] border-solid border-customGrey">
                                        <tr className="flex flex-row h-[104px] justify-between">
                                            {['Instrument', 'Avg.spreads', 'Commission', 'Margin', 'Long swap', 'Short swap', 'Stop level*'].map((header, idx) => (
                                                <th key={idx} className="max-w-[145px] w-full flex justify-center flex-col items-center">
                                                    <p className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo">{header}</p>
                                                    {header !== 'Instrument' && <span className="text-[14px] text-customGreyEleven leading-[16.8px]">pips</span>}
                                                </th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {renderTableRows(block.content)}
                                        </tbody>
                                    </table>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
                <div className="bg-custom-gradient-license border-[1px] border-solid border-customGrey p-11 rounded-[44px] flex flex-row gap-1 justify-end">
                    <Image src="/line2.svg" alt="line" width={231} height={4} className="object-contain" />
                    <span className="text-[24px] font-medium leading-[28.8px] text-white">artsmrkts</span>
                </div>
            </div>
        </section>
    );
};

export default RegulationsSection;
