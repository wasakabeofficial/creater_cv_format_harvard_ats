import { useState, useCallback, useMemo } from "react";
import type { CurriculumVitae } from "../types/master/CurriculumVitae.type";
import type { WorkExperienceEntry } from "../types/cv/Work.Experience.type";
import type { EducationEntry } from "../types/cv/Education.type";
import type { SkillGroup } from "../types/cv/Skill.type";
import type { LanguageEntry } from "../types/cv/Language.type";

const INITIAL_STATE: CurriculumVitae = {
  personalInformation: {
    fullName: "",
    email: "",
    telephone: "",
    location: "",
  },
  education: [],
  workExperience: [],
  skillGroups: [],
  languages: [],
};

export const useCurriculumVitae = () => {
  const [cvData, setCvData] = useState<CurriculumVitae>(INITIAL_STATE);

  const isDirty = useMemo(() => {
    return JSON.stringify(cvData) !== JSON.stringify(INITIAL_STATE);
  }, [cvData]);

  const updatePersonalInformation = useCallback(
    (info: Partial<CurriculumVitae["personalInformation"]>) => {
      setCvData((prev) => ({
        ...prev,
        personalInformation: { ...prev.personalInformation, ...info },
      }));
    },
    [],
  );

  const addWorkExperience = useCallback((entry: WorkExperienceEntry) => {
    setCvData((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, entry],
    }));
  }, []);

  const updateWorkExperience = useCallback(
    (id: string, updatedEntry: Partial<WorkExperienceEntry>) => {
      setCvData((prev) => ({
        ...prev,
        workExperience: prev.workExperience.map((entry) =>
          entry.id === id ? { ...entry, ...updatedEntry } : entry,
        ),
      }));
    },
    [],
  );

  const removeWorkExperience = useCallback((id: string) => {
    setCvData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((entry) => entry.id !== id),
    }));
  }, []);

  const addEducation = useCallback((entry: EducationEntry) => {
    setCvData((prev) => ({
      ...prev,
      education: [...prev.education, entry],
    }));
  }, []);

  const updateEducation = useCallback(
    (id: string, updatedEntry: Partial<EducationEntry>) => {
      setCvData((prev) => ({
        ...prev,
        education: prev.education.map((entry) =>
          entry.id === id ? { ...entry, ...updatedEntry } : entry,
        ),
      }));
    },
    [],
  );

  const removeEducation = useCallback((id: string) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((entry) => entry.id !== id),
    }));
  }, []);

  const addSkillGroup = useCallback((group: SkillGroup) => {
    setCvData((prev) => ({
      ...prev,
      skillGroups: [...prev.skillGroups, group],
    }));
  }, []);

  const updateSkillGroup = useCallback(
    (id: string, updatedGroup: Partial<SkillGroup>) => {
      setCvData((prev) => ({
        ...prev,
        skillGroups: prev.skillGroups.map((group) =>
          group.id === id ? { ...group, ...updatedGroup } : group,
        ),
      }));
    },
    [],
  );

  const updateSkillsInGroup = useCallback(
    (id: string, skillsString: string) => {
      const skillsArray = skillsString
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      setCvData((prev) => ({
        ...prev,
        skillGroups: prev.skillGroups.map((group) =>
          group.id === id ? { ...group, skills: skillsArray } : group,
        ),
      }));
    },
    [],
  );

  const removeSkillGroup = useCallback((id: string) => {
    setCvData((prev) => ({
      ...prev,
      skillGroups: prev.skillGroups.filter((group) => group.id !== id),
    }));
  }, []);

  // --- LANGUAGES ---
  const addLanguage = useCallback((language: LanguageEntry) => {
    setCvData((prev) => ({
      ...prev,
      languages: [...prev.languages, language],
    }));
  }, []);

  const updateLanguage = useCallback(
    (id: string, updatedLanguage: Partial<LanguageEntry>) => {
      setCvData((prev) => ({
        ...prev,
        languages: prev.languages.map((item) =>
          item.id === id ? { ...item, ...updatedLanguage } : item,
        ),
      }));
    },
    [],
  );

  const removeLanguage = useCallback((id: string) => {
    setCvData((prev) => ({
      ...prev,
      languages: prev.languages.filter((item) => item.id !== id),
    }));
  }, []);

  const resetCvData = useCallback(() => {
    setCvData(INITIAL_STATE);
  }, []);

  return {
    cvData,
    isDirty,
    updatePersonalInformation,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkillGroup,
    updateSkillGroup,
    removeSkillGroup,
    updateSkillsInGroup,
    addLanguage,
    updateLanguage,
    removeLanguage,
    resetCvData,
  };
};
