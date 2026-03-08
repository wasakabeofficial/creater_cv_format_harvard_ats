import { Button, Input } from "../../ui";
import Label from "../../ui/Label";
import type { SkillGroup } from "../../../types/cv/Skill.type";

interface SkillGroupItemProps {
  group: SkillGroup;
  index: number;
  translations: any;
  onGroupChange: (id: string, updatedGroup: Partial<SkillGroup>) => void;
  onSkillsChange: (id: string, skillsString: string) => void;
  onRemove: (id: string) => void;
  language: "en" | "es";
}

export const SkillGroupItem = ({
  group,
  index,
  translations,
  onGroupChange,
  onSkillsChange,
  onRemove,
}: SkillGroupItemProps) => {
  const skillsValue = group.skills.join(", ");
  const textAreaId = `skills-list-${group.id}`;

  return (
    <div
      className="skill-group-card"
      style={{
        marginBottom: "1.5rem",
        padding: "1.2rem",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Input
          id={`skill-category-${index}`}
          label={translations.categoryLabel}
          name="category"
          value={group.category}
          onChange={(e) =>
            onGroupChange(group.id, { category: e.target.value })
          }
          placeholder={translations.categoryPlaceholder}
          required
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Label
          text={translations.skillsLabel}
          htmlFor={textAreaId}
          required
          className="date-field-label"
        />
        <textarea
          id={textAreaId}
          value={skillsValue}
          onChange={(e) => onSkillsChange(group.id, e.target.value)}
          className="date-field-input"
          style={{
            minHeight: "80px",
            resize: "vertical",
            width: "100%",
            padding: "0.75rem",
            fontSize: "0.95rem",
            marginTop: "0.5rem",
          }}
          placeholder={translations.skillsPlaceholder}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          label={translations.removeGroup}
          onClick={() => onRemove(group.id)}
          variant="secondary"
        />
      </div>
    </div>
  );
};
