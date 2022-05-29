import styled from "styled-components";
import {Component} from "react";

const Container = styled.div`
  width: calc(100% - 370px);
  margin-right: 20px;
  height: 100%;
  background-color: #C4C4C4;
  border-radius: 8px;
  padding: 8px 12px;
  overflow: auto;
  float: left;
`;

const Element = styled.div`
  width: 100%;
  height: 100px;
  background-color: #A1A1A1;
  margin: 10px 0;
  border-radius: 8px;
  float: left;
`

class OffersList extends Component {
    constructor() {
        super();
        this.state = {
            offers: [1,2,3,4,5]
        }
    }

    render() {
        return(
            <Container>
                {this.state.offers.map(offer => <Element></Element>)}
            </Container>
        )
    }
}

export default OffersList;