import styled from "styled-components";
import { InputField, InputWrapper } from "./input.styles";
import { InputProps } from "./input.types";

const Input: React.FC<InputProps> = ({
  handleChange,
  customStyles,
  name,
  value,
  icon,
}) => {
  return (
    <InputWrapper style={customStyles}>
      {icon ? icon : ""}
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
