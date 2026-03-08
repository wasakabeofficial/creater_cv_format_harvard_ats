import React from "react";
import type { TextAreaProps } from "../../types/ui/Text.Area.type";
import Label from "./Label";

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

  const renderVerbSuggestion = () => {
    if (!enableHarvardOptimization || value.length === 0) return null;
    const lines = value.split("\n");
    const lastLine = lines[lines.length - 1].replace("•", "").trim();
    const firstWord = lastLine.split(" ")[0].toLowerCase();

    const commonWeakVerbs = ["hice", "estuve", "ayudé", "hice", "vi"];

    if (commonWeakVerbs.includes(firstWord)) {
      return (
        <div className="text-xs text-amber-600 font-medium animate-pulse">
          💡 Tip: Usa verbos más fuertes como "Lideré", "Ejecuté" o "Coordiné".
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <Label htmlFor={id} text={label} required={required} />

      <div className="relative group">
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
          spellCheck={true}
          className={`
            w-full px-4 py-3 rounded-lg border text-sm font-sans transition-all duration-200 outline-none
            ${
              enableHarvardOptimization
                ? "border-blue-200 bg-blue-50/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                : "border-gray-300 bg-white focus:border-black focus:ring-2 focus:ring-gray-200"
            }
            resize-vertical min-h-25
          `}
        />
        {enableHarvardOptimization && (
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-blue-100 text-[10px] font-bold text-blue-600 uppercase rounded tracking-tight pointer-events-none">
            Harvard Mode
          </div>
        )}
      </div>

      <div className="flex justify-between items-start mt-1 px-1">
        <div className="flex-1 mr-4">{renderVerbSuggestion()}</div>
        <div className="text-[11px] text-gray-400 font-mono whitespace-nowrap">
          {value.length} / {maxLength}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
