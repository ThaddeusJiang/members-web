import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { t } from "i18next";

import { getProcedures } from "../../apis/procedures/procedures";
import { routePrefixes } from "../../routes";

export const Loading = () => <div>Loading...</div>;
export const Empty = () => <div>Empty</div>;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);

export const Success = ({ procedures }: { procedures: Procedure[] }) => {
  return (
    <div className="main-container">
      <h2 className="header2">{t("start a procedure")}</h2>

      <ul className="grid grid-cols-2 gap-8">
        {procedures.map((procedure) => (
          <li key={procedure.id}>
            <Link to={`${routePrefixes.procedures}/${procedure.id}`}>
              <div className="card w-96 shadow-xl bg-primary text-white">
                <div className="card-body">
                  <h2 className="card-title ">{procedure.title}</h2>
                  <p>{procedure.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProceduresCell = () => {
  const {
    isLoading,
    error,
    data: procedures,
  } = useQuery("procedures", getProcedures);

  if (isLoading) return <Loading />;
  if (error) return <Failure error={error} />;
  if (!procedures) return <Empty />;

  return <Success procedures={procedures} />;
};

export default ProceduresCell;
