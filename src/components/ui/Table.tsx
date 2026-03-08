import type { TableProps } from "../../types/ui/Table.type";
import Button from "./Button";

const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  emptyMessage = "No hay datos registrados aún.",
}: TableProps) => {
  if (data.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500 italic font-sans border border-dashed border-gray-300 rounded-lg">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="w-full text-left border-collapse font-sans text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wider text-xs"
              >
                {column.header}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wider text-xs text-right">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              {columns.map((column) => (
                <td
                  key={`${index}-${column.key}`}
                  className="px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  {item[column.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    {onEdit && (
                      <Button
                        label="Editar"
                        variant="secondary"
                        onClick={() => onEdit(index)}
                        className="py-1 px-3 text-xs"
                      />
                    )}
                    {onDelete && (
                      <Button
                        label="Eliminar"
                        variant="danger"
                        onClick={() => onDelete(index)}
                        className="py-1 px-3 text-xs"
                      />
                    )}
                  </div>
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
