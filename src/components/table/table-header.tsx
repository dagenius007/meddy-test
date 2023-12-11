import Input from "../input/Input";
import { Flex } from "../global-styles/flex";
import Text from "../typography";
import { TableHeaderText } from "./table.style";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface TableHeaderProps {
  title: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  const [search, setSearch] = useState("");
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <TableHeaderText>
        <Text text={title} size="lg" weight="medium" />
      </TableHeaderText>
      <Input
        handleChange={(e) => {
          setSearch(e.target.value);
        }}
        name="search"
        value={search}
        customStyles={{
          width: "30%",
        }}
        icon={<FiSearch />}
      />
    </Flex>
  );
};

export default TableHeader;
