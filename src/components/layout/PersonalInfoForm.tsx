import type { PersonalInformation } from "../../types/cv/Personal.Information.type";
import { Input } from "../ui";
import "../../assets/styles/PersonalInfoForm.css";

interface PersonalInformationFormProperties {
  data: PersonalInformation;
  onChange: (info: Partial<PersonalInformation>) => void;
}

export const PersonalInfoForm = ({
  data,
  onChange,
}: PersonalInformationFormProperties) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  return (
    <div className="personal-info-grid">
      <Input
        id="personal-information-full-name"
        label="Full Name"
        name="fullName"
        value={data.fullName}
        onChange={handleInputChange}
        placeholder="e.g. John Doe"
        validationType="only-text"
        required
      />

      <Input
        id="personal-information-email"
        label="Professional Email"
        name="email"
        type="email"
        value={data.email}
        onChange={handleInputChange}
        placeholder="john.doe@university.edu"
        validationType="alphanumeric"
        required
      />

      <Input
        id="personal-information-telephone"
        label="Phone Number"
        name="telephone"
        type="telephone"
        value={data.telephone ?? ""}
        onChange={handleInputChange}
        placeholder="+1 (555) 000-0000"
        validationType="only-numbers"
      />

      <Input
        id="personal-information-location"
        label="Location"
        name="location"
        value={data.location ?? ""}
        onChange={handleInputChange}
        placeholder="City, State"
        validationType="alphanumeric"
      />
    </div>
  );
};
