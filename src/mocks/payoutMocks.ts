import { IPayoutData } from "../components/payouts/types/payout-component";

const payoutsMock: IPayoutData = {
  metadata: {
    totalCount: 11,
    limit: 10,
    page: 1,
  },
  data: [
    {
      dateAndTime: new Date("2023-09-14T10:00:00.000Z"),
      status: "Pending",
      value: "$7208.09",
      username: "Tristin68",
    },
    {
      dateAndTime: new Date("2023-09-14T11:00:00.000Z"),
      status: "Completed",
      value: "$8208.86",
      username: "Pierre49",
    },
    {
      dateAndTime: new Date("2023-09-14T12:00:00.000Z"),
      status: "Pending",
      value: "$1332.78",
      username: "Fabiola_Wilkinson43",
    },
    {
      dateAndTime: new Date("2023-09-14T13:00:00.000Z"),
      status: "Completed",
      value: "$4278.06",
      username: "Gaetano47",
    },
    {
      dateAndTime: new Date("2023-09-14T13:00:00.000Z"),
      status: "Pending",
      value: "$100.24",
      username: "Tyrell.Klocko86",
    },
    {
      dateAndTime: new Date("2023-09-14T15:00:00.000Z"),
      status: "Completed",
      value: "$6820.13",
      username: "Warren_DuBuque-Doyle",
    },
    {
      dateAndTime: new Date("2023-09-14T16:00:00.000Z"),
      status: "Pending",
      value: "$7011.08",
      username: "Adolfo55",
    },
    {
      dateAndTime: new Date("2023-09-14T17:00:00.000Z"),
      status: "Completed",
      value: "$7587.24",
      username: "Enid_Schroeder",
    },
    {
      dateAndTime: new Date("2023-09-14T18:00:00.000Z"),
      status: "Pending",
      value: "$9672.19",
      username: "Aniyah.Beier53",
    },
    {
      dateAndTime: new Date("2023-09-14T19:00:00.000Z"),
      status: "Completed",
      value: "$929.29",
      username: "Bonnie_Donnelly",
    },
    {
      dateAndTime: new Date("2023-09-14T10:00:00.000Z"),
      status: "Pending",
      value: "$5208.09",
      username: "Tristin698",
    },
  ],
};

export { payoutsMock };
