import { useQuery } from "react-query";

import classNames from "classnames";

import { getProcedureRequests } from "../../apis/procedures/procedure_requests";
import { standard } from "./ProcedureRequestsCell.mock";

type Props = {
  procedureRequests: ProcedureRequest[];
};

export const Loading = () => <div>Loading...</div>;
export const Empty = () => <div>Empty</div>;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);

const Success = ({ procedureRequests }: Props) => {
  return (
    <div className="max-w-screen-md ">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {procedureRequests.map((procedureRequest) => (
              <tr key={procedureRequest.id}>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProcedureRequestsCell = () => {
  // TODO: filter todos by login user
  // const {
  //   isLoading,
  //   error,
  // data: procedureRequests,
  // } = useQuery(["procedure_requests"], getProcedureRequests);

  // if (isLoading) return <Loading />;
  // if (error) return <Failure error={error} />;
  // if (!procedureRequests) return <Empty />;
  const { procedure_requests: procedureRequests } = standard();

  return <Success procedureRequests={procedureRequests} />;
};

export default ProcedureRequestsCell;
