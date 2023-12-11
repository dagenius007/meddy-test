import { useState } from "react";
import Pagination from "../pagination";
import Table from "../table/Table";
import { useGetPayouts } from "./hook";
import { IPayout } from "./types";
import TableHeader from "../table/table-header";
import Pill from "../pills/Pill";

const Payouts: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, loading } = useGetPayouts(page, limit);

  const columns = [
    {
      header: "Username",
      accessor: "username",
      styles: {
        width: "30%",
      },
    },
    {
      header: "Value",
      accessor: "value",
      styles: {
        width: "20%",
      },
    },
    {
      header: "Status",
      accessor: "status",
      styles: {
        width: "20%",
      },
      cell: (value: string | number) => <Pill status={value as string} />,
    },
    {
      header: "Date & Time",
      accessor: "dateAndTime",
      styles: {
        width: "30%",
      },
    },
  ];

  return (
    <div className="">
      <TableHeader title="Payout History" />
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Table columns={columns} rows={(data?.data || []) as IPayout[]} />
          <Pagination
            onNextPage={() => {
              setPage(page + 1);
            }}
            onPreviousPage={() => {
              setPage(page - 1);
            }}
            onGoToPage={(page) => {
              setPage(page);
            }}
            onSelectPage={(pageSize: number) => {
              console.log({ pageSize });
              setLimit(pageSize);
            }}
            totalRecords={data?.metadata.totalCount as number}
            currentPage={page}
            pageSize={limit}
          />
        </>
      )}
    </div>
  );
};

export default Payouts;
