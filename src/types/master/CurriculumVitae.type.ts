import type { EducationEntry } from "../cv/Education.type";
import type { LanguageEntry } from "../cv/Language.type";
import type { PersonalInformation } from "../cv/Personal.Information.type";
import type { SkillGroup } from "../cv/Skill.type";
import type { WorkExperienceEntry } from "../cv/Work.Experience.type";

export interface CurriculumVitae {
  personalInformation: PersonalInformation;
  education: EducationEntry[];
  workExperience: WorkExperienceEntry[];
  skillGroups: SkillGroup[];
  languages: LanguageEntry[];
}
