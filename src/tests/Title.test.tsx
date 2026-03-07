import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "../components/ui";

describe("Title Component", () => {
  it("renders the correct text", () => {
    render(<Title label="EXPERIENCE" level="h2" />);
    expect(screen.getByText("EXPERIENCE")).toBeDefined();
  });

  it("renders as an h1 by default", () => {
    const { container } = render(<Title label="Name" />);
    expect(container.querySelector("h1")).toBeDefined();
  });

  it("applies the border class when hasBorder is true", () => {
    const { container } = render(
      <Title label="Education" level="h2" hasBorder />,
    );
    expect(container.querySelector(".title-border")).toBeDefined();
  });
});
