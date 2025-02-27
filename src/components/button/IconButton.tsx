import React from "react";
import clsx from "clsx";
import FeatherIcon, { FeatherIconName } from "feather-icons-react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FeatherIconName;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex h-8 w-8 cursor-pointer items-center justify-around rounded-md hover:bg-zinc-100",
        className,
      )}
      {...props}
    >
      <FeatherIcon className="text-weak" icon={icon} size={16} />
    </button>
  );
};

export default IconButton;
