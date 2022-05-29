import {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import carsLoaded from "../../../data/cars.json";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  float: left;
`;

const Element = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  transition: 0.5s;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 8px;
  
  :hover {
    width: 160px;
    height: 128px;
    filter: brightness(80%);
  }
`;

class Propositions extends Component {
    constructor() {
        super();
        this.state = {
            availableCars: [],
            proposedCars: []
        }
    }

    componentDidMount() {
        this.loadCars();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    loadCars() {
        let cars = carsLoaded;
        this.setState({availableCars: cars});
        let proposedCars = [];
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].isMain) proposedCars.push(cars[i]);
        }


        this.shuffleArray(proposedCars);
        proposedCars = proposedCars.splice(0, 4);
        this.setState({proposedCars: proposedCars});
    }

    render() {
        return(
            <Container>
                {
                    this.state.proposedCars && this.state.proposedCars.map(car =>
                        <Link to={"/car/" + car.id}><Element title={car.name} src={car.photo} /></Link>
                    )
                }
            </Container>
        )
    }
}

export default Propositions;