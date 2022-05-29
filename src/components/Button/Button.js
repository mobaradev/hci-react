import styled from "styled-components";

const Button = styled.button`
  width: auto;
  height: auto;
  padding: 20px 30px;
  background-color: #C4C4C4;
  border: 0;
  border-radius: 8px;
  margin: 10px;
  transition: 0.5s;
  cursor: pointer;
  float: left;
  
  &:hover {
    background-color: #A1A1A1;
  }
`;

export default Button;