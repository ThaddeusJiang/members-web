import { Link } from "react-router-dom";

import classNames from "classnames";
import { t } from "i18next";

const stateColorMap = {
  notStarted: "",
  inProgress: "info",
  completed: "success",
  failed: "danger",
  pending: "warning",
};

export const stateColor = (state) => stateColorMap[state];

const stateTextMap = {
  notStarted: "not started",
  inProgress: "in progress",
  completed: "completed",
  failed: "failed",
  pending: "pending",
};

export const stateText = (state) => stateTextMap[state];

const TodosTable = ({ todos }) => {
  return (
    <table className="table w-full rounded-md">
      <thead>
        <tr>
          <th>{t("state")}</th>
          <th>{t("procedure type")}</th>
          <th>{t("rate")}</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          const { id, title, description, rateOfProgress } = todo;
          const [rateStart, rateEnd] = rateOfProgress?.split("/");
          return (
            <tr key={todo.id}>
              <td>
                <div className="flex items-center">
                  <div
                    className={classNames("badge badge-xs", {
                      [`badge-${stateColor(todo.state)}`]: true,
                    })}
                  ></div>
                  <div className="ml-2">{t(stateText(todo.state))}</div>
                </div>
              </td>
              <td>
                <div>
                  <Link className="link link-hover" to={`/todos/${todo.id}`}>
                    <p>{todo.title}</p>
                  </Link>
                  <p className="text-gray-500">
                    {todo.targetDateTitle}: {todo.targetDate}
                  </p>
                </div>
              </td>
              <td>
                <progress
                  className={classNames("progress w-56", {
                    [`progress-${stateColor(todo.state)}`]: true,
                  })}
                  value={rateStart}
                  max={rateEnd}
                ></progress>
                <span className="ml-2">{rateOfProgress}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodosTable;
