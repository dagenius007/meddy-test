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

const TableContainer = styled.div`
  overflow-x: scroll;
`;

const TableWrapper = styled.table`
  width: 100%;
  white-space: nowrap;
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
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            {columns.map((column: ColumnProps, i: number) => (
              <Th key={i} style={column.styles}>
                {column.header}
              </Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row: Record<string, string | number>, i: number) => (
            <Tr key={i} data-testid={`${testId}-row`}>
              {columns.map((column: ColumnProps, i: number) => (
                <Td key={i} style={column.styles}>
                  <RowContent isLoading={isLoading} row={row} column={column} />
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
