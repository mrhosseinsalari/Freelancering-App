import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="yellow"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="پروژه ها"
        value={projects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست ها"
        value={proposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
