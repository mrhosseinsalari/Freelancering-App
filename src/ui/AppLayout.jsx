import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <div className="bg-secondary-0 py-4 px-8">app header</div>
      <div className="bg-secondary-0 row-start-1 row-span-2">app sidebar</div>
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="bg-red-300 mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
