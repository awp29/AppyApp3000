import clsx from "clsx";
import React, { ReactNode } from "react";
import Link from "./nav/Link";
import Logo from "../assets/logo.svg?react";
import IconButton from "./button/IconButton";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import FeatherIcon from "feather-icons-react";
import { useNavbar } from "./nav/NavBarContext";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  const { isSidebarOpen, toggleSidebar } = useNavbar();

  const navigate = useNavigate();

  return (
    <div className={clsx("flex w-full")}>
      <motion.nav
        initial={{ width: isSidebarOpen ? 224 : 48 }}
        animate={{ width: isSidebarOpen ? 224 : 48 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className={clsx("fixed flex h-lvh w-56 bg-gray-100")}
      >
        <div className={clsx("flex flex-1 flex-col")}>
          <motion.div
            initial={{
              padding: isSidebarOpen ? 16 : 8,
              marginBottom: isSidebarOpen ? 40 : 0,
              gap: isSidebarOpen ? "10px" : "0px",
            }}
            animate={{
              padding: isSidebarOpen ? 16 : 8,
              marginBottom: isSidebarOpen ? 40 : 0,
              gap: isSidebarOpen ? "10px" : "0px",
            }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className={clsx("mb-12 flex items-center gap-2.5 px-4 pt-4")}
          >
            <Logo width={32} height={32} />

            <motion.div
              initial={{ width: isSidebarOpen ? "auto" : 0 }}
              animate={{ width: isSidebarOpen ? "auto" : 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className={clsx("flex flex-col overflow-hidden")}
            >
              <p
                className={clsx(
                  "text-strong font-mono text-sm font-bold text-nowrap",
                )}
              >
                Appy App
              </p>
              <p className={clsx("text-weak font-mono text-xs")}>v1.0.23</p>
            </motion.div>
          </motion.div>

          <ul className="mt-6 flex flex-col gap-2">
            <li>
              <Link to="/dashboard" icon="pie-chart">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/employees" icon="users">
                Employees
              </Link>
            </li>
          </ul>

          <div className="mt-auto mb-6 flex">
            <button
              className="text-weak mx-2 flex h-8 w-full cursor-pointer items-center gap-0 rounded-md px-2 hover:bg-zinc-200"
              onClick={() => {
                navigate("/");
              }}
            >
              <motion.div
                initial={{ gap: isSidebarOpen ? "8px" : "0" }}
                animate={{ gap: isSidebarOpen ? "8px" : "0" }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className={clsx("flex items-center overflow-hidden text-sm")}
              >
                <FeatherIcon icon="log-out" size={16} />
                <motion.div
                  initial={{ width: isSidebarOpen ? "auto" : 0 }}
                  animate={{ width: isSidebarOpen ? "auto" : 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  className={clsx("text-nowrap")}
                >
                  Log out
                </motion.div>
              </motion.div>
            </button>
          </div>
        </div>

        <button
          className={clsx(
            "group absolute right-[-8px] flex h-full w-[16px] justify-around",
            isSidebarOpen ? "cursor-w-resize" : "cursor-e-resize",
          )}
          onClick={() => {
            toggleSidebar();
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
        initial={{ marginLeft: isSidebarOpen ? 224 : 48 }}
        animate={{ marginLeft: isSidebarOpen ? 224 : 48 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className={clsx("flex-1")}
      >
        <div className={clsx("flex h-16 items-center px-4")}>
          <IconButton
            icon="sidebar"
            size="sm"
            onClick={() => {
              toggleSidebar();
            }}
          />
        </div>
        <div className={clsx("px-4 py-12")}>{children}</div>
      </motion.div>
    </div>
  );
};

export default DefaultLayout;
