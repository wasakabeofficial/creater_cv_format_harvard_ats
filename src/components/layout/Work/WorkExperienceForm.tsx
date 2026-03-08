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

  return (
    <div className="work-experience-form">
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

      <div
        className="form-footer-actions"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          label={
            language === "es" ? "+ Agregar Experiencia" : "+ Add Experience"
          }
          onClick={onAddWork}
          variant="secondary"
          fullWidth
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button
            label={
              language === "es" ? "Siguiente: Habilidades" : "Next: Skills"
            }
            onClick={onNextStepAction}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};
