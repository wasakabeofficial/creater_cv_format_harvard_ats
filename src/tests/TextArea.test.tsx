import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextArea } from "../components/ui";

describe("TextArea Component", () => {
  it("renders the label and character counter", () => {
    render(
      <TextArea
        label="Professional Summary"
        id="summary"
        name="summary"
        value="Working on it"
        onChange={() => {}}
      />,
    );
    expect(screen.getByLabelText(/professional summary/i)).toBeDefined();
    expect(screen.getByText(/13 \/ 1000 caracteres/i)).toBeDefined();
  });

  it("triggers the onChange event correctly", () => {
    const handleTextAreaChange = vi.fn();
    render(
      <TextArea
        label="Description"
        id="desc"
        name="desc"
        value=""
        onChange={handleTextAreaChange}
      />,
    );

    const textAreaElement = screen.getByLabelText(/description/i);
    fireEvent.change(textAreaElement, { target: { value: "New achievement" } });

    expect(handleTextAreaChange).toHaveBeenCalledTimes(1);
  });
});
