import { useState } from "react";
import { DataGuard } from "./components/ui";
import { EditorLayout, PreviewLayout } from "./features";
import { useCurriculumVitae } from "./hooks/useCurriculumVitae";
import Footer from "./components/layout/Footer/Footer";

export default function App() {
  const cvMethods = useCurriculumVitae();
  const { cvData } = cvMethods;
  const [selectedLanguage] = useState<"en" | "es">("en");
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <DataGuard isDirty={cvMethods.isDirty} />
      <main className="flex flex-1 overflow-hidden">
        <div className="w-full md:w-1/2 h-full overflow-y-auto border-r border-gray-200 bg-gray-50/50">
          <EditorLayout methods={cvMethods} />
        </div>
        <div className="hidden md:flex md:w-1/2 h-full overflow-y-auto bg-gray-200/50 justify-center p-8">
          <div className="w-full max-w-[210mm] shadow-2xl h-fit">
            <PreviewLayout data={cvData} language={selectedLanguage ?? "en"} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
