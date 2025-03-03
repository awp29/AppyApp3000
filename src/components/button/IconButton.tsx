import React from "react";
import clsx from "clsx";
import FeatherIcon, { FeatherIconName } from "feather-icons-react";

const sizeStyles = {
  sm: "w-7 h-7",
  md: "h-8 w-8",
};

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FeatherIconName;
  size?: "sm" | "md";
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, size = "md", className, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex cursor-pointer items-center justify-around rounded-md hover:bg-zinc-100",
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      <FeatherIcon className="text-weak" icon={icon} size={16} />
    </button>
  );
};

export default IconButton;
