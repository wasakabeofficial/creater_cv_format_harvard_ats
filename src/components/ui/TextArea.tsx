import type { TextAreaProps } from "../../types/TextArea.type";
import Label from "./Label";
import "../../assets/styles/TextArea.css";

const TextArea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  id,
  rows = 4,
  maxLength = 1000,
}: TextAreaProps) => {
  return (
    <div className="text-area-container">
      <Label htmlFor={id} text={label} required={required} />
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className="custom-text-area"
        spellCheck={true}
      />
      <div className="text-area-counter">
        {value.length} / {maxLength} caracteres
      </div>
    </div>
  );
};

export default TextArea;
