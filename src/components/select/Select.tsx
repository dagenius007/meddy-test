import styled from "styled-components";

interface OptionProps {
  label: string;
  value: string | number;
}
interface SelectProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  customStyles?: Record<string, string>;
  name: string;
  value: string | number;
  options: OptionProps[];
}

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectField = styled.select`
  appearance: none;
  z-index: 2;
  height: 40px;
  width: 100%;
  padding: 6px 25px 6px 10px;
  box-sizing: border-box;
  border: 1px solid #dee5e7;
  color: #6f767e;
  border-radius: 5px;
  transition: 0.3s ease-in;
  outline: none;
  background: url("/icons/angle-down-icon.png") repeat;
  &:focus {
    border: 1px solid #999dff;
  }
  &::placeholder {
    color: #aab1b9;
  }
`;

const OptionField = styled.option`
  appearance: none;
  height: 40px;
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid #dee5e7;
  color: #6f767e;
  border-radius: 5px;
  transition: 0.3s ease-in;
`;

const Select: React.FC<SelectProps> = ({
  handleChange,
  customStyles,
  name,
  options,
  value,
}) => {
  return (
    <SelectWrapper style={customStyles}>
      <SelectField
        name={name}
        id={name}
        onChange={handleChange}
        defaultValue={value}
      >
        {options.map((option: OptionProps, i: number) => (
          <OptionField value={option.value} key={i}>
            {option.label}
          </OptionField>
        ))}
      </SelectField>
    </SelectWrapper>
  );
};

export default Select;
