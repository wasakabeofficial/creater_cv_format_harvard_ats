import React from "react";
import type { EducationEntry } from "../../types/cv/Education.type";
import { Input, Button } from "../ui";
import DateField from "../ui/DateField";

export const EducationEntryItem = ({
  entry,
  index,
  translations,
  onEntryChange,
  onRemove,
  language,
}: {
  entry: EducationEntry;
  index: number;
  translations: any;
  onEntryChange: (id: string, updatedEntry: Partial<EducationEntry>) => void;
  onRemove: (id: string) => void;
  language: "en" | "es";
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onEntryChange(entry.id, { [name]: value });
  };

  return (
    <div
      className="education-entry-card"
      style={{
        marginBottom: "1.5rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="personal-info-grid">
        <Input
          id={`education-institution-${index}`}
          label={translations.institutionLabel}
          name="institution"
          value={entry.institution}
          onChange={handleInputChange}
          placeholder={translations.institutionPlaceholder}
          validationType="alphanumeric"
          required
        />
        <Input
          id={`education-degree-${index}`}
          label={translations.degreeLabel}
          name="degree"
          value={entry.degree}
          onChange={handleInputChange}
          placeholder={translations.degreePlaceholder}
          validationType="alphanumeric"
          required
        />
        <Input
          id={`education-field-of-study-${index}`}
          label={translations.fieldOfStudyLabel}
          name="fieldOfStudy"
          value={entry.fieldOfStudy}
          onChange={handleInputChange}
          placeholder={translations.fieldOfStudyPlaceholder}
          validationType="alphanumeric"
        />
        <DateField
          id={`education-start-date-${index}`}
          label={translations.startDateLabel}
          name="startDate"
          value={entry.startDate}
          onChange={handleInputChange}
          placeholder={translations.startDatePlaceholder}
        />
        <DateField
          id={`education-end-date-${index}`}
          label={translations.endDateLabel}
          name="endDate"
          value={entry.endDate}
          onChange={handleInputChange}
          placeholder={translations.endDatePlaceholder}
        />
        <Input
          id={`education-location-${index}`}
          label={translations.locationLabel}
          name="location"
          value={entry.location}
          onChange={handleInputChange}
          placeholder={translations.locationPlaceholder}
          validationType="alphanumeric"
        />
      </div>
      <div className="entry-actions" style={{ marginTop: "1rem" }}>
        <Button
          label={language === "es" ? "Eliminar" : "Remove"}
          onClick={() => onRemove(entry.id)}
          variant="secondary"
          className="remove-education-button"
        />
      </div>
    </div>
  );
};
