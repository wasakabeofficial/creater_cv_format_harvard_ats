import type { DateFieldProps } from "../../types/ui/Date.type";
import "../../assets/styles/DateField.css";

const DateField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  id,
  placeholder = "DD / MM / YYYY",
}: DateFieldProps) => {
  const formatExperienceDate = (inputValue: string) => {
    const digits = inputValue.replace(/\D/g, "");

    let formattedDate = "";
    if (digits.length > 0) {
      formattedDate = digits.substring(0, 2);
      if (digits.length > 2) {
        formattedDate += "/" + digits.substring(2, 4);
      }
      if (digits.length > 4) {
        formattedDate += "/" + digits.substring(4, 8);
      }
    }
    return formattedDate;
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;

    const isDeleting =
      (event.nativeEvent as InputEvent).inputType === "deleteContentBackward";

    if (isDeleting) {
      onChange(event);
      return;
    }

    const formattedValue = formatExperienceDate(rawValue);

    if (rawValue.length > 0 && formattedValue.length === 0) {
      return;
    }

    const syntheticEvent = {
      ...event,
      target: {
        ...event.target,
        name,
        value: formattedValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };
  return (
    <div className="date-field-container">
      {label && (
        <label htmlFor={id} className="date-field-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleDateChange}
        placeholder={placeholder}
        required={required}
        maxLength={10}
        className="date-field-input"
      />
    </div>
  );
};

export default DateField;
