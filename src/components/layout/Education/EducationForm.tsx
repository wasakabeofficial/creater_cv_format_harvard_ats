import { EDUCATION_TRANSLATIONS } from "../../../constants/ui-translations";
import type { EducationEntry } from "../../../types/cv/Education.type";
import { Button } from "../../ui";
import { EducationEntryItem } from "./EducationEntryItem";

interface EducationFormProps {
  educationData: EducationEntry[];
  onEducationChange: (
    id: string,
    updatedEntry: Partial<EducationEntry>,
  ) => void;
  onAddEducation: () => void;
  onRemoveEducation: (id: string) => void;
  onNextStepAction: () => void;
  language: "en" | "es";
}

export const EducationForm = ({
  educationData,
  onEducationChange,
  onAddEducation,
  onRemoveEducation,
  onNextStepAction,
  language,
}: EducationFormProps) => {
  const translations = EDUCATION_TRANSLATIONS[language];

  const isEducationComplete =
    educationData.length > 0 &&
    educationData.every(
      (entry) =>
        entry.institution.trim() !== "" &&
        entry.degree.trim() !== "" &&
        entry.location.trim() !== "" &&
        entry.startDate.trim() !== "" &&
        entry.endDate.trim() !== "",
    );

  return (
    <div className="flex flex-col">
      <div className="space-y-4">
        {educationData.map((entry, index) => (
          <EducationEntryItem
            key={entry.id}
            entry={entry}
            index={index}
            translations={translations}
            onEntryChange={onEducationChange}
            onRemove={onRemoveEducation}
            language={language}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <Button
          label={
            language === "es"
              ? "+ Agregar otra institución"
              : "+ Add another institution"
          }
          onClick={onAddEducation}
          variant="secondary"
          className="border-dashed border-2 hover:border-solid hover:bg-gray-50 transition-all py-4 text-gray-600"
        />

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <Button
            label={
              language === "es"
                ? "Siguiente: Experiencia Laboral"
                : "Next: Work Experience"
            }
            onClick={onNextStepAction}
            disabled={!isEducationComplete}
            variant="primary"
            className={`
              min-w-60 transition-all duration-300
              ${
                !isEducationComplete
                  ? "grayscale opacity-50 cursor-not-allowed"
                  : "shadow-md hover:shadow-lg hover:translate-x-1"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
};
