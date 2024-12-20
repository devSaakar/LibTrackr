import React, { FC } from "react";
import { Button } from "./button";

interface CloseButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="bg-white rounded-md p-2 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={onClick}
    >
      <span className="sr-only">Close menu</span>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Button>
  );
};

export default CloseButton;
