import Input from "../input/Input";
import { Flex } from "../global-styles/flex";
import Text from "../typography";
import { TableHeaderText } from "./table.style";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface TableHeaderProps {
  title: string;
  searchValue: string;
  onHandleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  searchValue,
  onHandleSearchInput,
}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <TableHeaderText>
        <Text text={title} size="lg" weight="medium" />
      </TableHeaderText>
      <Input
        handleChange={onHandleSearchInput}
        name="search"
        value={searchValue}
        customStyles={{
          width: "30%",
        }}
        icon={<FiSearch />}
      />
    </Flex>
  );
};

export default TableHeader;
