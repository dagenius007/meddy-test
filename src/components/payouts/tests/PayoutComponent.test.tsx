import axios from "axios";
import { payoutsMock } from "../../../mocks/payoutMocks";
import { render } from "@testing-library/react";
import PayoutsComponent from "../PayoutsComponent";

jest.mock("axios");

const axiosMock = axios as any;
describe("Payout Component", () => {
  beforeEach(() => {
    axiosMock.mockImplementation((config: any) => {
      console.log({ config });
      switch (true) {
        case /payouts/.test(config.url):
          console.log({ v: "hee" });
          return Promise.resolve({
            data: payoutsMock,
          });
        default:
          return Promise.resolve({
            data: [],
            metadata: {
              page: 1,
              limit: 10,
              totalCount: 0,
            },
          });
      }
    });
    console.log("kii", axiosMock.mockImplementation);
  });

  test("it should load payment link table after fetch", async () => {
    const { container } = render(<PayoutsComponent />);

    const elements = container.querySelectorAll("tr");

    expect(elements.length).toBe(11);
  });

  // test("it should load payment link table after fetch", async () => {
  //   const { container } = render(<PayoutsComponent />);

  //   const elements = container.querySelectorAll("tr");

  //   expect(elements.length).toBe(11);
  // });
});
