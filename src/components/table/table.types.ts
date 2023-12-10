export interface IColumn {
  header: string;
  accessor: string;
}

export interface ITable {
  columns: IColumn[];
  rows: Record<string, any>[];
}
