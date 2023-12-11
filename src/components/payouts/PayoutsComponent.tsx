import { useState } from "react";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";
import { useGetPayouts } from "./hooks";
import { IPayout } from "./types/payout-component";
import TableHeader from "../table/TableHeader";
import Pill from "../pills/Pill";
import { useDebounce } from "../../hooks/useDebounce";
import dayjs from "dayjs";
import Text from "../text/Text";
import { generateSkeletonRows } from "../../utils/loader";

const PayoutsComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const debouncValue = useDebounce(searchValue, 500);

  const { data, loading } = useGetPayouts(page, limit, debouncValue);

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
      cell: (value: string | number) => (
        <Text
          text={dayjs(value).format("ddd, MMM D, YYYY h:mm A")}
          weight="medium"
        />
      ),
    },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <TableHeader
        title="Payout History"
        searchValue={searchValue}
        onHandleSearchInput={onChange}
      />
      {loading ? (
        <Table
          columns={columns}
          rows={generateSkeletonRows()}
          isLoading={true}
        />
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
            totalRecords={(data?.metadata?.totalCount || 0) as number}
            currentPage={page}
            pageSize={limit}
          />
        </>
      )}
    </>
  );
};

export default PayoutsComponent;
