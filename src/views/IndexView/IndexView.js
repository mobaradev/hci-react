import {Component} from "react";
import Header from "../../components/Header/Header";
import IndexPage from "../../pages/IndexPage/IndexPage";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: orange;
  float: left;
`;

class IndexView extends Component {
    render() {
        return (
            <Container>
                <Header />
                <IndexPage />
            </Container>
        )
    }

}

export default IndexView;