import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import { Header } from "../../components/Header";

test("match texts", () => {
  const props = {
    title: "Title",
    backgroundImage: "/background_image.jpg",
  };
  render(<Header {...props} />);

  expect(screen.getByText("Title")).toBeDefined();
  const image = screen.getByRole("img") as HTMLImageElement;
  expect(image.src).toContain("background_image");
});
