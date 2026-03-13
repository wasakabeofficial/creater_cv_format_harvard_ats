import React from "react";
import type { WorkExperienceEntry } from "../../../types/cv/Work.Experience.type";
import { Button, DateField, Input, TextArea } from "../../ui";

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
    <div className="group relative bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-2">
      <div className="absolute -left-3 -top-3 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
        {index + 1}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
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
          required
        />
        <DateField
          id={`work-end-${index}`}
          label={translations.endDateLabel}
          name="endDate"
          value={entry.endDate}
          onChange={handleInputChange}
          placeholder="MM / YYYY"
          required
        />
        <div className="md:col-span-2">
          <Input
            id={`work-location-${index}`}
            label={translations.locationLabel}
            name="location"
            value={entry.location}
            onChange={handleInputChange}
            placeholder="e.g. Mountain View, CA"
            required
          />
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <TextArea
          id={`work-description-${index}`}
          label={translations.descriptionLabel}
          name="description"
          value={entry.description}
          onChange={handleInputChange}
          placeholder={translations.descriptionPlaceholder}
          enableHarvardOptimization={true}
          rows={6}
          required
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={() => onRemove(entry.id)}
          label=""
          variant="secondary"
          className="text-red-500 border-red-100 hover:bg-red-50 hover:border-red-200 text-xs py-1.5"
        >
          <span>
            {language === "es" ? "Eliminar Puesto" : "Remove Position"}
          </span>
        </Button>
      </div>
    </div>
  );
};
