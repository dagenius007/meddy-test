import Table from "../table";
import { useGetPayouts } from "./hook";
import { IPayout } from "./types";

const Payouts: React.FC = () => {
  const { data } = useGetPayouts();

  const columns = [
    { header: "Username", accessor: "username" },
    { header: "Value", accessor: "value" },
    { header: "Status", accessor: "status" },
    { header: "Date & Time", accessor: "dateAndTime" },
  ];

  return (
    <div className="App">
      <div className="flex">
        <p>Payout History</p>
        <p>Search</p>
      </div>
      <Table columns={columns} rows={data} />
    </div>
  );
};

export default Payouts;
