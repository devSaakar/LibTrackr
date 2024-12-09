import React, { FC } from "react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface BackButtonProps {
  onClick: () => void;
  className: string;
}

const BackButton: FC<BackButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      className={cn(
        "bg-black rounded-md p-2 flex items-center justify-center text-gray-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
        className
      )}
      onClick={onClick}
    >
      <span className="sr-only">Go back</span>
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
          strokeWidth="3"
          d="M19 12H5m7-7l-7 7 7 7"
        />
      </svg>
    </Button>
  );
};

export default BackButton;
