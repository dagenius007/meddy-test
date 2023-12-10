import styled from "styled-components";

interface IInput {}

const InputWrapper = styled.div``;
const Input: React.FC<IInput> = () => {
  return (
    <InputWrapper>
      <input />
    </InputWrapper>
  );
};

export default Input;
