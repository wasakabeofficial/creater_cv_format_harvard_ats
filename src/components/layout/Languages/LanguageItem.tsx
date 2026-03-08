import { Button, Input } from "../../ui";
import Label from "../../ui/Label";
import type { LanguageEntry } from "../../../types/cv/Language.type";

interface LanguageItemProps {
  entry: LanguageEntry;
  index: number;
  translations: any;
  onChange: (id: string, updatedEntry: Partial<LanguageEntry>) => void;
  onRemove: (id: string) => void;
}

export const LanguageItem = ({
  entry,
  index,
  translations,
  onChange,
  onRemove,
}: LanguageItemProps) => {
  const selectId = `lang-proficiency-${entry.id}`;

  return (
    <div className="group flex flex-col md:flex-row items-end gap-4 bg-white border border-gray-100 p-5 rounded-xl hover:border-gray-300 transition-all shadow-sm animate-in fade-in slide-in-from-left-2">
      <div className="flex-1 w-full">
        <Input
          id={`lang-name-${index}`}
          label={translations.languageLabel}
          name="language"
          value={entry.language}
          onChange={(e) => onChange(entry.id, { language: e.target.value })}
          placeholder="e.g. English, Russian"
          required
        />
      </div>

      <div className="w-full md:w-64 flex flex-col gap-1.5">
        <Label
          htmlFor={selectId}
          text={translations.levelLabel}
          required={true}
        />
        <div className="relative">
          <select
            id={selectId}
            value={entry.proficiency}
            onChange={(e) =>
              onChange(entry.id, {
                proficiency: e.target.value as LanguageEntry["proficiency"],
              })
            }
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-sans focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all appearance-none cursor-pointer pr-10"
          >
            <option value="Native">{translations.levels.Native}</option>
            <option value="Fluent">{translations.levels.Fluent}</option>
            <option value="Professional Working">
              {translations.levels.Professional}
            </option>
            <option value="Limited Working">
              {translations.levels.Limited}
            </option>
            <option value="Receptive">{translations.levels.Receptive}</option>
            <option value="Oral">{translations.levels.Oral}</option>
            <option value="Reading">{translations.levels.Reading}</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-1">
        <Button
          label=""
          onClick={() => onRemove(entry.id)}
          variant="outline"
          className="w-10 h-10 flex items-center justify-center p-0 text-gray-400 hover:text-red-500 border-none bg-transparent hover:bg-red-50 rounded-full transition-colors"
        >
          <span className="text-lg">✕</span>
        </Button>
      </div>
    </div>
  );
};
