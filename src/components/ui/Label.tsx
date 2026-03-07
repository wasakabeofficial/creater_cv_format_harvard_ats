import "../../assets/styles/Label.css";

interface LabelProps {
  text: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
}

const Label = ({
  text,
  htmlFor,
  required = false,
  className = "",
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`custom-label ${className}`}>
      {text}
      {required && <span className="label-required">*</span>}
    </label>
  );
};

export default Label;
