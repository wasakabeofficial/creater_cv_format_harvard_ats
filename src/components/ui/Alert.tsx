import { useEffect } from "react";
import "../../assets/styles/Alert.css";
import type { AlertProps } from "../../types/Alert.type";

const Alert = ({
  message,
  type = "information",
  onClose,
  isVisible,
}: AlertProps) => {
  useEffect(() => {
    if (isVisible && onClose) {
      const timeoutIdentifier = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timeoutIdentifier);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`custom-alert alert-${type}`} role="alert">
      <span className="alert-message">{message}</span>
      {onClose && (
        <button
          className="alert-close-button"
          onClick={onClose}
          aria-label="Cerrar alerta"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
