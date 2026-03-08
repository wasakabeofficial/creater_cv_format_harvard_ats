import { useState } from "react";
import type { SectionCardProps } from "../../types/ui/Section.Card.type";
import Title from "./Title";
import Button from "./Button";

const SectionCard = ({
  title,
  description,
  children,
  onAddElement,
  addLabel = "Añadir elemento",
  isCollapsible = true,
}: SectionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    if (isCollapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6 transition-all duration-300">
      <header
        className={`
          flex justify-between items-center p-5 cursor-pointer select-none
          hover:bg-gray-50 transition-colors duration-200
          ${isExpanded ? "border-b border-gray-100" : ""}
        `}
        onClick={toggleExpand}
      >
        <div className="flex flex-col gap-1">
          <Title
            label={title}
            level="h2"
            className="text-xl font-bold text-gray-900"
          />
          {description && (
            <p className="text-sm text-gray-500 font-sans italic">
              {description}
            </p>
          )}
        </div>

        {isCollapsible && (
          <span
            className={`
              text-2xl text-gray-400 transition-transform duration-300 ease-in-out
              ${isExpanded ? "rotate-180" : "rotate-0"}
            `}
          >
            ▾
          </span>
        )}
      </header>

      {isExpanded && (
        <div className="p-6 animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="space-y-4">{children}</div>

          {onAddElement && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Button
                label={addLabel}
                variant="secondary"
                onClick={onAddElement}
                fullWidth
                className="py-3 border-dashed hover:border-solid transition-all"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SectionCard;
