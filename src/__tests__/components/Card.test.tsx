import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";

test("match texts", () => {
  const props = {
    image: {
      src: "/card_image.jpg",
      width: 300,
      height: 400,
      alt: "Card Image",
    },
    heading: "Card Heading",
    content: "Card Content",
    url: "https://example.com/",
  };
  render(<Card {...props} />);

  const image = screen.getByRole("img") as HTMLImageElement;
  expect(image.src).toContain("card_image");
  expect(image.alt).toBe("Card Image");

  expect(screen.getByText("Card Heading")).toBeDefined();
  expect(screen.getByText("Card Content")).toBeDefined();

  const link = screen.getByRole("link") as HTMLAnchorElement;
  expect(link.href).toBe("https://example.com/");
});
