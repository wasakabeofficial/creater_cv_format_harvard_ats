import { useEffect } from "react";
import type { AlertProps } from "../../types/ui/Alert.type";

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

  const alertStyles = {
    success: "bg-[#e6f4ea] border-[#1e8e3e] text-[#137333]",
    error: "bg-[#fce8e6] border-[#d93025] text-[#a50e0e]",
    warning: "bg-[#fef7e0] border-[#f9ab00] text-[#b06000]",
    information: "bg-[#e8f0fe] border-[#1a73e8] text-[#174ea6]",
  };

  return (
    <div
      className={`
        flex justify-between items-center 
        px-6 py-4 my-4 rounded border 
        font-sans text-[14px] leading-[1.4]
        animate-in fade-in slide-in-from-top-2 duration-300
        ${alertStyles[type]}
      `}
      role="alert"
    >
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          className="ml-4 p-0 bg-transparent border-none text-[20px] cursor-pointer flex items-center text-current hover:opacity-70 transition-opacity"
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
