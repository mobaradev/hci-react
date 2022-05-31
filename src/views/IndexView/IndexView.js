import {Component} from "react";
import Header from "../../components/Header/Header";
import IndexPage from "../../pages/IndexPage/IndexPage";
import styled from "styled-components";

import Aos from 'aos';
import "aos/dist/aos.css"

const Container = styled.div`
  width: 100%;
  height: 100vh;
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