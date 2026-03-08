import { useState } from "react";
import "../../assets/styles/SectionCard.css";
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
    <section className="section-card">
      <header className="section-card-header" onClick={toggleExpand}>
        <div className="section-card-info">
          <Title label={title} level="h2" />
          {description && (
            <p className="section-card-description">{description}</p>
          )}
        </div>
        {isCollapsible && (
          <span className={`section-card-icon ${isExpanded ? "expanded" : ""}`}>
            ▾
          </span>
        )}
      </header>

      {isExpanded && (
        <div className="section-card-content">
          {children}
          {onAddElement && (
            <div className="section-card-actions">
              <Button
                label={addLabel}
                variant="secondary"
                onClick={onAddElement}
                fullWidth
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SectionCard;
