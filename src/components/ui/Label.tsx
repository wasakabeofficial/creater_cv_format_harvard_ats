import type { LabelProps } from "../../types/ui/Label.type";

const Label = ({
  text,
  htmlFor,
  required = false,
  className = "",
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block text-sm font-medium text-gray-700 font-sans
        ${className}
      `}
    >
      {text}
      {required && (
        <span className="ml-1 text-red-600 font-bold" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
};

export default Label;
