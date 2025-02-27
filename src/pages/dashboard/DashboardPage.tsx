import clsx from "clsx";
import DefaultLayout from "../../components/DefaultLayout";

const DashboardPage = () => {
  return (
    <DefaultLayout>
      <div className={clsx("mb-12 flex justify-between")}>
        <div className={clsx("flex", "flex-col", "gap-2")}>
          <h1 className={clsx("text-strong text-[40px]")}>Dashboard</h1>
          <p className={clsx("text-weak")}>
            Overview of your application metrics and activities.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DashboardPage;
