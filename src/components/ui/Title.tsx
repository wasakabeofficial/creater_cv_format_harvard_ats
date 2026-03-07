import "../../assets/styles/Title.css";
import type { TitleProps } from "../../types/title.type";

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
