import React from "react";
import type { WorkExperienceEntry } from "../../../types/cv/Work.Experience.type";
import { Button, DateField, Input } from "../../ui";

interface WorkEntryItemProps {
  entry: WorkExperienceEntry;
  index: number;
  translations: any;
  onChange: (id: string, updatedEntry: Partial<WorkExperienceEntry>) => void;
  onRemove: (id: string) => void;
  language: "en" | "es";
}

export const WorkEntryItem = ({
  entry,
  index,
  translations,
  onChange,
  onRemove,
  language,
}: WorkEntryItemProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    onChange(entry.id, { [name]: value });
  };

  return (
    <div
      className="work-entry-card"
      style={{
        marginBottom: "2rem",
        padding: "1.5rem",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="personal-info-grid">
        <Input
          id={`work-company-${index}`}
          label={translations.companyLabel}
          name="company"
          value={entry.company}
          onChange={handleInputChange}
          placeholder="e.g. Google"
          required
        />
        <Input
          id={`work-position-${index}`}
          label={translations.positionLabel}
          name="position"
          value={entry.position}
          onChange={handleInputChange}
          placeholder="e.g. Software Engineer"
          required
        />
        <DateField
          id={`work-start-${index}`}
          label={translations.startDateLabel}
          name="startDate"
          value={entry.startDate}
          onChange={handleInputChange}
          placeholder="MM / YYYY"
        />
        <DateField
          id={`work-end-${index}`}
          label={translations.endDateLabel}
          name="endDate"
          value={entry.endDate}
          onChange={handleInputChange}
          placeholder="MM / YYYY"
        />
        <Input
          id={`work-location-${index}`}
          label={translations.locationLabel}
          name="location"
          value={entry.location}
          onChange={handleInputChange}
          placeholder="e.g. Mountain View, CA"
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label
          className="date-field-label"
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          {translations.descriptionLabel}
        </label>
        <textarea
          name="description"
          value={entry.description}
          onChange={handleInputChange}
          className="date-field-input"
          style={{
            minHeight: "120px",
            resize: "vertical",
            width: "100%",
            padding: "0.75rem",
            fontSize: "0.95rem",
          }}
          placeholder={translations.descriptionPlaceholder}
        />
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          label={language === "es" ? "Eliminar Puesto" : "Remove Position"}
          onClick={() => onRemove(entry.id)}
          variant="secondary"
        />
      </div>
    </div>
  );
};
