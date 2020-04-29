import React from "react";
import { render } from "@testing-library/react";
import { AppLayout } from "./AppLayout";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

it("renders app layout with child content", async () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <AppLayout>
        <div>Hello from test</div>
      </AppLayout>
    </Router>
  );

  expect(getByText("Hello from test")).toBeVisible();
});
