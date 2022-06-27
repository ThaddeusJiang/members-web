import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import { render, screen } from "../../utils/test-utils";
import { Empty, Success } from "./TodosCell";
import { standard } from "./TodosCell.mock";

describe("TodosCell", () => {
  test("renders successfully", async () => {
    const { todos } = standard();
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Success todos={todos} />
      </Router>
    );

    expect(screen.getByText("jiang さんの入社手続き")).toBeInTheDocument();
    expect(screen.getAllByText("in progress")).toHaveLength(4);
  });

  test("renders empty", async () => {
    render(<Empty />);

    expect(screen.getByText("Empty")).toBeInTheDocument();
  });
});
