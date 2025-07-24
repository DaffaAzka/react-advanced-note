import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="container mx-auto p-6 lg:py-4 py-8">
      <Outlet />
    </div>
  );
};
