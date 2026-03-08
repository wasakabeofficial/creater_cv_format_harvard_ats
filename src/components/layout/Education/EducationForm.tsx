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

  return (
    <div className="education-form-container">
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

      <div
        className="education-actions"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          label={
            language === "es"
              ? "+ Agregar otra institución"
              : "+ Add another institution"
          }
          onClick={onAddEducation}
          variant="secondary"
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
              language === "es"
                ? "Siguiente: Experiencia Laboral"
                : "Next: Work Experience"
            }
            onClick={onNextStepAction}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};
