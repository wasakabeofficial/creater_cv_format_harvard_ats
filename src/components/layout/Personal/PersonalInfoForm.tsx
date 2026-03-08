import { PERSONAL_INFORMATION_TRANSLATIONS } from "../../../constants/ui-translations";
import type { PersonalInformation } from "../../../types/cv/Personal.Information.type";
import { Button, Input } from "../../ui";

interface PersonalInformationFormProperties {
  data: PersonalInformation;
  onChange: (info: Partial<PersonalInformation>) => void;
  language: "en" | "es";
  onNextStepAction: () => void;
}

export const PersonalInfoForm = ({
  data,
  onChange,
  language,
  onNextStepAction,
}: PersonalInformationFormProperties) => {
  const translations = PERSONAL_INFORMATION_TRANSLATIONS[language];
  const isInformationComplete =
    data.fullName.trim() !== "" && data.email.trim() !== "";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="personal-information-full-name"
          label={translations.fullNameLabel}
          name="fullName"
          value={data.fullName}
          onChange={handleInputChange}
          placeholder={translations.fullNamePlaceholder}
          validationType="only-text"
          required
        />

        <Input
          id="personal-information-email"
          label={translations.emailLabel}
          name="email"
          type="email"
          value={data.email}
          onChange={handleInputChange}
          placeholder={translations.emailPlaceholder}
          validationType="alphanumeric"
          required
        />

        <Input
          id="personal-information-telephone"
          label={translations.telephoneLabel}
          name="telephone"
          type="telephone"
          value={data.telephone ?? ""}
          onChange={handleInputChange}
          placeholder={translations.telephonePlaceholder}
          validationType="only-numbers"
        />

        <Input
          id="personal-information-location"
          label={translations.locationLabel}
          name="location"
          value={data.location ?? ""}
          onChange={handleInputChange}
          placeholder={translations.locationPlaceholder}
          validationType="alphanumeric"
        />
      </div>

      <div className="flex justify-end pt-6 border-t border-gray-100">
        <Button
          label={language === "es" ? "Siguiente: Educación" : "Next: Education"}
          onClick={onNextStepAction}
          disabled={!isInformationComplete}
          variant="primary"
          className={`
            min-w-50 transition-all duration-300
            ${!isInformationComplete ? "grayscale opacity-50" : "hover:translate-x-1"}
          `}
        />
      </div>
    </div>
  );
};
