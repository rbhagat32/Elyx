import React, { useMemo, useState } from "react";
import { cn } from "../../utils/cn";

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

const buttonStyles = {
  base: "group/btn relative cursor-pointer overflow-hidden font-bold rounded-full shadow-md shadow-zinc-400",
  variants: {
    solid: "bg-white text-black",
    outline: "bg-zinc-900 border-2 border-white text-white",
  },
  sizes: {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  },
};

const Button = React.forwardRef<HTMLButtonElement, PropTypes>(
  ({ children, variant = "solid", size = "md", className, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const innerStyles = useMemo(
      () => ({
        base: `${
          !props.disabled &&
          "group-hover/btn:-translate-y-[100%] transition-all duration-300"
        }`,
        variants: {
          solid: `${isHovered ? "text-white" : "text-black"}`,
          outline: `${isHovered ? "text-black" : "text-white"}`,
        },
      }),
      [isHovered, props.disabled]
    );

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={cn(
          buttonStyles.base,
          buttonStyles.variants[variant],
          buttonStyles.sizes[size],
          props.disabled && "cursor-not-allowed",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div
          className={cn(
            innerStyles.base,
            innerStyles.variants[variant],
            className
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            "absolute",
            innerStyles.base,
            innerStyles.variants[variant === "solid" ? "outline" : "solid"],
            className
          )}
        >
          {children}
        </div>
      </button>
    );
  }
);

export default Button;
