import styled from "styled-components";

export interface TextProps {
  text: string;
  size?: "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "bold";
}

export interface TextStyleProps {
  size: string;
  weight: string;
}

const textSizes: Record<string, { fontSize: string; lineHeight: string }> = {
  base: {
    fontSize: "14px",
    lineHeight: "24px",
  },
  lg: {
    fontSize: "20px",
    lineHeight: "32px",
  },
  xl: {
    fontSize: "40px",
    lineHeight: "48px",
  },
};

const textWeights: Record<string, string> = {
  normal: "400",
  medium: "500",
  bold: "600",
};

const TextWrapper = styled.p<TextStyleProps>`
  font-size: ${({ size }) => textSizes[size].fontSize};
  line-height: ${({ size }) => textSizes[size].lineHeight};
  font-weight: ${({ weight }) => textWeights[weight]};
`;

const Text: React.FC<TextProps> = ({
  text,
  size = "base",
  weight = "normal",
}) => {
  return (
    <TextWrapper size={size} weight={weight} className="">
      {text}
    </TextWrapper>
  );
};

export default Text;
