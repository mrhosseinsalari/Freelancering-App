import { Outlet } from "react-router-dom";
import Header from "./Header";
import useAuthorize from "../features/authentication/useAuthorize";

function AppLayout({ children }) {
  const { isVerified } = useAuthorize();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          {isVerified ? (
            <Outlet />
          ) : (
            <h1 className="font-bold text-2xl text-secondary-900">
              پروفایل شما در انتظار تایید است
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
