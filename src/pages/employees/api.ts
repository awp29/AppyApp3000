import { client } from "../../client";
import { Employee } from "../../types";

export const getEmployees = async () => {
  return await client.models.Employee.list();
};

export const deleteEmployee = async (employeeId: string) => {
  return await client.models.Employee.delete({ id: employeeId });
};

// AP-TODO: Can I somehow use the Backend Schema to get the employee type?
export const createEmployee = async (employee: Omit<Employee, "createdAt">) => {
  return await client.models.Employee.create(employee);
};
