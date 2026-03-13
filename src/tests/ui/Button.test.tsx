import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components/ui";

describe("Button Component", () => {
  it("renders the label correctly", () => {
    render(<Button label="Descargar PDF" />);
    expect(screen.getByText("Descargar PDF")).toBeDefined();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button label="Submit" disabled={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.hasAttribute("disabled")).toBe(true);
  });
});
