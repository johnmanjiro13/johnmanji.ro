import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Index from "../../pages/index";

test("snapshot", () => {
  const { asFragment } = render(<Index />);
  expect(asFragment()).toMatchSnapshot();
});
