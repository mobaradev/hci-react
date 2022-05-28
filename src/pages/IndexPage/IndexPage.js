import {Component} from "react";
import SearchingBar from "./SearchingBar/SearchingBar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #61dafb;
  float: left;
`;

class IndexPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Container>
                <SearchingBar />
            </Container>
        )
    }
}

export default IndexPage;
