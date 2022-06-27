import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { t } from "i18next";

import { getTodos } from "../../apis/todos/todos";
import TodosTable from "../TodosTable/TodosTable";

export const Loading = () => <div>Loading...</div>;
export const Empty = () => <div>Empty</div>;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);

export const Success = ({ todos }) => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h2 className="header2">{t("produce todos")}</h2>
        <Link to="/todos" className="link link-hover">
          {t("go to the list page")}
        </Link>
      </div>

      <TodosTable todos={todos} />
    </div>
  );
};

const MyTodosCell = () => {
  // TODO: filter todos by login user
  const { isLoading, error, data: todos } = useQuery(["todos"], getTodos);

  if (isLoading) return <Loading />;
  if (error) return <Failure error={error} />;
  if (!todos) return <Empty />;

  return <Success todos={todos} />;
};

export default MyTodosCell;
