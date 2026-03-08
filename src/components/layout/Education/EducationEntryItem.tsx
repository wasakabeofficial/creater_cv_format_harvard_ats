import React from "react";
import type { EducationEntry } from "../../../types/cv/Education.type";
import { Input, Button } from "../../ui";
import DateField from "../../ui/DateField";

interface EducationEntryItemProps {
  entry: EducationEntry;
  index: number;
  translations: any;
  onEntryChange: (id: string, updatedEntry: Partial<EducationEntry>) => void;
  onRemove: (id: string) => void;
  language: "en" | "es";
}

export const EducationEntryItem = ({
  entry,
  index,
  translations,
  onEntryChange,
  onRemove,
  language,
}: EducationEntryItemProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    onEntryChange(entry.id, { [name]: value });
  };

  return (
    <div className="group relative border-b border-gray-100 pb-8 mb-8 last:border-0 last:pb-0 last:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
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

        <Input
          id={`education-location-${index}`}
          label={translations.locationLabel}
          name="location"
          value={entry.location}
          onChange={handleInputChange}
          placeholder={translations.locationPlaceholder}
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
      </div>

      <div className="flex justify-end mt-4">
        <Button
          label={language === "es" ? "Eliminar Entrada" : "Remove Entry"}
          onClick={() => onRemove(entry.id)}
          variant="secondary"
          className="text-red-500 border-red-100 hover:bg-red-50 hover:border-red-200 text-xs py-1.5"
        />
      </div>
    </div>
  );
};
