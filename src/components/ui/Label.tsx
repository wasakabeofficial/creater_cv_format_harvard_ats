import "../../assets/styles/Label.css";
import type { LabelProps } from "../../types/Label.type";
const Label = ({
  text,
  htmlFor,
  required = false,
  className = "",
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`custom-label ${className}`}>
      {text}
      {required && <span className="label-required">*</span>}
    </label>
  );
};

export default Label;
