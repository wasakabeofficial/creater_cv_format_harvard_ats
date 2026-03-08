export interface InputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "telephone" | "url";
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  id: string;
  validationType?: "only-text" | "only-numbers" | "alphanumeric";
}
