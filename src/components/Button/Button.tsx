import React from "react";
import { cn } from "../../utils/cn";

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
  variants: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200",
  },
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  },
};

const Button = React.forwardRef<HTMLButtonElement, PropTypes>(
  (
    { children, variant = "primary", size = "md", className, ...props },
    ref
  ) => {
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
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
