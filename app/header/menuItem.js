import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MenuItem = ({ label, isActive, handleClick, links = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
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
            src={isActive || isHovered ? "arrowRed.svg" : "arrow.svg"}
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
            className="box-shadow absolute left-0 top-[43px] z-30 flex w-[200px] flex-col rounded-lg bg-white"
            initial={{ opacity: 0, height: 0 }} // Начальное состояние
            animate={{ opacity: 1, height: "auto" }} // Анимация при появлении
            exit={{ opacity: 0, height: 0 }} // Анимация при исчезновении
            transition={{ duration: 0.3 }} // Длительность анимации
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                rel="noopener noreferrer"
                className="border-bottom px-4 py-1 hover:text-customOrange active:text-customOrangeFive"
              >
                <span className="text-[14px] leading-[16.8px]">
                  {link.text}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
