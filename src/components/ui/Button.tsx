import type { ButtonProps } from "../../types/ui/Button.type";

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  fullWidth = false,
  children,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded font-sans text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
    secondary:
      "bg-white text-black border border-black hover:bg-gray-100 focus:ring-gray-300",
    outline:
      "bg-transparent text-black border border-gray-300 hover:border-black focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const buttonClassNames = `
    ${baseStyles}
    ${variants[variant as keyof typeof variants] || variants.primary}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassNames}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
