import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useSidebar } from "../context/SidebarContext";

function AppLayout({ children }) {
  const { expanded } = useSidebar();

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr] grid-cols-1 ${
        !expanded ? "sm:grid-cols-[15rem_1fr]" : ""
      }`}
    >
      <Header />
      <Sidebar>{children}</Sidebar>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
