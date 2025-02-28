import clsx from "clsx";
import React, { ReactNode } from "react";
import Link from "./nav/Link";
import Logo from "../assets/logo.svg?react";
import IconButton from "./button/IconButton";
import { motion } from "motion/react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className={clsx("flex w-full")}>
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: isSidebarOpen ? 0 : -224 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx("fixed flex h-lvh w-56 bg-gray-100")}
      >
        <div className={clsx("flex flex-1 flex-col")}>
          <div className={clsx("mb-12 flex items-center gap-2.5 px-4 pt-4")}>
            <Logo width={32} height={32} />

            <div className={clsx("flex flex-col")}>
              <p className={clsx("text-strong font-mono text-sm font-bold")}>
                Appy App
              </p>
              <p className={clsx("text-weak font-mono text-xs")}>v1.0.23</p>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-2 px-2">
            <li>
              <Link to="/" icon="pie-chart">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/employees" icon="users">
                Employees
              </Link>
            </li>
          </ul>
        </div>

        <button
          className={clsx(
            "group absolute right-[-8px] flex h-full w-[16px] cursor-w-resize justify-around",
          )}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          <span
            className={clsx(
              "block h-full w-[1px] bg-gray-200 group-hover:w-[2px]",
            )}
          />
        </button>
      </motion.nav>

      <motion.div
        initial={{ marginLeft: 224 }}
        animate={{ marginLeft: isSidebarOpen ? 224 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx("flex-1")}
      >
        <div className={clsx("flex h-16 items-center px-4")}>
          <IconButton
            icon="sidebar"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          />
        </div>
        <div className={clsx("px-4 py-12")}>{children}</div>
      </motion.div>
    </div>
  );
};

export default DefaultLayout;
