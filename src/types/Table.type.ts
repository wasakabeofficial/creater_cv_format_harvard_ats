export interface TableColumn {
  header: string;
  key: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
  emptyMessage?: string;
}
