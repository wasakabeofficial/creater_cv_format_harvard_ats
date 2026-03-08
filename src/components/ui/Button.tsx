import type { ButtonProps } from "../../types/Button.type";
import "../../assets/styles/Button.css";
const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  fullWidth = false,
}: ButtonProps) => {
  const buttonClassNames = [
    "custom-button",
    `button-${variant}`,
    fullWidth ? "button-full-width" : "",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassNames}
    >
      {label}
    </button>
  );
};

export default Button;
