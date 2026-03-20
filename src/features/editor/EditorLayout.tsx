import { useState } from "react";
import { SectionCard, Title } from "../../components/ui";
import { PersonalInfoForm } from "../../components/layout/Personal/PersonalInfoForm";
import { EducationForm } from "../../components/layout/Education/EducationForm";
import { WorkExperienceForm } from "../../components/layout/Work/WorkExperienceForm";
import { SkillGroupForm } from "../../components/layout/Skill/SkillGroupForm";
import { useCurriculumVitae } from "../../hooks/useCurriculumVitae";
import { EDITOR_TRANSLATIONS } from "../../constants/ui-translations";
import { LanguageForm } from "../../components/layout/Languages/LanguageForm";
import { toast } from "react-toastify";
type SelectedLanguage = "en" | "es" | null;
interface EditorLayoutProps {
  methods: ReturnType<typeof useCurriculumVitae>;
}

export const EditorLayout = ({ methods }: EditorLayoutProps) => {
  const {
    cvData,
    updatePersonalInformation,
    updateEducation,
    addEducation,
    removeEducation,
    updateWorkExperience,
    addWorkExperience,
    removeWorkExperience,
    addSkillGroup,
    updateSkillGroup,
    removeSkillGroup,
    updateSkillsInGroup,
    updateLanguage,
    addLanguage,
    removeLanguage,
    isDirty,
  } = methods;

  const [selectedLanguage, setSelectedLanguage] =
    useState<SelectedLanguage>(null);
  const [isEducationUnlocked, setIsEducationUnlocked] = useState(false);
  const [isWorkUnlocked, setIsWorkUnlocked] = useState(false);
  const [isSkillsUnlocked, setIsSkillsUnlocked] = useState(false);
  const [isLanguagesUnlocked, setIsLanguagesUnlocked] = useState(false);

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

  const handleNextToSkills = () => {
    setIsSkillsUnlocked(true);
    if (cvData.skillGroups.length === 0) {
      addSkillGroup({ id: crypto.randomUUID(), category: "", skills: [] });
    }
  };

  const handleNextToLanguages = () => {
    setIsLanguagesUnlocked(true);
    if (cvData.languages.length === 0) {
      addLanguage({
        id: crypto.randomUUID(),
        language: "",
        proficiency: "Limited Working",
      });
    }
  };

  const isEditorDisabled = selectedLanguage === null;
  const translations = selectedLanguage
    ? EDITOR_TRANSLATIONS[selectedLanguage]
    : null;

  const handleShowToast = () => {
    const message =
      selectedLanguage === "en"
        ? "✨ Your CV is ready! Click the 'Download PDF' button to get the PDF."
        : "¡Tu CV está listo! Haz clic en el botón 'Descargar PDF' para obtener el PDF.";

    toast.success(message);
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 mb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <Title
              label="Harvard CV Editor"
              level="h1"
              className="text-2xl font-bold tracking-tight text-gray-900"
            />
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              Standard 2026 Edition
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-3 bg-gray-100 p-1.5 rounded-lg transition-all ${isEditorDisabled ? "ring-2 ring-blue-400 animate-pulse" : ""}`}
            >
              <span className="text-xs font-bold text-gray-600 ml-2">
                LANG:
              </span>
              <select
                className="bg-white border-none text-sm font-medium rounded-md px-3 py-1.5 focus:ring-0 cursor-pointer shadow-sm"
                value={selectedLanguage ?? ""}
                onChange={handleLanguageChange}
              >
                <option value="" disabled>
                  Choose...
                </option>
                <option value="en">English (Harvard)</option>
                <option value="es">Español (Técnico)</option>
              </select>
            </div>

            {isDirty && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full animate-fade-in">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                <span className="text-[10px] font-bold text-amber-700 uppercase italic">
                  Unsaved
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main
        className={`max-w-4xl mx-auto px-4 space-y-10 transition-opacity duration-500 ${isEditorDisabled ? "opacity-40 grayscale" : "opacity-100"}`}
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
                ? "pointer-events-none opacity-40 grayscale-[0.5]"
                : "transition-all duration-500"
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
                ? "pointer-events-none opacity-40"
                : "transition-all duration-500"
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
                onNextStepAction={handleNextToSkills}
              />
            ) : (
              <div className="py-8 text-center border-2 border-dashed border-gray-100 rounded-xl">
                <p className="text-sm text-gray-400 italic">
                  {translations?.placeholderWork ??
                    "Complete Education to continue..."}
                </p>
              </div>
            )}
          </div>
        </SectionCard>

        <SectionCard title={translations?.skills ?? "Skills & Competencies"}>
          <div
            className={
              !isSkillsUnlocked || isEditorDisabled
                ? "pointer-events-none opacity-40"
                : "transition-all duration-500"
            }
          >
            {isSkillsUnlocked ? (
              <SkillGroupForm
                skillGroups={cvData.skillGroups}
                onGroupChange={updateSkillGroup}
                onSkillsChange={updateSkillsInGroup}
                onAddGroup={() =>
                  addSkillGroup({
                    id: crypto.randomUUID(),
                    category: "",
                    skills: [],
                  })
                }
                onRemoveGroup={removeSkillGroup}
                language={selectedLanguage ?? "en"}
                onNextStepAction={handleNextToLanguages}
              />
            ) : (
              <div className="py-8 text-center border-2 border-dashed border-gray-100 rounded-xl">
                <p className="text-sm text-gray-400 italic">
                  {selectedLanguage === "es"
                    ? "Completa la experiencia laboral para continuar..."
                    : "Complete Work Experience to continue..."}
                </p>
              </div>
            )}
          </div>
        </SectionCard>

        <SectionCard title={translations?.languages ?? "Languages"}>
          <div
            className={
              !isLanguagesUnlocked || isEditorDisabled
                ? "pointer-events-none opacity-40"
                : "transition-all duration-500"
            }
          >
            {isLanguagesUnlocked ? (
              <LanguageForm
                languages={cvData.languages}
                onLanguageChange={updateLanguage}
                onAddLanguage={() =>
                  addLanguage({
                    id: crypto.randomUUID(),
                    language: "",
                    proficiency: "Limited Working",
                  })
                }
                onRemoveLanguage={removeLanguage}
                language={selectedLanguage ?? "en"}
                onNextStepAction={handleShowToast}
              />
            ) : (
              <div className="py-8 text-center border-2 border-dashed border-gray-100 rounded-xl">
                <p className="text-sm text-gray-400 italic">
                  {selectedLanguage === "es"
                    ? "Completa las habilidades para continuar..."
                    : "Complete Skills to continue..."}
                </p>
              </div>
            )}
          </div>
        </SectionCard>
      </main>
    </div>
  );
};

export default EditorLayout;
