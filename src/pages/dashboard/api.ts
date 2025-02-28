import { client } from "../../client";
import { Employee } from "../../types";

export const getDashboardData = async () => {
  const params = {
    limit: 5,
    sort: { field: "createdAt", direction: "ASC" },
  };

  return await client.models.Employee.list(params);
};
