import {Component} from "react";
import SearchingBar from "./SearchingBar/SearchingBar";
import styled from "styled-components";
import Propositions from "./Propositions/Propositions";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const PropositionsContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
                <PropositionsContainer>
                    <div>
                        <h2>Don't you know the model?</h2>
                        <h3>Try out one of these!</h3>
                        <Propositions />
                    </div>
                </PropositionsContainer>
            </Container>
        )
    }
}

export default IndexPage;
