import { RuleSet, css } from "styled-components";
import { breakPoints } from "../internals/constants";

const media: Record<string, (args: TemplateStringsArray) => RuleSet<object>> = {
  sm: (...args) => css`
    @media (max-width: ${breakPoints["screen-sm-min"]}) {
      ${css(...args)};
    }
  `,
  xsm: (...args) => css`
    @media (max-width: ${breakPoints[
        "screen-sm-min"
      ]}) and (max-width: ${breakPoints["screen-md-min"]}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: ${breakPoints["screen-md-min"]}) {
      ${css(...args)};
    }
  `,
};

export { media };
