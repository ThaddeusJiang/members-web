import { useQuery } from "react-query";

import { t } from "i18next";

import { getMembers } from "../../apis/members/members";

export const Loading = () => <div>Loading...</div>;
export const Empty = () => <div>Empty</div>;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);
export const Success = ({ members }: { members: Member[] }) => {
  return (
    <div>
      <h2>{t("members")}</h2>
      <ul>
        {members.map((member) => (
          <li className=" border-t" key={member.id}>
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const useMembers = () => {
  return useQuery("members", getMembers);
};

const MembersCell = () => {
  const { isLoading, error, data: members } = useMembers();

  if (isLoading) return <Loading />;
  if (error) return <Failure error={error} />;
  if (!members) return <Empty />;

  return <Success members={members} />;
};

export default MembersCell;
