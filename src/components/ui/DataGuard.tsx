import { useEffect } from "react";
import type { DataGuardProps } from "../../types/ui/Data.Guard.type";

const DataGuard = ({
  isDirty,
  customMessage = "Tienes cambios sin guardar. Si sales, perderás toda la información del CV.",
}: DataGuardProps) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = customMessage;
        return customMessage;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty, customMessage]);
  return null;
};

export default DataGuard;
