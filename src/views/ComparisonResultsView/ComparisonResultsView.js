import {Component} from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import ComparisonResultsPage from "../../pages/ComparisonResultsPage/ComparisonResultsPage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class CarView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <ComparisonResultsPage />
            </Container>
        )
    }

}

export default CarView;