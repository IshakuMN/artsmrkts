import Image from "next/image";

const CardMarketTrends = ({
  id,
  imageSrc,
  badge,
  title,
  description,
  isHoveredCard,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative cursor-pointer rounded-2xl ${isHoveredCard === id ? "box-shadow-three" : ""}`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      {badge && (
        <div className="absolute -top-3.5 right-7 flex h-[27px] w-max items-center justify-center rounded-[100px] bg-customOrangeSix px-4 py-2">
          <span className="text-[16px] leading-[19.2px] text-white">
            {badge}
          </span>
        </div>
      )}
      <Image
        src={imageSrc}
        alt={id}
        width={304}
        height={368}
        className="rounded-2xl"
      />
      <div
        className={`bg-custom-gradient-three absolute bottom-0 left-0 flex w-full flex-col gap-2 rounded-2xl px-4 pt-4 ${isHoveredCard === id ? "pb-20" : "pb-8"} transition-all duration-300 ease-in-out`}
      >
        <p className="text-[24px] font-medium leading-[28.8px] text-white">
          {title}
        </p>
        <p className="text-[16px] leading-[19.2px] text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardMarketTrends;
