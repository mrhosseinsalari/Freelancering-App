import Table from "../../ui/Table";
import truncateText from "./../../utils/truncateText";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";

function ProposalRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>{proposal.status}</td>
      <td>++</td>
    </Table.Row>
  );
}

export default ProposalRow;
