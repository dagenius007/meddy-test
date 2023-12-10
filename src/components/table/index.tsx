import { IColumn, ITable } from "./table.types";

const Table: React.FC<ITable> = ({ columns, rows }) => {
  const TableHeaders = () => {};
  return (
    <table>
      <tr>
        {columns.map((column: IColumn, i: number) => (
          <th key={i}>{column.header}</th>
        ))}
      </tr>

      {rows.map((row: Record<string, string | number>, i: number) => (
        <tr key={i}>
          {columns.map((column: IColumn, i: number) => (
            <td key={i}> {row[columns[i]?.accessor] || ""}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
