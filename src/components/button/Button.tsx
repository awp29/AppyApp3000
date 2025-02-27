import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const sizeStyles = {
  sm: "text-sm px-4 h-8",
  md: "text-sm px-5 h-10",
  lg: "px-5 h-12",
};

const variants = {
  primary: "bg-black text-white hover:bg-zinc-700",
  secondary: "bg-white text-black border border-black hover:bg-zinc-100",
  tertiary:
    "text-black underline underline-offset-4 hover:bg-zinc-100 hover:no-underline",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", size = "md", children } = props;

  return (
    <button
      {...props}
      className={clsx(
        "w-fit cursor-pointer rounded-md font-mono",
        variants[variant],
        sizeStyles[size],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
