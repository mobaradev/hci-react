import {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import carsLoaded from "../../../../data/cars.json";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 52px;
  left: 0;
  background-color: darkred;
  
  float: left;
`;

const Element = styled.div`
  width: 100%;
  height: 40px;
  background-color: burlywood;
  display: flex;
  align-items: center;
  padding-left: 20px;
  transition: 0.5s;
  border-bottom: 1px dotted gray;
  cursor: pointer;
  color: black;
  float: left;
  
  &:hover {
    background-color: aliceblue;
  }
`;

class Hints extends Component {
    constructor() {
        super();
        this.state = {
            availableCars: []
        }
    }

    componentDidMount() {
        this.loadCars();
    }

    loadCars() {
        let cars = carsLoaded;
        this.setState({availableCars: cars});
    }

    render() {
        return(
            <Container>
                {
                    this.state.availableCars.map(element => (
                        this.props.searchingName !== "" && element.name.toUpperCase().includes(this.props.searchingName.toUpperCase())
                        ?
                            <Link to={`/car/${element.id}`}>
                                <Element>
                                    {element.name}
                                </Element>
                            </Link>
                        :
                            ""
                    ))
                }
            </Container>
        )
    }
}

export default Hints;