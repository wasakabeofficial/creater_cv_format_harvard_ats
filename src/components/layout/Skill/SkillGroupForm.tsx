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

  const isSkillsComplete =
    skillGroups.length > 0 &&
    skillGroups.every(
      (group) =>
        group.category.trim() !== "" &&
        group.skills.length > 0 &&
        group.skills.some((s) => s.trim() !== ""),
    );

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-gray-500 italic font-sans px-1">
        {t.helperText}
      </p>

      <div className="space-y-6">
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
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Button
          label={t.addSkillGroup}
          onClick={onAddGroup}
          variant="secondary"
          fullWidth
          className="border-dashed border-2 py-4 hover:border-black hover:bg-gray-50 transition-all text-gray-600"
        />

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <Button
            label={t.finishLabel}
            onClick={onNextStepAction}
            disabled={!isSkillsComplete}
            variant="primary"
            className={`
              min-w-50 transition-all duration-300
              ${
                !isSkillsComplete
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
