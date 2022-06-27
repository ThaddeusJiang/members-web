// test-utils.js
import React from "react";
import { I18nextProvider } from "react-i18next";

import { render as rtlRender } from "@testing-library/react";

import i18n from "../configs/i18n-for-test";

function render(ui, { locale = "pt", ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
