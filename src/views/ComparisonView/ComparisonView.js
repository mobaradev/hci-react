import {Component} from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import ComparisonPage from "../../pages/ComparisonPage/ComparisonPage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class CarView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <ComparisonPage />
            </Container>
        )
    }

}

export default CarView;