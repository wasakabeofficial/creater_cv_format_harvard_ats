import type { DateFieldProps } from "../../types/ui/Date.type";
import "../../assets/styles/DateField.css";
import Input from "./Input";

const DateField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  id,
  placeholder = "MM / YYYY",
}: DateFieldProps) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regexDate = /^[0-9/]*$/;
    if (regexDate.test(inputValue)) {
      onChange(event);
    }
  };

  return (
    <div className="date-field-container">
      <Input
        label={label}
        name={name}
        id={id}
        value={value}
        onChange={handleDateChange}
        required={required}
        placeholder={placeholder}
        validationType="only-numbers"
        type="text"
      />
    </div>
  );
};

export default DateField;
