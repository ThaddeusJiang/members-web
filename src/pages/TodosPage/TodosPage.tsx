import { t } from "i18next";

import TodosCell from "../../components/TodosCell/TodosCell";

const TodosPage = () => {
  return (
    <section className=" main-container mx-auto">
      <h2 className="header2">{t("procedure todos")}</h2>
      <TodosCell />
    </section>
  );
};

export default TodosPage;
