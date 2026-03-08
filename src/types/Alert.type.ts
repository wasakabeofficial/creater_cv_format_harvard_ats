export interface AlertProps {
  message: string;
  type: "success" | "error" | "warning" | "information";
  onClose?: () => void;
  isVisible: boolean;
}
