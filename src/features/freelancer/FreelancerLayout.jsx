import { HiCollection, HiHome, HiOutlineViewGrid } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";

function FreelancerLayout() {
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
      <CustomNavLink to="proposals">
        <HiCollection />
        <span>درخواست ها</span>
      </CustomNavLink>
    </AppLayout>
  );
}

export default FreelancerLayout;
