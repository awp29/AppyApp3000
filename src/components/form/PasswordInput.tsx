import { FC, InputHTMLAttributes, useState } from "react";
import clsx from "clsx";
import FeatherIcon from "feather-icons-react";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const PasswordInput: FC<PasswordInputProps> = (props) => {
  const { className, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className={clsx(
          "text-strong h-10 w-full rounded-md border border-gray-300 py-2 pr-[42px] pl-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
          className,
        )}
        {...rest}
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
        className={clsx(
          "absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none",
        )}
      >
        <FeatherIcon icon={showPassword ? "eye" : "eye-off"} size={18} />
      </button>
    </div>
  );
};

export default PasswordInput;
