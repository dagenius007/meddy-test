import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  svg {
    color: #999dff;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    position: absolute;
  }
`;

const InputField = styled.input<{ hasIcon: boolean }>`
  appearance: none;
  height: 40px;
  width: 100%;
  padding: 6px 10px;
  padding-left: ${({ hasIcon }) => (hasIcon ? "30px" : "10px")};
  box-sizing: border-box;
  border: 1px solid #dee5e7;
  color: #6f767e;
  border-radius: 5px;
  transition: 0.3s ease-in;
  outline: none;
  &:focus {
    border: 1px solid #999dff;
  }
  &::placeholder {
    color: #aab1b9;
  }
`;

export { InputField, InputWrapper };
