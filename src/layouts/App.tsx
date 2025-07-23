import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  );
};
