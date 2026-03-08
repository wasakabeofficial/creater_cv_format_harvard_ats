import type { TableProps } from "../../types/ui/Table.type";
import Button from "./Button";
import "../../assets/styles/Table.css";

const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  emptyMessage = "No hay datos registrados aún.",
}: TableProps) => {
  if (data.length === 0) {
    return <p className="table-empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            {(onEdit || onDelete) && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={`${index}-${column.key}`}>{item[column.key]}</td>
              ))}
              {(onEdit || onDelete) && (
                <td className="table-actions">
                  {onEdit && (
                    <Button
                      label="Editar"
                      variant="secondary"
                      onClick={() => onEdit(index)}
                    />
                  )}
                  {onDelete && (
                    <Button
                      label="Eliminar"
                      variant="danger"
                      onClick={() => onDelete(index)}
                    />
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
