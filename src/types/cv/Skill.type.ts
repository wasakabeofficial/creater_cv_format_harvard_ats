export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}
export interface SkillsData {
  groups: SkillGroup[];
  interests: string;
}
