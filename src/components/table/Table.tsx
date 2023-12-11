import { ReactElement } from "react";
import styled from "styled-components";

export interface ColumnProps {
  header: string;
  accessor: string;
  cell?: (columnValue: string | number) => ReactElement;
  styles?: Record<string, string>;
}

export interface TableProps {
  columns: ColumnProps[];
  rows: Record<string, any>[];
}

export interface TableHeaderProps {
  title: string;
}

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-size: 13px;
  color: #6f767e;
  font-weight: 500;
  padding: 15px;
`;
const Td = styled.td`
  color: #1a1d1f;
  font-size: 14px;
  padding: 15px;
  font-weight: 500;
`;

const Tr = styled.tr`
  cursor: pointer;
  &:nth-child(odd) {
    background: rgba(244, 244, 244, 0.5);
  }
`;

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <TableWrapper>
      <thead>
        {columns.map((column: ColumnProps, i: number) => (
          <Th key={i} style={column.styles}>
            {column.header}
          </Th>
        ))}
      </thead>

      {rows.map((row: Record<string, string | number>, i: number) => (
        <Tr key={i}>
          {columns.map((column: ColumnProps, i: number) => (
            <Td key={i} style={column.styles}>
              {column.cell
                ? column.cell(row[columns[i]?.accessor])
                : row[columns[i]?.accessor] || "-"}
              {}
            </Td>
          ))}
        </Tr>
      ))}
    </TableWrapper>
  );
};

export default Table;
