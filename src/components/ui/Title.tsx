import "../../assets/styles/Title.css";

interface TitleProps {
  label: string;
  level?: "h1" | "h2" | "h3";
  hasBorder?: boolean;
  className?: string;
}

const Title = ({
  label,
  level = "h1",
  hasBorder = false,
  className = "",
}: TitleProps) => {
  const Tag = level;

  return (
    <Tag
      className={`title-${level} ${hasBorder ? "title-border" : ""} ${className}`}
    >
      {label}
    </Tag>
  );
};

export default Title;
