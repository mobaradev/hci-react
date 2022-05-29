import {Component} from "react";
import styled from "styled-components";
import Hints from "./Hints/Hints";

const Container = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  margin-left: 50%;
  transform: translateX(-50%);
  float: left;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  font-size: 32px;
  border-radius: 8px;
  border: 0;
  padding: 0 12px;
  float: left;
`;

class SearchingBar extends Component {
    constructor() {
        super();
        this.state = {
            searchingName: ""
        }
    }
    render() {
        return(
            <Container>
                <Input type="text" placeholder="Enter name of the car" onChange={(e) => this.setState({searchingName: e.target.value})} />
                <Hints searchingName={this.state.searchingName} />
            </Container>
        )
    }
}

export default SearchingBar;