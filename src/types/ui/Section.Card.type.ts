export interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onAddElement?: () => void;
  addLabel?: string;
  isCollapsible?: boolean;
}
