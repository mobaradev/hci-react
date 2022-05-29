import styled from "styled-components";
import {Component} from "react";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #C4C4C4;
  padding: 0 20px;
  position: relative;
  margin-bottom: 40px;
  float: left;
`;

const ComparisonButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  background-color: #4EC670;
  padding: 20px 32px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.5s;
  font-size: 22px;
  font-weight: 600;

  &:hover {
    background-color: #34964f;
  }
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container>
                <Link to="/" style={{textDecoration: "none", color: "black"}}><h1 style={{textDecoration: "none", color: "black"}}>CompCar</h1></Link>
                <Link to="/comparison"><ComparisonButton>Comparison</ComparisonButton></Link>
            </Container>
        )
    }
}

export default Header;