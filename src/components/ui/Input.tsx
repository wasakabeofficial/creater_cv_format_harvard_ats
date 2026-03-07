import type { InputProps } from "../../types/Input.type";
import "../../assets/styles/Input.css";
import Label from "./Label";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  id,
  validationType = "alphanumeric",
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (validationType === "only-text") {
      if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(inputValue)) {
        onChange(event);
      }
    } else if (validationType === "only-numbers") {
      const regex = type === "telephone" ? /^[0-9+\-\s]*$/ : /^[0-9]*$/;
      if (regex.test(inputValue)) {
        onChange(event);
      }
    } else {
      onChange(event);
    }
  };

  return (
    <div className="input-container">
      <Label htmlFor={id} text={label} required={required} />
      <input
        id={id}
        name={name}
        type={type === "telephone" ? "tel" : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        className="custom-input"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
