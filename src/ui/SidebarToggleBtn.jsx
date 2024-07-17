import { HiBars3BottomRight } from "react-icons/hi2";
import { useSidebar } from "../context/SidebarContext";

function SidebarToggleBtn() {
  const { setExpanded } = useSidebar();

  return (
    <button
      id="sidebarToggle"
      onClick={() => setExpanded((prev) => !prev)}
      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <HiBars3BottomRight id="sidebarToggle" className="w-6 h-6" />
    </button>
  );
}

export default SidebarToggleBtn;
