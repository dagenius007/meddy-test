import styled from "styled-components";
import { FlexProps } from "../types/styles.types";
import { media } from "./queries";

const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  ${media.sm`
    display: block;
  `}
`;

export { Flex };
