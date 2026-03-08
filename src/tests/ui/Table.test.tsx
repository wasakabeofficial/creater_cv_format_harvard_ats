import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "../../components/ui";

describe("Table Component", () => {
  const columns = [
    { header: "Institución", key: "institution" },
    { header: "Grado", key: "degree" },
  ];

  const data = [{ institution: "Harvard", degree: "Computer Science" }];

  it("renders headers and data correctly", () => {
    render(<Table columns={columns} data={data} />);

    expect(screen.getByText("Institución")).toBeDefined();
    expect(screen.getByText("Harvard")).toBeDefined();
  });

  it("shows the empty message when there is no data", () => {
    const message = "Nada por aquí";
    render(<Table columns={columns} data={[]} emptyMessage={message} />);

    expect(screen.getByText(message)).toBeDefined();
  });
});
