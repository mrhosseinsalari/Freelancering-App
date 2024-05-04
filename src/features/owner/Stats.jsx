import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfOpenProjects = projects.map((p) => p.status === "OPEN").length;

  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="blue"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های باز"
        value={numOfOpenProjects}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
