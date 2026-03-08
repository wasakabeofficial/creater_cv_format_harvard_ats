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

  it("adds a bullet point when Enter is pressed and optimization is enabled", () => {
    const handleTextAreaChange = vi.fn();
    render(
      <TextArea
        label="Achievements"
        id="achievements"
        name="achievements"
        value="First point"
        onChange={handleTextAreaChange}
        enableHarvardOptimization={true}
      />,
    );

    const textAreaElement = screen.getByLabelText(/achievements/i);

    fireEvent.keyDown(textAreaElement, { key: "Enter", code: "Enter" });

    const calledValue = handleTextAreaChange.mock.calls[0][0].target.value;

    expect(calledValue).toContain("First point");
    expect(calledValue).toContain("•");
  });

  it("shows verb suggestions for weak verbs in Harvard mode", () => {
    render(
      <TextArea
        label="Experience"
        id="experience"
        name="experience"
        value="• Hice un proyecto"
        onChange={() => {}}
        enableHarvardOptimization={true}
      />,
    );

    expect(screen.getByText(/Usa verbos más fuertes/i)).toBeDefined();
  });

  it("does not add bullet points when Enter is pressed if optimization is disabled", () => {
    const handleTextAreaChange = vi.fn();
    render(
      <TextArea
        label="Normal Text"
        id="normal"
        name="normal"
        value="Some text"
        onChange={handleTextAreaChange}
        enableHarvardOptimization={false}
      />,
    );

    const textAreaElement = screen.getByLabelText(/normal text/i);
    fireEvent.keyDown(textAreaElement, { key: "Enter", code: "Enter" });

    expect(handleTextAreaChange).not.toHaveBeenCalled();
  });
});
