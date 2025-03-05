import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../utils";

const sizeStyles = {
  sm: "text-sm h-8",
  md: "text-sm h-10",
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md";
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  const { size = "md", className, ...rest } = props;

  return (
    <input
      className={cn(
        "text-strong h-10 w-full rounded-md border border-gray-300 px-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
        sizeStyles[size],
        className,
      )}
      {...rest}
    />
  );
};

export default Input;
