import clsx from "clsx";
import React, { ReactNode } from "react";
import { NavLink } from "react-router";
import Link from "./nav/Link";
import Logo from "../assets/logo.svg?react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className={clsx("flex w-full")}>
      <nav
        className={clsx(
          "fixed h-lvh w-56 border-r border-gray-200 bg-gray-100 py-4",
        )}
      >
        <div className={clsx("mb-12 flex items-center gap-3 px-6")}>
          <Logo />
          <p className={clsx("text-strong font-mono text-xl font-bold")}>
            Appy App
          </p>
        </div>

        <ul className="mt-6 flex flex-col gap-2 px-3">
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
      </nav>
      <div className="ml-56 flex-1 px-8 pt-24 pb-12">{children}</div>
    </div>
  );
};

export default DefaultLayout;
