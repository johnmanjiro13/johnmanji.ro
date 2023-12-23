import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import { Container } from "@/components/common/Container";

test("match texts", () => {
  const child = <div>Child Text</div>;
  render(<Container>{child}</Container>);
  expect(screen.getByText("Child Text")).toBeDefined();
});
