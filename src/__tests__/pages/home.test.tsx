import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../../app/page";

test("snapshot", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
