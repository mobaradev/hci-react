import styled from "styled-components";
import {Component} from "react";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: pink;
  padding: 0 20px;
  position: relative;
  float: left;
`;

const ComparisonButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  background-color: gold;
  padding: 24px 32px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    background-color: goldenrod;
  }
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container>
                <h1>CompCar</h1>
                <ComparisonButton>test</ComparisonButton>
            </Container>
        )
    }
}

export default Header;