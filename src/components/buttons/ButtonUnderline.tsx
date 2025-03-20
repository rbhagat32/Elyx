import * as React from "react";
import { ReactNode, useRef } from "react";
import { useAnimate } from "motion/react";

interface PropTypes {
  children?: ReactNode;
  lineHeight?: number;
  className?: string;
  lineColor?: string;
  onClick?: () => void;
}

const ButtonUnderline = ({
  children = "Button",
  lineHeight = 1.5,
  className = "",
  lineColor = "bg-white",
  onClick = () => {},
}: PropTypes) => {
  const [scope, animate] = useAnimate();
  const lineRef = useRef(null);

  const lineThickenss = `h-[${lineHeight}px]`;

  const handleHover = async () => {
    await animate(
      lineRef.current,
      { left: "100%" },
      { duration: 0.7, ease: [0.55, 0, 0.45, 1] }
    );

    await animate(lineRef.current, { left: "-100%" }, { duration: 0 });
  };

  return (
    <button
      onMouseEnter={handleHover}
      onClick={onClick}
      ref={scope}
      className="w-fit overflow-hidden"
    >
      <div className={`relative text-lg ${className}`}>{children}</div>
      <div
        ref={lineRef}
        className={`relative left-[-100%] ${lineThickenss} w-full ${lineColor} pointer-events-none`}
      />
    </button>
  );
};

export { ButtonUnderline };
