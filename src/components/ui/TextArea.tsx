import type { TextAreaProps } from "../../types/Text.Area.type";
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
  enableHarvardOptimization = false,
}: TextAreaProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!enableHarvardOptimization) return;

    if (event.key === "Enter") {
      event.preventDefault();
      const cursorPosition = event.currentTarget.selectionStart;
      const textBefore = value.substring(0, cursorPosition);
      const textAfter = value.substring(cursorPosition);
      const newValue = `${textBefore}\n• ${textAfter}`;
      const syntheticEvent = {
        target: { name, value: newValue },
      } as React.ChangeEvent<HTMLTextAreaElement>;

      onChange(syntheticEvent);
    }
  };

  const checkActionVerb = () => {
    if (!enableHarvardOptimization || value.length === 0) return null;
    const lines = value.split("\n");
    const lastLine = lines[lines.length - 1].replace("•", "").trim();

    const firstWord = lastLine.split(" ")[0].toLowerCase();
    const commonWeakVerbs = ["hice", "estuve", "ayudé"];

    if (commonWeakVerbs.includes(firstWord)) {
      return (
        <div className="verb-suggestion">
          💡 Tip: Usa verbos más fuertes como "Lideré", "Ejecuté" o "Coordiné".
        </div>
      );
    }
    return null;
  };

  return (
    <div className="text-area-container">
      <Label htmlFor={id} text={label} required={required} />
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className={`custom-text-area ${enableHarvardOptimization ? "harvard-mode" : ""}`}
        spellCheck={true}
      />
      <div className="text-area-footer">
        {checkActionVerb()}
        <div className="text-area-counter">
          {value.length} / {maxLength} caracteres
        </div>
      </div>
    </div>
  );
};

export default TextArea;
