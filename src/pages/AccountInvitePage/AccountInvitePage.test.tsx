import userEvent from "@testing-library/user-event";

import { render } from "../../utils/test-utils";
import AccountInvitePage from "./AccountInvitePage";

describe("AccountInvitePage", () => {
  test("renders", () => {
    const user = userEvent.setup();
    const { getByText, getByLabelText } = render(<AccountInvitePage />);
    expect(getByText("account invite")).toBeInTheDocument();

    expect(getByLabelText("password")).toBeInTheDocument();
    expect(getByLabelText("password (confirm)")).toBeInTheDocument();
    expect(getByText("register")).toBeInTheDocument();
    // TODO: setup yup i18n, confirm it works in the UI, Test and Storybook.
    // expect(
    //   screen.getByText("password is a required field")
    // ).toBeInTheDocument();

    // user.type(screen.getByLabelText("password"), "password for test");
    // user.click(getByText("register"));
    // expect(
    //   screen.queryByText("password is a required field")
    // ).toBeInTheDocument();
  });
});
