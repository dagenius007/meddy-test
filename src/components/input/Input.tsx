import styled from "styled-components";
import { ReactElement } from "react";

interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyles?: Record<string, string>;
  customClass?: string;
  name: string;
  value: string;
  icon?: ReactElement;
  placeholder?: string;
}

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

const Input: React.FC<InputProps> = ({
  handleChange,
  customStyles,
  customClass,
  name,
  value,
  icon,
}) => {
  return (
    <InputWrapper style={customStyles} className={customClass}>
      {icon && icon}
      <InputField
        onChange={handleChange}
        name={name}
        value={value}
        placeholder="Search by username"
        hasIcon={!!icon}
      />
    </InputWrapper>
  );
};

export default Input;
