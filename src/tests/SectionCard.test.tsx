import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SectionCard } from "../components/ui";

describe("SectionCard Component", () => {
  it("renders the title and content", () => {
    render(
      <SectionCard title="EXPERIENCIA LABORAL">
        <div data-testid="child-content">Contenido de prueba</div>
      </SectionCard>,
    );
    expect(screen.getByText("EXPERIENCIA LABORAL")).toBeDefined();
    expect(screen.getByTestId("child-content")).toBeDefined();
  });

  it("toggles content when header is clicked", () => {
    render(
      <SectionCard title="Educación" isCollapsible={true}>
        <div data-testid="collapsible-content">Contenido</div>
      </SectionCard>,
    );

    const header = screen.getByText("Educación");

    fireEvent.click(header);
    expect(screen.queryByTestId("collapsible-content")).toBeNull();

    fireEvent.click(header);
    expect(screen.getByTestId("collapsible-content")).toBeDefined();
  });

  it("calls onAddElement when the action button is clicked", () => {
    const handleAdd = vi.fn();
    render(
      <SectionCard
        title="Habilidades"
        onAddElement={handleAdd}
        addLabel="Nueva Habilidad"
      >
        <p>Lista</p>
      </SectionCard>,
    );

    const addButton = screen.getByText("Nueva Habilidad");
    fireEvent.click(addButton);
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});
