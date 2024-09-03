import Image from "next/image";

const Dialogue = () => {
  return (
    <div className="box-shadow-two hover:bg-customOrange active:bg-customOrangeThree fixed bottom-20 right-20 z-50 flex h-[60px] w-[60px] cursor-pointer justify-center rounded-[100px] bg-customOrangeTwo">
      <Image
        src="dialogue.svg"
        alt="dialogue"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>
  );
};

export default Dialogue;
