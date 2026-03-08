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
          className="border-dashed border-2 py-4 hover:border-black hover:bg-gray-50 transition-all"
        />

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <Button
            label={t.finishLabel}
            onClick={onNextStepAction}
            variant="primary"
            className="min-w-50 shadow-sm hover:shadow-md active:scale-95 transition-all"
          />
        </div>
      </div>
    </div>
  );
};
