import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { Flex } from "../../global-styles/flex";
import Input from "../input/Input";
import Text from "../text/Text";
import { media } from "../../global-styles/queries";

const TableHeaderInput = styled.div`
  width: 30%;
  ${media.sm`
    width: 100%;
    margin-bottom: 25px;
  `}
`;
const TableHeaderText = styled.div`
  position: relative;
  &::before {
    content: " ";
    height: 32px;
    width: 16px;
    background-color: #999dff;
    margin-right: 20px;
    margin-top: 20px;
    position: absolute;
    display: inline-block;
    border-radius: 4px;
    ${media.sm`
      margin-top: 0px;
    `}
  }
  p {
    margin-left: 28px;
  }
`;
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
        <Text
          text={title}
          size="lg"
          weight="medium"
          testId="payout-table-header-text"
        />
      </TableHeaderText>
      <TableHeaderInput>
        <Input
          handleChange={onHandleSearchInput}
          name="search"
          value={searchValue}
          customClass="input-search"
          icon={<FiSearch />}
        />
      </TableHeaderInput>
    </Flex>
  );
};

export default TableHeader;
