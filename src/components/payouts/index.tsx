import { useCallback, useState } from "react";
import Pagination from "../pagination";
import Table from "../table";
import { useGetPayouts } from "./hook";
import { IPayout } from "./types";

const Payouts: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data, loading } = useGetPayouts(page, limit);

  console.log({ loading, data });

  const columns = [
    { header: "Username", accessor: "username" },
    { header: "Value", accessor: "value" },
    { header: "Status", accessor: "status" },
    { header: "Date & Time", accessor: "dateAndTime" },
  ];

  const onRefetch = (currentPage: number) => {
    console.log({ currentPage });
  };

  return (
    <div className="App">
      <div className="flex">
        <p>Payout History</p>
        <p>Search</p>
      </div>
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
