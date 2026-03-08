import { Button } from "../../ui";
import { SKILLS_TRANSLATIONS } from "../../../constants/ui-translations";
import { SkillGroupItem } from "./SkillGroupItem";
import type { SkillGroup } from "../../../types/cv/Skill.type";

interface SkillGroupFormProps {
  skillGroups: SkillGroup[];
  onGroupChange: (id: string, updatedGroup: Partial<SkillGroup>) => void;
  onSkillsChange: (id: string, skillsString: string) => void;
  onAddGroup: () => void;
  onRemoveGroup: (id: string) => void;
  onNextStepAction: () => void;
  language: "en" | "es";
}

export const SkillGroupForm = ({
  skillGroups,
  onGroupChange,
  onSkillsChange,
  onAddGroup,
  onRemoveGroup,
  onNextStepAction,
  language,
}: SkillGroupFormProps) => {
  const t = SKILLS_TRANSLATIONS[language];

  return (
    <div className="skill-groups-form">
      <p
        style={{
          fontSize: "0.85rem",
          color: "#6b7280",
          marginBottom: "1.5rem",
          fontStyle: "italic",
        }}
      >
        {t.helperText}
      </p>

      {skillGroups.map((group, index) => (
        <SkillGroupItem
          key={group.id}
          group={group}
          index={index}
          translations={t}
          onGroupChange={onGroupChange}
          onSkillsChange={onSkillsChange}
          onRemove={onRemoveGroup}
          language={language}
        />
      ))}

      <div
        className="form-footer-actions"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <Button
          label={t.addSkillGroup}
          onClick={onAddGroup}
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
            label={t.finishLabel}
            onClick={onNextStepAction}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};
