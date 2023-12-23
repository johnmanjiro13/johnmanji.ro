import { render } from "@testing-library/react";
import { test, expect } from "vitest";

import Home from "../../app/page";

test("snapshot", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
