import "dayjs/locale/ja";
import advancedFormat from "dayjs/plugin/advancedFormat";
import duration from "dayjs/plugin/duration";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import dayjs from "dayjs";

import { standard } from "./TodoCell.mock";

dayjs.extend(advancedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);
// import locale

dayjs.locale("ja"); // use locale

const TodoCell = () => {
  const { todo } = standard();
  const targetDate = dayjs(todo.targetDate);

  return (
    <section className="p-4">
      <h2 className=" text-3xl font-bold">{todo.title}</h2>
      <p>
        🕙
        {todo.targetDateTitle}: {targetDate.format("ll (ddd) ")}
      </p>

      <p className=" max-w-screen-md">
        <p>progress: 7 tasks in 0 tasks completed</p>
        <progress className="progress" value="7" max="10"></progress>
      </p>
      {todo.tasks.map((task) => {
        const taskDate = targetDate.add(task.deadlineValue);
        return (
          <>
            <div
              className=" border px-4 py-2 mt-2 max-w-screen-md"
              key={task.id}
            >
              <h2 className="header2 ">{task.title}</h2>

              {task.items.map((item) => {
                const index = item.title.indexOf("\n");
                const title = item.title.slice(0, index);
                const description = item.title.slice(index + 1);
                return (
                  <div
                    className="flex px-4 border-b border-dashed last:border-b-0"
                    key={item.title}
                  >
                    <div className="py-4">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      className="collapse collapse-arrow w-full"
                    >
                      <div className="collapse-title ">{title}</div>
                      <div className="collapse-content ">
                        <p className="bg-gray-100 p-2">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <div className="h-20 divider divider-horizontal">🕙</div>
              <div>
                {taskDate.format("MMMM Do (ddd) ")}
                {todo.targetDateTitle}&nbsp;
                {task.deadlineValue
                  ? dayjs.duration(task.deadlineValue, "days").humanize()
                  : ""}
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default TodoCell;
