import { ReactElement } from "react";
import styled from "styled-components";
import Skeleton from "../skeleton/Skeleton";
interface ColumnProps {
  header: string;
  accessor: string;
  cell?: (columnValue: string | number) => ReactElement;
  styles?: Record<string, string>;
}

interface RowContentProps {
  isLoading: boolean;
  column: ColumnProps;
  row: Record<string, any>;
}

interface TableProps {
  columns: ColumnProps[];
  rows: Record<string, any>[];
  isLoading?: boolean;
  testId?: string;
}

interface TableHeaderProps {
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

const RowContent: React.FC<RowContentProps> = ({
  isLoading = false,
  column,
  row,
}) => {
  if (isLoading) return <Skeleton />;

  return (
    <>
      {column.cell
        ? column.cell(row[column?.accessor])
        : row[column?.accessor] || "-"}
    </>
  );
};

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  testId,
  isLoading = false,
}) => {
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
              <RowContent isLoading={isLoading} row={row} column={column} />
              {/* {isLoading ? (
                <Skeleton />
              ) : column.cell ? (
                column.cell(row[column?.accessor])
              ) : (
                row[column?.accessor] || "-"
              )} */}
            </Td>
          ))}
        </Tr>
      ))}
    </TableWrapper>
  );
};

export default Table;
