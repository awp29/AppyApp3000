import { NavLink, NavLinkProps } from "react-router";

import clsx from "clsx";
import FeatherIcon, { FeatherIconName } from "feather-icons-react";

interface LinkProps extends NavLinkProps {
  icon: FeatherIconName;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { icon: Icon, children, className, ...rest } = props;

  return (
    <NavLink
      {...rest}
      className={({ isActive }) =>
        clsx(
          "flex h-8 items-center gap-2 rounded-md px-3 text-sm font-medium",
          isActive ? "text-strong bg-zinc-200" : "text-weak",
          className,
        )
      }
    >
      <FeatherIcon icon={Icon} size={20} />
      <span>{children}</span>
    </NavLink>
  );
};

export default Link;
