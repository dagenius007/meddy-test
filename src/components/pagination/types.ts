export interface IPagination {
  onNextPage: () => void;
  onPreviousPage: () => void;
  onGoToPage: (pageNumber: number) => void;
  totalRecords: number;
  currentPage: number;
  pageSize: number;
}
