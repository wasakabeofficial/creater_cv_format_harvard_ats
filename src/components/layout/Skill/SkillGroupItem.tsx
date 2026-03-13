import React, { useState, useEffect } from "react";
import { Button, Input, TextArea } from "../../ui";
import type { SkillGroup } from "../../../types/cv/Skill.type";

interface SkillGroupItemProps {
  group: SkillGroup;
  index: number;
  translations: any;
  onGroupChange: (id: string, updatedGroup: Partial<SkillGroup>) => void;
  onSkillsChange: (id: string, skillsString: string) => void;
  onRemove: (id: string) => void;
  language?: "en" | "es";
}

export const SkillGroupItem = ({
  group,
  index,
  translations,
  onGroupChange,
  onSkillsChange,
  onRemove,
}: SkillGroupItemProps) => {
  const [localSkills, setLocalSkills] = useState(group.skills.join(", "));
  const textAreaId = `skills-list-${group.id}`;

  useEffect(() => {
    const currentGlobal = group.skills.join(", ");
    if (currentGlobal !== localSkills && !localSkills.trim().endsWith(",")) {
      setLocalSkills(currentGlobal);
    }
  }, [group.skills]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setLocalSkills(newValue);
    onSkillsChange(group.id, newValue);
  };

  return (
    <div className="relative bg-gray-50/50 border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-gray-300 animate-in fade-in zoom-in-95">
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase rounded-full tracking-widest shadow-sm">
        {translations.categoryLabel || "Categoría"} #{index + 1}
      </div>

      <div className="space-y-5 mt-2">
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

        <TextArea
          id={textAreaId}
          label={translations.skillsLabel}
          name="skills"
          value={localSkills}
          onChange={handleChange}
          placeholder={translations.skillsPlaceholder}
          rows={3}
          required
          enableHarvardOptimization={false}
          enableCommaSeparation={true}
        />
      </div>

      <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
        <Button
          label={translations.removeGroup || "Eliminar Grupo"}
          onClick={() => onRemove(group.id)}
          variant="outline"
          className="text-red-500 border-none hover:bg-red-50 text-xs py-1"
        />
      </div>
    </div>
  );
};
