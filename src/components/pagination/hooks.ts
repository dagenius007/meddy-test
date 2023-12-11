const useMakePageNumbers = (
  currentPage: number,
  totalPageCount: number,
  visiblePages = 7,
  breakCount = 5
): Array<string | number> => {
  let pageNumbers: Array<string | number> = [];

  if (totalPageCount <= visiblePages) {
    pageNumbers = new Array(totalPageCount)
      .fill(" ")
      .map((_, i: number) => i + 1);
  }

  if (totalPageCount > visiblePages) {
    if (currentPage < breakCount) {
      let i = 1;
      while (i <= breakCount) {
        pageNumbers.push(i);
        i++;
      }
      pageNumbers.push("...", totalPageCount);
    }
    if (
      currentPage >= breakCount &&
      currentPage <= totalPageCount - breakCount
    ) {
      pageNumbers.push(
        1,
        2,
        "...",
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
        totalPageCount
      );
    }

    if (currentPage > totalPageCount - breakCount) {
      pageNumbers.push(1, 2, "...");
      let i = currentPage - breakCount;
      while (i <= currentPage) {
        pageNumbers.push(i);
        i++;
      }
    }
  }

  return pageNumbers;
};

export { useMakePageNumbers };
