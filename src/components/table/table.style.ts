import styled from "styled-components";

const TableHeaderText = styled.div`
  position: relative;
  &::before {
    content: " ";
    height: 32px;
    width: 16px;
    background-color: #999dff;
    margin-right: 20px;
    margin-top: 20px;
    position: absolute;
    display: inline-block;
    border-radius: 4px;
  }
  p {
    margin-left: 28px;
  }
`;

export { TableHeaderText };
