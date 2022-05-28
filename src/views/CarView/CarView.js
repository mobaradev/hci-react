import {Component} from "react";
import Header from "../../components/Header/Header";
import IndexPage from "../../pages/IndexPage/IndexPage";
import styled from "styled-components";
import CarPage from "../../pages/CarPage/CarPage";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: orange;
  float: left;
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