import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import SidebarToggleBtn from "./SidebarToggleBtn";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-4 sm:px-8 border-b border-secondary-200 flex justify-between items-center">
      <SidebarToggleBtn />
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 px-2 sm:px-4
        ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
