import {Component} from "react";
import SearchingBar from "./SearchingBar/SearchingBar";
import styled from "styled-components";
import Propositions from "./Propositions/Propositions";
import ButtonHuge from "../../components/ButtonHuge/ButtonHuge";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  float: left;
`;

const PropositionsContainer = styled.div`
  width: 100%;
  height: calc(100% - 140px - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: left;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 300px;
  //background-color: #61dafb;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

const BottomSectionText = styled.div`
  width: auto;
  height: 100%;
  background-color: #D8D8D8;
  padding: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
                <BottomSection data-aos="fade-down">
                    <div style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <BottomSectionText>
                            <div>
                                <h2>Still nothing?</h2>
                                <p>We also offer great system that will let you find cars suited for your needs!</p>
                                <p>
                                    <b>It's free ans simple</b>
                                </p>
                            </div>
                        </BottomSectionText>
                        <ButtonHuge>Fill our questionariusz</ButtonHuge>
                    </div>
                </BottomSection>
            </Container>
        )
    }
}

export default IndexPage;
