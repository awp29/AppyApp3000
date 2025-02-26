import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createEmployee, getEmployees } from "./api";
import { Employee } from "./types";
import clsx from "clsx";
import Button from "../../components/button/Button";
import { format } from "date-fns";
import { mockEmployees } from "./mockData";
import React from "react";

const columnHelper = createColumnHelper<Employee>();

const mapUserColumn = (row: Employee) => {
  return { name: `${row.firstName} ${row.lastName}`, email: row.email };
};

const columns = [
  columnHelper.display({
    id: "select-col",
    size: 60,
    enableResizing: false,
    header: ({ table }) => (
      <input
        type="checkbox"
        onChange={table.getToggleAllRowsSelectedHandler()}
        checked={table.getIsAllRowsSelected()}
      />
    ),

    cell: ({ row }) => {
      return (
        <input
          type="checkbox"
          onChange={row.getToggleSelectedHandler()}
          checked={row.getIsSelected()}
        />
      );
    },
  }),
  columnHelper.accessor(mapUserColumn, {
    id: "employee",
    header: () => "Employee",
    cell: (info) => {
      const { name, email } = info.getValue();
      return (
        <div className={clsx("flex flex-col")}>
          <span className={clsx("text-black")}>{name}</span>
          <span className={clsx("text-gray-500 text-sm")}>{email}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("role", {
    size: 300,
    header: () => "Role",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("team", {
    size: 200,
    header: () => "Team",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("createdAt", {
    size: 160,
    header: () => "Date joined",
    cell: (info) => {
      const dateJoined = info.getValue();
      const formatedDate = format(new Date(dateJoined), "MMM dd, yyyy");

      return <span>{formatedDate}</span>;
    },
  }),
  columnHelper.display({
    id: "actions-col",
    size: 80,
    enableResizing: false,
    header: () => <span className="block w-full text-right pr-2">Actions</span>,
    cell: () => {
      return <span className="flex w-full justify-end pr-2">...</span>;
    },
  }),
];

const EmployeesPage = () => {
  const listEmployeesQuery = useQuery({
    queryKey: ["listEmployees"],
    queryFn: getEmployees,
  });

  console.log("listEmployeesQuery", listEmployeesQuery.data);

  const createEmployeeMutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      listEmployeesQuery.refetch();
    },
  });

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: listEmployeesQuery.data?.data || [],
    // data: mockEmployees,
    columns,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
    },
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  const firstRowIndex = pagination.pageIndex * pagination.pageSize + 1;
  const lastRowIndex = firstRowIndex + pagination.pageSize - 1;

  return (
    <div className={clsx("flex w-full")}>
      <nav
        className={clsx(
          "p-4 bg-gray-100 w-56 h-lvh fixed border-r border-gray-200"
        )}
      >
        <p className={clsx("font-mono text-lg underline")}>Appy App 3000</p>
      </nav>

      <div className="p-12 flex-1 ml-56">
        <div className={clsx("flex justify-between mb-6")}>
          <div className={clsx("flex", "flex-col", "gap-2")}>
            <h1 className={clsx("text-4xl")}>Employee Page</h1>
            <p className={clsx("text-lg", "mb-4", "text-gray-500")}>
              View and manage your employees
            </p>
          </div>

          <Button
            onClick={() =>
              createEmployeeMutation.mutate({
                firstName: "Bob",
                lastName: "Loblaw",
                email: "b.loblaw@appyapp.com",
                team: "Comet",
                role: "Backend Engineer",
              })
            }
          >
            Add Employee
          </Button>
        </div>

        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // AP-TODO: Don't like this code, need to refactor
                  const width =
                    header.index === 1 ? "auto" : `${header.getSize()}px`;

                  return (
                    <th
                      key={header.id}
                      style={{
                        width,
                      }}
                      className="text-left text-sm font-semibold text-gray-500 h-12 border-b border-gray-200"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="text-left text-gray-500 border-b border-gray-200 h-20"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={clsx("text-weak")}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={clsx("flex justify-between mt-4")}>
          <div className={clsx("flex gap-2")}>
            <button
              className={clsx("font-mono text-sm")}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"< Prev"}
            </button>

            <button
              className={clsx("font-mono text-sm")}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {"Next >"}
            </button>
          </div>

          <span className="text-weak text-[14px] font-mono">
            Showing {firstRowIndex} - {lastRowIndex} of {table.getRowCount()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
