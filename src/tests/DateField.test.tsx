import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DateField } from "../components/ui";

describe("DateField Component", () => {
  it("renders with the correct date placeholder", () => {
    render(
      <DateField
        label="Start Date"
        id="start-date"
        name="startDate"
        value=""
        onChange={() => {}}
      />,
    );
    expect(screen.getByPlaceholderText("DD / MM / YYYY")).toBeDefined();
  });

  it("does not allow letters in the date field", () => {
    const handleDateChange = vi.fn();
    render(
      <DateField
        label="End Date"
        id="end-date"
        name="endDate"
        value=""
        onChange={handleDateChange}
      />,
    );

    const inputElement = screen.getByLabelText(/end date/i);
    fireEvent.change(inputElement, { target: { value: "January" } });
    expect(handleDateChange).not.toHaveBeenCalled();
  });
});
