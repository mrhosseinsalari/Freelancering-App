import { HiCollection, HiCurrencyDollar } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { HiWallet } from "react-icons/hi2";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="blue"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiWallet className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
