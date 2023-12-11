import styled from "styled-components";
import { useMakePageNumbers } from "./hooks";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Text from "../text/Text";
import Select from "../select/Select";
import { Flex } from "../../global-styles/flex";
import { media } from "../../global-styles/queries";

interface PaginationSizeOptionProps {
  value: number;
  label: string;
}
interface PaginationProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
  onGoToPage: (pageNumber: number) => void;
  onSelectPage: (pageSize: number) => void;
  totalRecords: number;
  currentPage: number;
  pageSize: number;
  pageSizeOptions?: PaginationSizeOptionProps[];
  testId?: string;
}

const PaginationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationPageSizeSelector = styled.div`
  margin-left: 20px;
  ${media.sm`
      margin-left: 0px;
    `};
`;

const PaginationPageControls = styled.div`
  display: flex;
`;

const PaginationLinkButton = styled.button`
  appearance: none;
  outline: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 4px;
  &.active {
    background-color: #f2f2f2;
    color: #6e6adf;
  }
  &:disabled {
    color: ${({ theme }) => theme.disabledTextColor};
    background: ${({ theme }) => theme.disabledColor};
    cursor: not-allowed;
  }
`;

const PaginationControlButton = styled.button`
  appearance: none;
  outline: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  &:disabled {
    color: ${({ theme }) => theme.disabledTextColor};
    background: ${({ theme }) => theme.disabledColor};
    cursor: not-allowed;
  }
`;

const _pageSizeOptions: PaginationSizeOptionProps[] = [
  { value: 10, label: "Show 10" },
  { value: 20, label: "Show 20" },
];

const Pagination: React.FC<PaginationProps> = ({
  totalRecords,
  currentPage,
  pageSize,
  onGoToPage,
  onNextPage,
  onPreviousPage,
  onSelectPage,
  pageSizeOptions = _pageSizeOptions,
  testId,
}) => {
  const pageCount = Math.round(totalRecords / pageSize);
  const pageNumbers = useMakePageNumbers(currentPage, pageCount);

  const renderPageLinks = () => {
    return pageNumbers.map((pageNum, i) => {
      return (
        <PaginationLinkButton
          onClick={() => onGoToPage(pageNum as number)}
          key={`page-link-${i}`}
          className={`${currentPage === pageNum && "active"}`}
          disabled={currentPage === pageNum || typeof pageNum == "string"}
          data-testid={`${testId}-link-buttons`}
        >
          {pageNum}
        </PaginationLinkButton>
      );
    });
  };

  const initialLimit = currentPage === 1 ? 1 : (currentPage - 1) * pageSize + 1;
  const finalLimit =
    currentPage * pageSize >= totalRecords
      ? totalRecords
      : currentPage * pageSize;

  return (
    <PaginationWrapper>
      <Flex alignItems="center">
        <Text
          text={`${initialLimit} - ${finalLimit} of ${totalRecords || 0}`}
          size="base"
          weight="normal"
        />
        <PaginationPageSizeSelector>
          <Select
            name="pageSize"
            options={pageSizeOptions}
            handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onSelectPage(+e.target.value)
            }
            value={pageSize}
          />
        </PaginationPageSizeSelector>
      </Flex>
      <PaginationPageControls>
        <PaginationControlButton
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          data-testid={`${testId}-back-button`}
        >
          <FaAngleLeft color="#999dff" size={20} />
        </PaginationControlButton>
        {renderPageLinks()}
        <PaginationControlButton
          onClick={onNextPage}
          disabled={currentPage === totalRecords}
          data-testid={`${testId}-next-button`}
        >
          <FaAngleRight color="#999dff" size={20} />
        </PaginationControlButton>
      </PaginationPageControls>
    </PaginationWrapper>
  );
};

export default Pagination;
