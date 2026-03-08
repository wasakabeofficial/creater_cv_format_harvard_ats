import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Alert from "../components/ui/Alert";

describe("Alert Component", () => {
  it("renders the message when isVisible is true", () => {
    render(
      <Alert message="Operación exitosa" type="success" isVisible={true} />,
    );
    expect(screen.getByText("Operación exitosa")).toBeDefined();
  });

  it("does not render when isVisible is false", () => {
    const { container } = render(
      <Alert message="Invisible" type="information" isVisible={false} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("calls onClose after the timeout", () => {
    vi.useFakeTimers();
    const handleClose = vi.fn();

    render(
      <Alert
        message="Temporizado"
        type="warning"
        isVisible={true}
        onClose={handleClose}
      />,
    );

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(handleClose).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
