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
import React from "react";
import IconButton from "../../components/button/IconButton";
import DefaultLayout from "../../components/DefaultLayout";

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
          <span className={clsx("text-strong")}>{name}</span>
          <span className={clsx("text-sm text-gray-500")}>{email}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("role", {
    size: 200,
    header: () => "Role",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("team", {
    size: 160,
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
    size: 60,
    enableResizing: false,
    header: () => <span className="block w-full pr-2 text-right">Actions</span>,
    cell: () => {
      return (
        <span className="flex w-full justify-end pr-2">
          <IconButton icon="edit" />
          <IconButton icon="trash-2" />
        </span>
      );
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

  const selectedRows = table.getSelectedRowModel().rows;
  const numberOfSelectedRows = selectedRows.length;

  const firstRowIndex = pagination.pageIndex * pagination.pageSize + 1;
  const lastRowIndex = firstRowIndex + pagination.pageSize - 1;

  return (
    <DefaultLayout>
      <div className={clsx("mb-12 flex justify-between")}>
        <div className={clsx("flex", "flex-col", "gap-2")}>
          <h1 className={clsx("text-strong text-[40px]")}>Employee Page</h1>
          <p className={clsx("text-weak")}>
            Manage employee records efficiently with options to add, edit, and
            delete entries.
          </p>
        </div>

        <Button size="md">Add Employee</Button>
      </div>

      <div className={clsx("mb-6 flex justify-between")}>
        <input
          type="text"
          placeholder="Type to search"
          className={clsx(
            "h-8 w-56 rounded-md border border-black p-2 font-mono text-sm",
          )}
        />

        {numberOfSelectedRows > 0 && (
          <div className={clsx("flex items-center gap-2")}>
            <p className={clsx("text-weak text-sm")}>
              {numberOfSelectedRows} employees selected
            </p>

            <Button
              size="sm"
              variant="tertiary"
              onClick={() => {
                table.toggleAllRowsSelected(false);
              }}
            >
              Cancel
            </Button>

            <Button size="sm" variant="secondary">
              Delete
            </Button>
          </div>
        )}
      </div>

      <table className="w-full border-t border-gray-200">
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
                    className="text-weak h-12 border-b border-gray-200 text-left text-sm font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
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
              className="text-weak h-20 border-b border-gray-200 text-left"
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

      <div className={clsx("mt-6 flex justify-between")}>
        <div className={clsx("flex gap-2")}>
          <button
            className={clsx("text-weak font-mono text-sm")}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"< Prev"}
          </button>

          <button
            className={clsx("text-weak font-mono text-sm")}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {"Next >"}
          </button>
        </div>

        <span className="text-weak font-mono text-[14px]">
          Showing {firstRowIndex} - {lastRowIndex} of {table.getRowCount()}
        </span>
      </div>
    </DefaultLayout>
  );
};

export default EmployeesPage;
