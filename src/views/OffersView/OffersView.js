import {Component} from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import OffersPage from "../../pages/OffersPage/OffersPage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

class OffersView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <OffersPage />
            </Container>
        )
    }

}

export default OffersView;