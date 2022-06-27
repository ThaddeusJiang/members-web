import { useQuery } from "react-query";

import { getTodos } from "../../apis/todos/todos";
import TodosTable from "../TodosTable/TodosTable";

export const Loading = () => <div>Loading...</div>;
export const Failure = ({ error }) => (
  <div>An error has occurred: {error.message}</div>
);
export const Empty = () => <div>Empty</div>;
export const Success = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      <TodosTable todos={todos} />
    </div>
  );
};

export const useTodos = () => {
  return useQuery("todos", getTodos);
};

const TodosCell = () => {
  const { isLoading, error, data: todos } = useTodos();

  if (isLoading) return <Loading />;
  if (error) return <Failure error={error} />;
  if (!todos) return <Empty />;

  return <Success todos={todos} />;
};

export default TodosCell;
