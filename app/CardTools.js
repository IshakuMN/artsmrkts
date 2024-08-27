import Image from "next/image";

const CardTools = ({
  id,
  title,
  imageSrc,
  isActive,
  isHovered,
  onClick,
  onHover,
  onLeave,
}) => {
  return (
    <li
      className="relative cursor-pointer overflow-hidden rounded-3xl bg-customBlue"
      onMouseEnter={() => onHover(id)}
      onClick={() => onClick(id)}
      onMouseLeave={onLeave}
    >
      {!isActive && (
        <div className="absolute left-0 top-0 z-20 h-full w-full rounded-3xl bg-customBlue opacity-40"></div>
      )}
      {isActive ? (
        <div className="bg-custom-gradient-four absolute left-0 top-0 z-30 mx-auto flex w-full flex-row gap-6 rounded-t-3xl pb-[51px] pl-8 pt-8">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[100px] bg-customOrangeEight">
            <Image src="arrowgroup.svg" alt="arrow" width={22} height={16} />
          </div>
          <p className="text-[44px] font-semibold leading-[52.8px] text-white">
            {title}
          </p>
        </div>
      ) : (
        <div
          className={`--webkit-transition-all --webkit-transition-duration-500 absolute top-0 z-30 mx-auto pt-8 transition-all duration-500 ease-in-out ${isHovered ? "left-[43%]" : "left-5"}`}
        >
          <div
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-[100px] ${isHovered ? "bg-customOrangeEight" : "bg-customBlueFive"}`}
          >
            <Image src="arrowgroup.svg" alt="arrow" width={22} height={16} />
          </div>
        </div>
      )}
      <Image
        src={imageSrc}
        alt={title}
        width={isActive ? 812 : isHovered ? 204 : 94}
        height={492}
        className={`--webkit-transition-all --webkit-transition-duration-500 h-full rounded-3xl object-cover transition-all duration-500 ease-in-out`}
      />
    </li>
  );
};

export default CardTools;
