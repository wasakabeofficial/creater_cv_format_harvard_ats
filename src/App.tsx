import { DataGuard } from "./components/ui";
import { EditorLayout } from "./features";
import { useCurriculumVitae } from "./hooks/useCurriculumVitae";

export default function App() {
  const cvMethods = useCurriculumVitae();

  return (
    <>
      <DataGuard isDirty={cvMethods.isDirty} />
      <EditorLayout methods={cvMethods} />
    </>
  );
}
