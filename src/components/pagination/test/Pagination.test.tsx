import { render } from "@testing-library/react";

import Pagination from "../Pagination";

const _pageSizeOptions = [
  { value: 10, label: "Show 10" },
  { value: 20, label: "Show 20" },
];

describe("Pagination Component", () => {
  test("it expects the accurrate page links  ", async () => {
    const ui = render(
      <Pagination
        totalRecords={50}
        currentPage={1}
        pageSize={10}
        onGoToPage={jest.fn()}
        onNextPage={jest.fn()}
        onPreviousPage={jest.fn()}
        onSelectPage={jest.fn()}
        pageSizeOptions={_pageSizeOptions}
        testId="pagination-test"
      />
    );

    const elements = ui.getAllByTestId("pagination-test-link-buttons");

    expect(elements.length).toBe(5);
  });

  test("it expects the current page button to the disabled  ", async () => {
    const { container } = render(
      <Pagination
        totalRecords={50}
        currentPage={1}
        pageSize={10}
        onGoToPage={jest.fn()}
        onNextPage={jest.fn()}
        onPreviousPage={jest.fn()}
        onSelectPage={jest.fn()}
        pageSizeOptions={_pageSizeOptions}
        testId="pagination-test"
      />
    );

    const currentPage = container.getElementsByClassName("active");

    expect(currentPage[0]).toBeDisabled();

    expect(currentPage[0].textContent).toBe("1");
  });
});
