import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import type { CurriculumVitae } from "../../types/master/CurriculumVitae.type";
import { EDITOR_TRANSLATIONS } from "../../constants/ui-translations";
import { CVDocument } from "./pdf/CVDocument";

interface PreviewLayoutProps {
  data: CurriculumVitae;
  language: "en" | "es";
}

export const PreviewLayout = ({
  data,
  language: initialLanguage,
}: PreviewLayoutProps) => {
  const {
    personalInformation,
    education,
    workExperience,
    skillGroups,
    languages,
  } = data;

  const [previewLang, setPreviewLang] = useState<"en" | "es">(initialLanguage);
  const t = EDITOR_TRANSLATIONS[previewLang];

  const toggleLanguage = () => {
    setPreviewLang((prev) => (prev === "en" ? "es" : "en"));
  };

  const renderContent = () => (
    <>
      <section className="text-center mb-4">
        <h1
          className="text-cv-name uppercase 
        tracking-tight mb-1"
        >
          {personalInformation.fullName || "Your Full Name"}
        </h1>
        <div
          className="text-cv-header uppercase
         tracking-tight mb-2"
        >
          {education.map((edu) => (
            <span>{edu.degree}</span>
          ))}
        </div>

        <div
          className="flex justify-center flex-wrap
         gap-x-2 gap-y-0.5 text-cv-body border-b
          border-harvard-black pb-2"
        >
          {personalInformation.location && (
            <span>{personalInformation.location}</span>
          )}
          {personalInformation.telephone && (
            <>
              <span className="not-italic font-bold">|</span>
              <span>{personalInformation.telephone}</span>
            </>
          )}
          {personalInformation.email && (
            <>
              <span className="not-italic font-bold">|</span>
              <span>{personalInformation.email}</span>
            </>
          )}
          {personalInformation.linkedinUrl && (
            <>
              <span className="not-italic font-bold">|</span>
              <span className="break-all">
                {personalInformation.linkedinUrl}
              </span>
            </>
          )}
          {personalInformation.portfolioUrl && (
            <>
              <span className="not-italic font-bold">|</span>
              <span className="break-all">
                {personalInformation.portfolioUrl}
              </span>
            </>
          )}
        </div>
      </section>

      {workExperience.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-cv-header border-b
           border-harvard-black mb-1"
          >
            {t.workExperience}
          </h2>
          {workExperience.map((work) => (
            <div
              key={work.id}
              className="mb-3 
            text-cv-body"
            >
              <div
                className="flex justify-between
               font-bold w-full gap-2"
              >
                <span className="w-80 text-left p-1">{work.company}</span>
                <span className="ml-auto text-right">{work.location}</span>
              </div>
              <div
                className="flex justify-between
               italic mb-0.5"
              >
                <span className="p-1">{work.position}</span>
                <span className="not-italic">
                  {work.startDate} — {work.endDate}
                </span>
              </div>
              <ul
                className="list-disc ml-4 
              text-harvard-gray leading-tight"
              >
                {work.description.split("\n").map((line, i) => (
                  <li key={i}>{line.replace("•", "").trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-cv-header border-b border-harvard-black mb-1">
            {t.education}
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between text-cv-body font-bold">
                <span className="w-[70%] text-left">
                  {edu.institution || "University Name"}
                </span>
                <span className="w-[30%] text-right">{edu.location}</span>
              </div>
              <div className="flex justify-between text-cv-body italic font-medium">
                <span>{edu.fieldOfStudy ? `${edu.fieldOfStudy}` : ""}</span>
                <span className="not-italic font-normal">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {skillGroups.length > 0 && (
        <section className="mb-4">
          <h2 className="text-cv-header border-b border-harvard-black mb-1">
            {t.skills}
          </h2>
          <div className="grid grid-cols-1 gap-1">
            {skillGroups.map((group) => (
              <div key={group.id} className="text-cv-body">
                <span className="font-bold uppercase text-[9pt]">
                  {group.category}:{" "}
                </span>
                <span>{group.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {languages.length > 0 && (
        <section className="mb-4">
          <h2 className="text-cv-header border-b border-harvard-black mb-1">
            {t.languages}
          </h2>
          <div className="text-cv-body">
            <div className="flex flex-wrap gap-x-2">
              {languages.map((lang, index) => (
                <span key={lang.id}>
                  <span className="font-bold">{lang.language}:</span>{" "}
                  <span className="italic">{lang.proficiency}</span>
                  {index < languages.length - 1 && (
                    <span className="ml-1">;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );

  return (
    <div className="relative flex flex-col gap-8 pb-20 items-center bg-gray-200/50 py-10 h-full">
      {/* BARRA DE ACCIONES SUPERIOR */}
      <div className="sticky top-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-200 animate-slide-in">
        <button
          onClick={toggleLanguage}
          className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all bg-black text-white hover:bg-gray-800 active:scale-95"
        >
          Traducción h2: {previewLang === "en" ? "English" : "Español"}
        </button>

        {/* BOTÓN DE DESCARGA PDF INTEGRADO */}
        <PDFDownloadLink
          document={<CVDocument data={data} t={t} />}
          fileName={`CV_${personalInformation.fullName?.replace(/\s+/g, "_") || "WASAKABE"}.pdf`}
        >
          {({ loading }) => (
            <button
              disabled={loading}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all flex items-center gap-2 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
              }`}
            >
              {loading ? "Generando..." : "Descargar PDF"}
              {!loading && (
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              )}
            </button>
          )}
        </PDFDownloadLink>
      </div>

      <div className="bg-white shadow-2xl w-[210mm] min-h-[297mm] p-24 relative overflow-hidden transition-all">
        {renderContent()}
      </div>
    </div>
  );
};
