import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-black hover:bg-gray-800 text-white rounded-lg w-fit h-fit px-4 py-3 font-mono"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
