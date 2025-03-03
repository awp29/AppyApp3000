import { NavLink, NavLinkProps } from "react-router";
import { motion } from "motion/react";
import clsx from "clsx";
import FeatherIcon, { FeatherIconName } from "feather-icons-react";
import { useNavbar } from "./NavBarContext";

interface LinkProps extends NavLinkProps {
  icon: FeatherIconName;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { icon: Icon, children, className, ...rest } = props;

  const { isSidebarOpen } = useNavbar();

  return (
    <NavLink
      {...rest}
      className={({ isActive }) =>
        clsx(
          "mx-2 flex h-8 items-center gap-0 rounded-md px-2 hover:bg-zinc-200",
          isActive ? "text-strong bg-zinc-200" : "text-weak",
          className,
        )
      }
    >
      <motion.div
        initial={{ gap: isSidebarOpen ? "8px" : "0" }}
        animate={{ gap: isSidebarOpen ? "8px" : "0" }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className={clsx("flex items-center overflow-hidden text-sm")}
      >
        <FeatherIcon icon={Icon} size={16} />
        <motion.div
          initial={{ width: isSidebarOpen ? "auto" : 0 }}
          animate={{ width: isSidebarOpen ? "auto" : 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </NavLink>
  );
};

export default Link;
