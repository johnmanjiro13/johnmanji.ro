import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "../../components/container";

test("match texts", () => {
  const child = <div>Child Text</div>;
  render(<Container>{child}</Container>);
  expect(screen.getByText("Child Text")).toBeDefined();
});
