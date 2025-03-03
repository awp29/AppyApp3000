import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      type="password"
      className={clsx(
        "text-strong h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
        className,
      )}
      {...rest}
    />
  );
};

export default Input;
