import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "../components/ui";

describe("Label Component", () => {
  it("renders the label text correctly", () => {
    render(<Label text="Email Address" htmlFor="email" />);
    expect(screen.getByText("Email Address")).toBeDefined();
  });

  it("has the correct htmlFor attribute", () => {
    render(<Label text="Name" htmlFor="full-name" />);
    const labelElement = screen.getByText("Name");
    expect(labelElement.getAttribute("for")).toBe("full-name");
  });

  it("shows the required asterisk when required is true", () => {
    render(<Label text="Phone" htmlFor="phone" required />);
    expect(screen.getByText("*")).toBeDefined();
  });
});
