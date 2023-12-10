import React from "react";
import styled from "styled-components";
import { IPagination } from "./types";
import { useMakePageNumbers } from "./hooks";
import { PaginationButton } from "./styles";

const Paginate = styled.div`
  justify-content: center;
  margin-top: 30px;
  display: flex;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 32px;
      height: 32px;
      margin-right: 8px;
      font-family: "Inter", sans-serif;
      line-height: 30px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      outline: 0;
      cursor: pointer;

      &.active {
        border-color: #7000ff;
        outline: none !important;
        a {
          color: #7000ff;
        }
      }

      a {
        display: block;
        // padding: 0 6px;
        color: rgba(0, 0, 0, 0.65);
        &:focus {
          outline: none !important;
        }
      }
    }
  }
`;

const Pagination: React.FC<IPagination> = ({
  totalRecords,
  currentPage,
  pageSize,
  onGoToPage,
  onNextPage,
  onPreviousPage,
}) => {
  const pageCount = Math.round(totalRecords / pageSize);
  const pageNumbers = useMakePageNumbers(currentPage, pageCount);
  //   const returnPageCount = (totalNumberOfRecords, totalPages) => {
  //     if (totalNumberOfRecords <= totalPages) return 1;
  //     return totalNumberOfRecords % totalPages > 0
  //       ? Math.floor(totalNumberOfRecords / totalPages) + 1
  //       : totalNumberOfRecords / totalPages;
  //   };

  const renderPageLinks = () => {
    return pageNumbers.map((pageNum, i) => {
      return (
        <PaginationButton
          onClick={() => onGoToPage(pageNum)}
          key={`page-link-${i}`}
          disabled={pageNum === currentPage || typeof pageNum == "string"}
        >
          {pageNum}
        </PaginationButton>
      );
    });
  };

  return (
    <Paginate>
      <p onClick={onPreviousPage}>{"<"}</p>
      {renderPageLinks()}
      <p onClick={onNextPage}>{">"}</p>
      {/* <ReactPaginate
        previousLabel="←"
        nextLabel="→"
        breakClassName="break-me"
        pageCount={returnPageCount(count, pageSize)}
        onPageChange={onChange}
        activeClassName="active"
        pageRangeDisplayed={3}
      /> */}
    </Paginate>
  );
};

export default Pagination;
