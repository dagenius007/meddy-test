import styled from "styled-components";
import { TextStyleProps, textSizes, textWeights } from "./types";

const TextWrapper = styled.p<TextStyleProps>`
  font-size: ${({ size }) => textSizes[size].fontSize};
  line-height: ${({ size }) => textSizes[size].lineHeight};
  font-weight: ${({ weight }) => textWeights[weight]};
`;

export { TextWrapper };
