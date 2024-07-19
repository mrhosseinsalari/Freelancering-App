import { HiOutlineX } from "react-icons/hi";
import { useSidebar } from "../context/SidebarContext";
import useOutsideClick from "../hooks/useOutsideClick";

function Sidebar({ children }) {
  const { expanded, setExpanded } = useSidebar();
  const onClose = () => setExpanded(false);
  const ref = useOutsideClick(onClose, "sidebarToggle");

  return (
    <>
      <div className={`${expanded ? "sidebar-backdrop" : "hidden"}`}></div>
      <div
        ref={ref}
        className={`bg-secondary-0 row-start-1 row-span-2 transition-all duration-300 
        border-l border-secondary-200 p-4 ${
          expanded ? "sidebar-expanded" : "hidden sm:block"
        }`}
      >
        <div
          className={`w-full mb-4 ${
            expanded ? "flex justify-end items-center" : "hidden"
          }`}
        >
          <button onClick={onClose}>
            <HiOutlineX className="w-5 h-5 text-secondary-500" />
          </button>
        </div>
        <ul className="flex flex-col gap-y-4">{children}</ul>
      </div>
    </>
  );
}

export default Sidebar;
