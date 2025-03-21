import React from "react";

interface PropTypes {
  children: React.ReactNode;
  altText?: React.ReactNode;
  bgColor?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  altText = children,
  bgColor = "bg-white",
  className,
  onClick,
}: PropTypes) {
  return (
    <button
      onClick={onClick}
      className={`group/btn relative cursor-pointer overflow-hidden h-[42px] w-fit flex flex-col items-center rounded-full ${bgColor} ${
        bgColor === "" && "border text-zinc-100"
      } text-black font-bold shadow-lg shadow-zinc-400 ${className}`}
    >
      <div className="w-full h-[42px] group-hover/btn:-translate-y-[40px] px-5 py-2 transition-all duration-300 ease-in-out">
        {children}
      </div>

      <div className="w-full h-[42px] group-hover/btn:-translate-y-[40px] px-5 py-2 transition-all duration-300 ease-in-out">
        {altText}
      </div>
    </button>
  );
}
