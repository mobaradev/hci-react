import styled from "styled-components";
import {Component} from "react";

const Container = styled.div`
  width: calc(100% - 370px);
  margin-right: 20px;
  height: 100%;
  background-color: #C4C4C4;
  border-radius: 8px;
  padding: 24px 12px;
  overflow: auto;
  float: left;
`;

const MapImage = styled.img`
  width: auto;
  height: auto;
  max-height: calc(100% - 48px);
  border-radius: 8px;
`

class OffersMap extends Component {
    constructor() {
        super();
        this.state = {
            offers: [1,2,3,4,5]
        }
    }

    render() {
        return(
            <Container>
                <MapImage data-aos="fade-left" src="http://www.press.pl/images/contents/photo_57968_1563533316_big.jpg" draggable="false" />
            </Container>
        )
    }
}

export default OffersMap;