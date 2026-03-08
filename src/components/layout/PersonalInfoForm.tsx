import type { PersonalInformation } from "../../types/cv/Personal.Information.type";
import { Input } from "../ui";
import "../../assets/styles/PersonalInfoForm.css";
import { PERSONAL_INFORMATION_TRANSLATIONS } from "../../constants/ui-translations";

interface PersonalInformationFormProperties {
  data: PersonalInformation;
  onChange: (info: Partial<PersonalInformation>) => void;
  language: "en" | "es";
}

export const PersonalInfoForm = ({
  data,
  onChange,
  language,
}: PersonalInformationFormProperties) => {
  const translations = PERSONAL_INFORMATION_TRANSLATIONS[language];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  return (
    <div className="personal-info-grid">
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
  );
};
