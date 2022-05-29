import styled from "styled-components";
import Button from "../Button/Button";

const Select = styled.select`
  width: 100%;
  height: auto;
  border: 1px solid gray;
  background-color: #C4C4C4;
  border-radius: 8px;
  padding: 8px 12px;
  transition: 0.5s;
  float: left;

  &:hover {
    background-color: #A1A1A1;
  }
`;

export default Select;