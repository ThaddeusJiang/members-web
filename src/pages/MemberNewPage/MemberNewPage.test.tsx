import React from "react";
import { Router } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";

import MemberNewPage from "./MemberNewPage";

test("renders successfully", async () => {
  const history = createMemoryHistory();
  const user = userEvent.setup();
  // eslint-disable-next-line no-console
  console.log = jest.fn();

  render(
    <Router history={history}>
      <MemberNewPage />
    </Router>
  );

  await user.type(screen.getByLabelText("First Name"), "John");
  await user.type(screen.getByLabelText("Last Name"), "Doe");
  await user.type(screen.getByLabelText("First Name (Kana)"), "john");
  await user.type(screen.getByLabelText("Last Name (Kana)"), "doe");
  await user.type(screen.getByLabelText("Birthday"), "1992-07-20");
  await user.click(screen.getByText("Male"));
  await user.type(screen.getByLabelText("Mail"), "tj@test.com");
  await user.click(screen.getByText("Submit"));

  expect(screen.getByText("First Name")).toBeInTheDocument();
  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith({
    firstName: "John",
    lastName: "Doe",
    firstName_kana: "john",
    lastName_kana: "doe",
    birthday: "1992-07-20",
    gender: "male",
    mail: "tj@test.com",
  });
});
