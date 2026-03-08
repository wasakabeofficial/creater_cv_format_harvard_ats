import React from "react";
import type { InputProps } from "../../types/ui/Input.type";
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
    <div className="flex flex-col gap-1.5 w-full">
      <Label
        htmlFor={id}
        text={label}
        required={required}
        className="text-sm font-medium text-gray-700"
      />

      <input
        id={id}
        name={name}
        type={type === "telephone" ? "tel" : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        autoComplete="off"
        className="
          w-full px-3 py-2 
          bg-white border border-gray-300 rounded-md shadow-sm
          text-sm font-sans text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
          disabled:bg-gray-50 disabled:text-gray-500
          transition-all duration-200
        "
      />
    </div>
  );
};

export default Input;
