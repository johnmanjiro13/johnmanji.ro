import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TitledSecton } from "../../components/TitledSection";

test("match texts", () => {
  const child = <div>Child Text</div>;
  render(<TitledSecton title="Title">{child}</TitledSecton>);
  expect(screen.getByText("Title")).toBeDefined();
  expect(screen.getByText("Child Text")).toBeDefined();
});
