import { useState } from "react";
import { SectionCard, Title } from "../../components/ui"; // Importamos Title
import { PersonalInfoForm } from "../../components/layout/PersonalInfoForm";
import { useCurriculumVitae } from "../../hooks/useCurriculumVitae";
import { EDITOR_TRANSLATIONS } from "../../constants/ui-translations";
import "../../assets/styles/EditorLayout.css";

type SelectedLanguage = "en" | "es" | null;

export const EditorLayout = () => {
  const { cvData, updatePersonalInformation, isDirty } = useCurriculumVitae();
  const [selectedLanguage, setSelectedLanguage] =
    useState<SelectedLanguage>(null);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLanguage(event.target.value as SelectedLanguage);
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
            />
          </div>
        </SectionCard>

        <SectionCard title={translations?.workExperience ?? "Work Experience"}>
          <p className="placeholder-text">
            {translations?.placeholder ??
              "Please select a language to start writing..."}
          </p>
        </SectionCard>
      </main>
    </div>
  );
};
