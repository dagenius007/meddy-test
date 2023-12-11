export interface IText {
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

export { textSizes, textWeights };
