import { Button } from "../../ui";
import { LANGUAGE_SECTION_TRANSLATIONS } from "../../../constants/ui-translations";
import { LanguageItem } from "./LanguageItem";
import type { LanguageEntry } from "../../../types/cv/Language.type";

interface LanguageFormProps {
  languages: LanguageEntry[];
  onLanguageChange: (id: string, updatedEntry: Partial<LanguageEntry>) => void;
  onAddLanguage: () => void;
  onRemoveLanguage: (id: string) => void;
  onNextStepAction: () => void;
  language: "en" | "es";
}

export const LanguageForm = ({
  languages,
  onLanguageChange,
  onAddLanguage,
  onRemoveLanguage,
  onNextStepAction,
  language,
}: LanguageFormProps) => {
  const t = LANGUAGE_SECTION_TRANSLATIONS[language];
  const isLanguagesValid = languages.every(
    (lang) => lang.language.trim() !== "",
  );

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-gray-500 italic px-1 font-sans">
        {t.helperText}
      </p>

      <div className="space-y-4">
        {languages.map((entry, index) => (
          <LanguageItem
            key={entry.id}
            entry={entry}
            index={index}
            translations={t}
            onChange={onLanguageChange}
            onRemove={onRemoveLanguage}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-8">
        <Button
          label={t.addLanguageLabel}
          onClick={onAddLanguage}
          variant="secondary"
          className="w-full border-dashed border-2 py-4 hover:bg-gray-50 hover:border-gray-400 transition-all text-gray-600"
        />

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <Button
            label={t.finishLabel}
            onClick={onNextStepAction}
            disabled={!isLanguagesValid}
            variant="primary"
            className={`
              px-10 py-3 shadow-lg transition-all duration-300
              ${
                !isLanguagesValid
                  ? "grayscale opacity-50 cursor-not-allowed"
                  : "shadow-black/10 hover:shadow-black/20 hover:translate-x-1"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
};
