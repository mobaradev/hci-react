import {Component} from "react";
import Header from "../../components/Header/Header";
import IndexPage from "../../pages/IndexPage/IndexPage";
import styled from "styled-components";
import CarPage from "../../pages/CarPage/CarPage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class CarView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <CarPage />
            </Container>
        )
    }

}

export default CarView;