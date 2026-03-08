import { WORK_TRANSLATIONS } from "../../../constants/ui-translations";
import type { WorkExperienceEntry } from "../../../types/cv/Work.Experience.type";
import { Button } from "../../ui";
import { WorkEntryItem } from "./WorkEntryItem";

interface WorkExperienceFormProps {
  workData: WorkExperienceEntry[];
  onWorkChange: (
    id: string,
    updatedEntry: Partial<WorkExperienceEntry>,
  ) => void;
  onAddWork: () => void;
  onRemoveWork: (id: string) => void;
  onNextStepAction: () => void;
  language: "en" | "es";
}

export const WorkExperienceForm = ({
  workData,
  onWorkChange,
  onAddWork,
  onRemoveWork,
  onNextStepAction,
  language,
}: WorkExperienceFormProps) => {
  const translations = WORK_TRANSLATIONS[language];

  const isWorkExperienceValid = workData.every(
    (entry) =>
      entry.company.trim() !== "" &&
      entry.position.trim() !== "" &&
      entry.startDate.trim() !== "" &&
      entry.endDate.trim() !== "" &&
      entry.location.trim() !== "" &&
      entry.description.trim() !== "",
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        {workData.map((entry, index) => (
          <WorkEntryItem
            key={entry.id}
            entry={entry}
            index={index}
            translations={translations}
            onChange={onWorkChange}
            onRemove={onRemoveWork}
            language={language}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 mt-4">
        <Button
          label={
            language === "es" ? "+ Agregar Experiencia" : "+ Add Experience"
          }
          onClick={onAddWork}
          variant="secondary"
          fullWidth
          className="border-dashed border-2 py-4 bg-gray-50/50 hover:bg-white hover:border-black transition-all text-gray-600"
        />

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <Button
            label={
              language === "es" ? "Siguiente: Habilidades" : "Next: Skills"
            }
            onClick={onNextStepAction}
            disabled={!isWorkExperienceValid}
            variant="primary"
            className={`
              min-w-60 transition-all duration-300
              ${
                !isWorkExperienceValid
                  ? "grayscale opacity-50 cursor-not-allowed"
                  : "shadow-md hover:shadow-lg active:scale-95 hover:translate-x-1"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
};
