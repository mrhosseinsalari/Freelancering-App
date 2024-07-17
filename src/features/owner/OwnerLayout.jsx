import { HiHome, HiOutlineViewGrid } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";

function OwnerLayout() {
  return (
    <AppLayout>
      <CustomNavLink to="dashboard">
        <HiHome />
        <span>داشبورد</span>
      </CustomNavLink>
      <CustomNavLink to="projects">
        <HiOutlineViewGrid />
        <span>پروژه ها</span>
      </CustomNavLink>
    </AppLayout>
  );
}

export default OwnerLayout;
