import styled from "styled-components";
import Text from "../typography";

const statusMapping: Record<string, string> = {
  Completed: "#60CA57",
  Pending: "#6f767e66",
  Failed: "#ec3954",
};

interface PillProps {
  status: string;
}

const PillWrapper = styled.div<{ status: string }>`
  width: fit-content;
  height: 28px;
  background-color: ${({ status }) => statusMapping[status]};
  padding: 0 15px;
  border-radius: 6px;
`;

const Pill: React.FC<PillProps> = ({ status }) => {
  return (
    <PillWrapper status={status}>
      <Text text={status} weight="medium" />
    </PillWrapper>
  );
};

export default Pill;
