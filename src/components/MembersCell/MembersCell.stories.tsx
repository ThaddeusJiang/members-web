import { Success } from "./MembersCell";
import { standard } from "./MembersCell.mock";

export const success = () => {
  const { members } = standard();
  return <Success members={members} />;
};

export default { title: "Cells/MembersCell" };
