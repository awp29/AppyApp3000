import React, { ButtonHTMLAttributes } from "react";
import { Oval } from "react-loader-spinner";
import clsx from "clsx";
import { cn } from "../../utils";

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
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    variant = "primary",
    size = "md",
    isLoading,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={cn(
        "font-mon w-fit cursor-pointer rounded-md",
        variants[variant],
        sizeStyles[size],
        isLoading && "pointer-events-none bg-zinc-400",
        className,
      )}
      disabled={isLoading}
    >
      <div className={cn("flex items-center justify-center gap-2")}>
        {isLoading && (
          <Oval
            visible
            height={size === "lg" ? "20" : "16"}
            width={size === "lg" ? "20" : "16"}
            strokeWidth={4}
            color="#fff"
            secondaryColor="#eee"
            ariaLabel="oval-loading"
          />
        )}

        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
