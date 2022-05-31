import {Component} from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import PriceAnalysisPage from "../../pages/PriceAnalysisPage/PriceAnalysisPage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class PriceAnalysisView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <PriceAnalysisPage />
            </Container>
        )
    }
}

export default PriceAnalysisView;