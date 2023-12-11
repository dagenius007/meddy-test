import { render, screen, waitFor } from "@testing-library/react";
import request from "../../../internals/api";
import { payoutsMock } from "../../../mocks/payoutMocks";
import PayoutsComponent from "../PayoutsComponent";

jest.mock("request", () => ({
  get: jest.fn(),
}));

describe("Payout Component", () => {
  beforeEach(() => {
    jest
      .spyOn(request, "get")
      .mockImplementation(
        jest.fn(() => Promise.resolve({ data: payoutsMock }))
      );
  });

  test("it should payout history as table header ", async () => {
    render(<PayoutsComponent />);

    await waitFor(() => {
      expect(screen.getByTestId("payout-table-header-text")).toHaveTextContent(
        "Payout History"
      );
    });
  });

  test("it should load payout table after ", async () => {
    let elements = [];
    const ui = render(<PayoutsComponent />);

    await waitFor(() => {
      elements = ui.getAllByTestId("payout-collection-row");
      expect(elements.length).toBe(11);
    });
  });
});
