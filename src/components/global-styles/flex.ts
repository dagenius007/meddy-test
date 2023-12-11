import styled from "styled-components";
import { FlexProps } from "../../types/styles.types";

const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export { Flex };
