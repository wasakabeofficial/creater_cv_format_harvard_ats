import { useState } from "react";
import { SectionCard, Title } from "../../components/ui";
import { PersonalInfoForm } from "../../components/layout/Personal/PersonalInfoForm";
import { EducationForm } from "../../components/layout/Education/EducationForm";
import { WorkExperienceForm } from "../../components/layout/Work/WorkExperienceForm";
import { useCurriculumVitae } from "../../hooks/useCurriculumVitae";
import { EDITOR_TRANSLATIONS } from "../../constants/ui-translations";
import "../../assets/styles/cv/EditorLayout.css";

type SelectedLanguage = "en" | "es" | null;

export const EditorLayout = () => {
  const {
    cvData,
    updatePersonalInformation,
    updateEducation,
    addEducation,
    removeEducation,
    updateWorkExperience,
    addWorkExperience,
    removeWorkExperience,
    isDirty,
  } = useCurriculumVitae();

  const [selectedLanguage, setSelectedLanguage] =
    useState<SelectedLanguage>(null);
  const [isEducationUnlocked, setIsEducationUnlocked] = useState(false);
  const [isWorkUnlocked, setIsWorkUnlocked] = useState(false);
  const [, setIsSkillsUnlocked] = useState(false);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLanguage(event.target.value as SelectedLanguage);
  };

  const handleNextToEducation = () => {
    setIsEducationUnlocked(true);
    if (cvData.education.length === 0) {
      addEducation({
        id: crypto.randomUUID(),
        institution: "",
        location: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  const handleNextToWork = () => {
    setIsWorkUnlocked(true);
    if (cvData.workExperience.length === 0) {
      addWorkExperience({
        id: crypto.randomUUID(),
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        highlights: [],
      });
    }
  };

  const isEditorDisabled = selectedLanguage === null;
  const translations = selectedLanguage
    ? EDITOR_TRANSLATIONS[selectedLanguage]
    : null;

  return (
    <div className="editor-container">
      <header className="editor-header">
        <div className="editor-title-group">
          <Title
            label="Harvard CV Editor"
            level="h1"
            className="editor-main-title"
          />
          <span className="editor-subtitle">Standard 2026 Edition</span>
        </div>

        <div className="editor-controls">
          <div
            className={`language-selector-container ${isEditorDisabled ? "highlight-pulse" : ""}`}
          >
            <span className="language-label">Select Language:</span>
            <select
              className="language-select-dropdown"
              value={selectedLanguage ?? ""}
              onChange={handleLanguageChange}
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="en">English (Harvard Standard)</option>
              <option value="es">Español (Equivalente Técnico)</option>
            </select>
          </div>

          {isDirty && (
            <div className="status-badge-container">
              <span className="status-badge">Unsaved changes</span>
            </div>
          )}
        </div>
      </header>

      <main
        className={`editor-sections ${isEditorDisabled ? "sections-disabled" : ""}`}
      >
        <SectionCard
          title={translations?.personalInformation ?? "Personal Information"}
        >
          <div className={isEditorDisabled ? "pointer-events-none" : ""}>
            <PersonalInfoForm
              data={cvData.personalInformation}
              onChange={updatePersonalInformation}
              language={selectedLanguage ?? "en"}
              onNextStepAction={handleNextToEducation}
            />
          </div>
        </SectionCard>

        <SectionCard title={translations?.education ?? "Education"}>
          <div
            className={
              !isEducationUnlocked || isEditorDisabled
                ? "pointer-events-none opacity-50"
                : ""
            }
          >
            <EducationForm
              educationData={cvData.education}
              onEducationChange={updateEducation}
              onRemoveEducation={removeEducation}
              onAddEducation={() =>
                addEducation({
                  id: crypto.randomUUID(),
                  institution: "",
                  location: "",
                  degree: "",
                  fieldOfStudy: "",
                  startDate: "",
                  endDate: "",
                })
              }
              language={selectedLanguage ?? "en"}
              onNextStepAction={handleNextToWork}
            />
          </div>
        </SectionCard>

        <SectionCard title={translations?.workExperience ?? "Work Experience"}>
          <div
            className={
              !isWorkUnlocked || isEditorDisabled
                ? "pointer-events-none opacity-50"
                : ""
            }
          >
            {isWorkUnlocked ? (
              <WorkExperienceForm
                workData={cvData.workExperience}
                onWorkChange={updateWorkExperience}
                onRemoveWork={removeWorkExperience}
                onAddWork={() =>
                  addWorkExperience({
                    id: crypto.randomUUID(),
                    company: "",
                    position: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                    highlights: [],
                  })
                }
                language={selectedLanguage ?? "en"}
                onNextStepAction={() => setIsSkillsUnlocked(true)}
              />
            ) : (
              <p className="placeholder-text">
                {translations?.placeholder ??
                  "Please complete Education to continue..."}
              </p>
            )}
          </div>
        </SectionCard>
      </main>
    </div>
  );
};

export default EditorLayout;
