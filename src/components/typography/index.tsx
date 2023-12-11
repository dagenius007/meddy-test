import { TextWrapper } from "./styles";
import { IText } from "./types";

const Text: React.FC<IText> = ({ text, size = "base", weight = "normal" }) => {
  return (
    <TextWrapper size={size} weight={weight} className="">
      {text}
    </TextWrapper>
  );
};

export default Text;
