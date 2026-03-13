import type { TitleProps } from "../../types/ui/Title.type";

const Title = ({
  label,
  level = "h1",
  hasBorder = false,
  className = "",
}: TitleProps) => {
  const Tag = level;
  const levelStyles = {
    h1: "text-2xl font-bold text-gray-900 font-serif tracking-tight",
    h2: "text-lg font-semibold text-gray-800 font-serif uppercase tracking-wide",
    h3: "text-md font-medium text-gray-700 font-sans",
    h4: "text-sm font-bold text-gray-600 font-sans italic",
  };

  return (
    <Tag
      className={`
        ${levelStyles[level as keyof typeof levelStyles] || levelStyles.h1}
        ${hasBorder ? "border-b-2 border-black pb-1 mb-4" : ""}
        ${className}
      `}
    >
      {label}
    </Tag>
  );
};

export default Title;
