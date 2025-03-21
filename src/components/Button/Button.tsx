import React from "react";

interface PropTypes {
  children: React.ReactNode;
  onClick?: () => void;
}

const handleMouseEnter = (): void => {
  console.log("in");
};

const handleMouseLeave = (): void => {
  console.log("out");
};

export default function Button({ children, onClick }: PropTypes) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
