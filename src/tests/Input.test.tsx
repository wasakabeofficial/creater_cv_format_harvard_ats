import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/ui/Input";

describe("Input Component", () => {
  it("renders with correct label and placeholder", () => {
    render(
      <Input
        label="Full Name"
        id="name"
        name="name"
        value=""
        onChange={() => {}}
        placeholder="John Doe"
      />,
    );
    expect(screen.getByLabelText(/full name/i)).toBeDefined();
    expect(screen.getByPlaceholderText("John Doe")).toBeDefined();
  });

  it("calls onChange when text is entered", () => {
    const handleChange = vi.fn();
    render(
      <Input
        label="Email"
        id="email"
        name="email"
        value=""
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should NOT call onChange when a number is typed in an only-text field", () => {
    const handleChange = vi.fn();
    render(
      <Input
        label="Name"
        id="name"
        name="name"
        value=""
        onChange={handleChange}
        validationType="only-text"
      />,
    );
    const input = screen.getByLabelText(/name/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "123" } });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
