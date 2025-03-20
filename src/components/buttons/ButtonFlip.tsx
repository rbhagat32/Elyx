import React from "react";
import { IoIosReturnRight } from "react-icons/io";

interface PropTypes {
  children?: React.ReactNode;
  altText?: React.ReactNode;
  bgColor?: string;
}

const ButtonFlip = ({
  children = "Button",
  altText = children,
  bgColor = "bg-white",
}: PropTypes) => {
  return (
    <button
      className={`group/btn relative cursor-pointer overflow-hidden h-[42px] w-fit flex flex-col items-center rounded-full ${bgColor} ${
        bgColor === "" && "border text-zinc-100"
      } text-black font-bold shadow-lg shadow-zinc-400`}
    >
      <div className="w-full h-[42px] group-hover/btn:-translate-y-[40px] px-5 py-2 transition-all duration-300 ease-in-out">
        {children}
        <IoIosReturnRight className="inline-block ml-2" />
      </div>

      <div className="w-full h-[42px] group-hover/btn:-translate-y-[40px] px-5 py-2 transition-all duration-300 ease-in-out">
        {altText}
        <IoIosReturnRight className="inline-block ml-2" />
      </div>
    </button>
  );
};

export { ButtonFlip };
