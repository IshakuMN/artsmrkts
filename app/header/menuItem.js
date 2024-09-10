import Image from "next/image";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const MenuItem = ({label, isActive, handleClick, links = []}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="">
            <div
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`flex cursor-pointer flex-row items-center gap-3 px-4 py-2 ${
                    isActive ? "rounded-[44px] bg-customOrangeFour" : "bg-white"
                }`}
            >
                <div className="flex flex-row items-center">
          <span
              className={`text-[16px] leading-[19.2px] transition-colors duration-300 ease-in-out ${
                  isActive || isHovered
                      ? "text-customRedText"
                      : "text-customBlackFour"
              }`}
          >
            {label}
          </span>
                </div>
                <div className="flex h-2.5 w-2.5 items-center justify-center">
                    <Image
                        src={isActive || isHovered ? "/arrowRed.svg" : "/arrow.svg"}
                        alt="arrow"
                        width={7}
                        height={4}
                        className={`object-contain transition-transform ${isActive ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="box-shadow absolute left-0 top-[134px] z-50  w-full rounded-b-lg bg-white"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                    >
                        <div className="max-w-[808px] mx-auto py-6 flex flex-row gap-7 justify-start">
                            {Object.keys(links).map((section) => (
                                <div key={section}>
                                    <h3 className="text-[16px] font-semibold leading-[19.2px] border-bottom px-4 py-2">{section}</h3>
                                    <ul>
                                        {links[section].map((link) => (
                                            <li key={link.href}>
                                                <Link rel="noopener noreferrer" href={link.href}   onClick={handleClick}
                                                      className="px-4 py-1 text-[14px] leading-[16.8px] text-customBlackOne hover:text-customOrange active:text-customOrangeFive">{link.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    )}
            </AnimatePresence>
        </div>
    );
};

export default MenuItem;
